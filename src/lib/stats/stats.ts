/**
 * FX Remit public stats: reference implementation for fx-remit.xyz/stats.
 *
 * Sources (all public; BLOCKSCOUT_API_KEY is optional):
 *  1. legacy-celo.json: frozen snapshot of the retired FX Remit v1 + v2 contracts on Celo
 *     (107 RemittanceLogged events, last activity 2026-03-08). amountUsd is precomputed with the
 *     original Dune conversion (cNGN 1387.29, cKES 129.11, cGHS 10.79, cEUR 0.86 per USD; CELO 0.075 USD).
 *  2. app-history.json: frozen snapshot of the FX Remit app cash-outs on Base from before the
 *     PayoutForwarder existed (each verified on-chain).
 *  3. PayoutFunded events from the PayoutForwarder contract on Base, read from the public
 *     Blockscout API. Every bank payout made in the FX Remit app since 2026-10-04 emits one.
 *
 * Only USD amounts, times and explorer links are shown. App payers stay anonymous (sender: null).
 */
import legacyCelo from './legacy-celo.json';
import appHistory from './app-history.json';

export const FORWARDER = '0x05FAA8d97e5eB76778F4e1ae8327DE63692c8F83';
/** keccak256("PayoutFunded(uint256,address,address,address,uint256)") */
export const PAYOUT_FUNDED_TOPIC = '0x022beabd9b9145f1ef27fe60d5898e73e38f7fa81e739f958b65c67da28e4f05';
export const LEGACY_CONTRACTS = {
  v1: '0x1245211abae5013e7f5523013b78f50ab44c2c57',
  v2: '0xd8726f627b5a14c17cb848ee3c564283cba8e057',
} as const;

type Chain = 'base' | 'celo';

const BLOCKSCOUT: Record<Chain, string> = {
  base: 'https://base.blockscout.com/api',
  celo: 'https://celo.blockscout.com/api',
};

const EXPLORER: Record<Chain, string> = {
  base: 'https://basescan.org/tx/',
  celo: 'https://celoscan.io/tx/',
};

/** USDC / USDT on each chain (both 6 decimals); anything else is ignored. */
const STABLES: Record<Chain, Record<string, string>> = {
  base: {
    '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': 'USDC',
    '0xfde4c96c8593536e31f229ea8f37b2ada2699bb2': 'USDT',
  },
  celo: {
    '0xceba9300f2b948710d2653dd7b07f33a8b32118c': 'USDC',
    '0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e': 'USDT',
  },
};

type LegacyRow = {
  version: 'v1' | 'v2';
  at: string;
  txHash: string;
  sender: string;
  fromCurrency: string;
  toCurrency: string;
  amountUsd: number;
};

/** One transaction on the page. `userKey` is internal (unique-user counts) and never rendered. */
type Entry = {
  source: 'v1' | 'v2' | 'app';
  at: string;
  amountUsd: number;
  chain: Chain;
  sender: string | null;
  /** FX Remit order id from PayoutFunded (app rows); matches the order id on the user's receipt. */
  orderId: string | null;
  txHash: string;
  corridor: string;
  userKey: string;
};

type Bucket = { volumeUsd: number; transactions: number; uniqueUsers: number };

export type PublicStats = {
  updatedAt: string;
  totals: Bucket & { avgTransactionUsd: number; firstActivityAt: string | null; lastActivityAt: string | null };
  bySource: { legacyCelo: Bucket; app: Bucket };
  daily: Array<{ day: string; cumulativeVolumeUsd: number; cumulativeTransactions: number } & Bucket>;
  monthly: Array<{ month: string } & Bucket>;
  recent: Array<Omit<Entry, 'userKey'> & { explorerUrl: string }>;
  topSenders: Array<{ sender: string; transactions: number; volumeUsd: number }>;
  corridors: Array<{ corridor: string; transactions: number; volumeUsd: number }>;
};

const round2 = (n: number) => Math.round(n * 100) / 100;

export function shortWallet(address: string): string {
  const a = address.trim().toLowerCase();
  return a.length > 12 ? `${a.slice(0, 6)}…${a.slice(-4)}` : a;
}

type BlockscoutLog = {
  data: string;
  topics: (string | null)[];
  transactionHash: string;
  timeStamp: string;
  blockNumber: string;
  logIndex: string;
};

/** Blockscout returns at most this many logs per getLogs call. */
const LOGS_PER_CALL = 1000;

/**
 * All PayoutFunded events on one chain. Blockscout ignores `page` on getLogs (page 2 repeats
 * page 1), so a full response is followed by another call starting at the last block seen,
 * and logs already counted are skipped.
 */
async function fetchPayouts(chain: Chain, init?: RequestInit): Promise<Entry[]> {
  const out: Entry[] = [];
  const seen = new Set<string>();
  // Optional free key from blockscout.com raises the keyless limit (10 requests per window).
  const key = process.env.BLOCKSCOUT_API_KEY ? `&apikey=${process.env.BLOCKSCOUT_API_KEY}` : '';
  for (let fromBlock = 0; ; ) {
    const url =
      `${BLOCKSCOUT[chain]}?module=logs&action=getLogs&fromBlock=${fromBlock}&toBlock=latest` +
      `&address=${FORWARDER}&topic0=${PAYOUT_FUNDED_TOPIC}${key}`;
    // A hung request would otherwise stall the build or the ISR refresh.
    const get = () => fetch(url, { ...init, signal: init?.signal ?? AbortSignal.timeout(15_000) });
    let res = await get();
    if (res.status === 429) {
      // Free public API: back off once before giving up.
      await new Promise((r) => setTimeout(r, 2000));
      res = await get();
    }
    if (!res.ok) throw new Error(`Blockscout ${chain} ${res.status}`);
    const body = (await res.json()) as { status: string; message: string; result: BlockscoutLog[] | null };
    // "No logs found" comes back as status 0 with an empty result: not an error.
    const logs = Array.isArray(body.result) ? body.result : [];
    if (body.status !== '1' && !/no logs/i.test(body.message)) throw new Error(`Blockscout ${chain}: ${body.message}`);

    for (const l of logs) {
      const id = `${l.transactionHash}:${l.logIndex}`;
      if (seen.has(id)) continue;
      seen.add(id);

      // data = token (32 bytes) ‖ amount (32 bytes); topics = [sig, orderId, payer, sink]
      const token = `0x${l.data.slice(2 + 24, 2 + 64)}`.toLowerCase();
      const symbol = STABLES[chain][token];
      if (!symbol) continue;
      const amount = Number(BigInt(`0x${l.data.slice(2 + 64, 2 + 128)}`)) / 1e6;
      const payer = `0x${(l.topics[2] ?? '').slice(26)}`.toLowerCase();
      out.push({
        source: 'app',
        at: new Date(parseInt(l.timeStamp, 16) * 1000).toISOString(),
        amountUsd: amount,
        chain,
        sender: null,
        orderId: BigInt(l.topics[1] ?? '0x0').toString(),
        txHash: l.transactionHash,
        corridor: `${symbol}-bank`,
        userKey: payer,
      });
    }
    if (logs.length < LOGS_PER_CALL) return out;
    const lastBlock = parseInt(logs[logs.length - 1].blockNumber, 16);
    // Only possible if one block held more than 1000 payouts: stop rather than loop forever.
    if (!(lastBlock > fromBlock)) throw new Error(`Blockscout ${chain}: cannot page past block ${fromBlock}`);
    fromBlock = lastBlock;
  }
}

function legacyEntries(): Entry[] {
  return (legacyCelo as LegacyRow[]).map((r) => ({
    source: r.version,
    at: new Date(r.at).toISOString(),
    amountUsd: r.amountUsd,
    chain: 'celo',
    sender: r.sender.toLowerCase(),
    orderId: null,
    txHash: r.txHash,
    corridor: `${r.fromCurrency}-${r.toCurrency}`,
    userKey: r.sender.toLowerCase(),
  }));
}

type AppHistoryRow = { at: string; txHash: string; chain: Chain; amountUsd: number; corridor: string; userKey: string };

/** FX Remit app cash-outs from before the PayoutForwarder (frozen, each verified on-chain). */
function appHistoryEntries(): Entry[] {
  return (appHistory as AppHistoryRow[]).map((r) => ({
    source: 'app',
    at: new Date(r.at).toISOString(),
    amountUsd: r.amountUsd,
    chain: r.chain,
    sender: null,
    orderId: null,
    txHash: r.txHash,
    corridor: r.corridor,
    userKey: r.userKey.toLowerCase(),
  }));
}

function bucket(entries: Entry[]): Bucket {
  return {
    volumeUsd: round2(entries.reduce((s, e) => s + e.amountUsd, 0)),
    transactions: entries.length,
    uniqueUsers: new Set(entries.map((e) => e.userKey)).size,
  };
}

function groupBy(entries: Entry[], key: (e: Entry) => string): Map<string, Entry[]> {
  const m = new Map<string, Entry[]>();
  for (const e of entries) {
    const k = key(e);
    const g = m.get(k);
    if (g) g.push(e);
    else m.set(k, [e]);
  }
  return m;
}

/** Pure: everything the page shows, from the two entry lists. */
export function buildStats(legacy: Entry[], app: Entry[], now = new Date()): PublicStats {
  const all = [...legacy, ...app].sort((a, b) => a.at.localeCompare(b.at));
  const totals = bucket(all);
  return {
    updatedAt: now.toISOString(),
    totals: {
      ...totals,
      avgTransactionUsd: totals.transactions ? round2(totals.volumeUsd / totals.transactions) : 0,
      firstActivityAt: all[0]?.at ?? null,
      lastActivityAt: all.at(-1)?.at ?? null,
    },
    bySource: { legacyCelo: bucket(legacy), app: bucket(app) },
    daily: (() => {
      let volume = 0;
      let count = 0;
      return [...groupBy(all, (e) => e.at.slice(0, 10))].map(([day, es]) => {
        const b = bucket(es);
        volume += es.reduce((sum, e) => sum + e.amountUsd, 0); // raw, so it ends at totals.volumeUsd
        count += b.transactions;
        return { day, ...b, cumulativeVolumeUsd: round2(volume), cumulativeTransactions: count };
      });
    })(),
    monthly: [...groupBy(all, (e) => e.at.slice(0, 7))].map(([month, es]) => ({ month, ...bucket(es) })),
    recent: all
      .slice(-20)
      .reverse()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- drops userKey from the output
      .map(({ userKey: _k, ...e }) => ({
        ...e,
        sender: e.sender ? shortWallet(e.sender) : null,
        explorerUrl: `${EXPLORER[e.chain]}${e.txHash}`,
      })),
    // v1/v2 callers only: app payers are never ranked or shown.
    topSenders: [...groupBy(legacy, (e) => e.userKey)]
      .map(([s, es]) => ({ sender: shortWallet(s), transactions: es.length, volumeUsd: bucket(es).volumeUsd }))
      .sort((a, b) => b.volumeUsd - a.volumeUsd || b.transactions - a.transactions)
      .slice(0, 10),
    corridors: [...groupBy(all, (e) => e.corridor)]
      .map(([corridor, es]) => ({ corridor, transactions: es.length, volumeUsd: bucket(es).volumeUsd }))
      .sort((a, b) => b.transactions - a.transactions || b.volumeUsd - a.volumeUsd),
  };
}

/**
 * Fetch + build. In Next.js, pass `{ next: { revalidate: 600 } }` so Blockscout is hit at most
 * every 10 minutes, e.g. `await getStats({ next: { revalidate: 600 } } as RequestInit)`.
 */
export async function getStats(init?: RequestInit): Promise<PublicStats> {
  // App bank payouts settle through Paycrest on Base only. Add fetchPayouts('celo', init) here
  // if the app ever pays out through the forwarder on Celo.
  const live = await fetchPayouts('base', init);
  const seen = new Set(live.map((e) => e.txHash.toLowerCase()));
  const history = appHistoryEntries().filter((e) => !seen.has(e.txHash.toLowerCase()));
  return buildStats(legacyEntries(), [...history, ...live]);
}
