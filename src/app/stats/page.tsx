import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { formatApprox, marketEquivalent } from "@/lib/stats/fx";
import { FORWARDER, LEGACY_CONTRACTS, getStats, type PublicStats } from "@/lib/stats/stats";
import { ChainBadge } from "./ChainBadge";
import { LocalDateTime, TimeAgo } from "./LocalTime";
import { OrderId } from "./OrderId";
import { RateNote } from "./RateNote";
import { ActivityCharts, CumulativeChart } from "./StatsCharts";
import { StatsUnavailable } from "./StatsUnavailable";
import { corridorLabel, dayLabel, formatCount, formatUsd, monthLabel, pluralize, previousMonth } from "./format";

export const revalidate = 600; // rebuild at most every 10 minutes

const description = "Live, on-chain proof of FX Remit volume, transactions and users.";

export const metadata: Metadata = {
    title: "FX Remit Stats",
    description,
    openGraph: { title: "FX Remit Stats", description },
};

/**
 * In production a failed refresh is rethrown: Next keeps serving the last good page and retries
 * shortly after. During the build and in dev there's no earlier page, so show the quiet state.
 */
async function loadStats(): Promise<PublicStats | null> {
    try {
        return await getStats({ next: { revalidate } } as RequestInit);
    } catch (err) {
        if (process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) throw err;
        console.error("FX Remit stats unavailable:", err);
        return null;
    }
}

const CORRIDORS_SHOWN = 8;

const EXPLORER_LINKS = [
    { name: "FX Remit v1", chain: "celo", href: `https://celoscan.io/address/${LEGACY_CONTRACTS.v1}`, address: LEGACY_CONTRACTS.v1 },
    { name: "FX Remit v2", chain: "celo", href: `https://celoscan.io/address/${LEGACY_CONTRACTS.v2}`, address: LEGACY_CONTRACTS.v2 },
    { name: "PayoutForwarder", chain: "base", href: `https://basescan.org/address/${FORWARDER}`, address: FORWARDER },
] as const;

export default async function StatsPage() {
    const stats = await loadStats();
    if (!stats) return <StatsUnavailable />;

    const { totals } = stats;
    // Public market rate, never FX Remit's own: null (rate API down) hides the line.
    const ngn = await marketEquivalent(totals.volumeUsd, "NGN", { next: { revalidate: 3600 } } as RequestInit);

    const today = stats.updatedAt.slice(0, 10);
    const thisMonth = today.slice(0, 7);
    const lastMonth = previousMonth(thisMonth);
    const monthTotals = (month: string) =>
        stats.monthly.find((m) => m.month === month) ?? { volumeUsd: 0, transactions: 0, uniqueUsers: 0 };
    const [now, before] = [monthTotals(thisMonth), monthTotals(lastMonth)];

    const maxCorridorTx = Math.max(1, ...stats.corridors.map((c) => c.transactions));
    const corridorItem = (c: PublicStats["corridors"][number]) => (
        <li key={c.corridor}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-[14px]">
                <span className="font-medium text-[#1C1C1C]">{corridorLabel(c.corridor)}</span>
                <span className="tabular-nums text-[#3D3D3D]">
                    {pluralize(c.transactions, "transaction", "transactions")} · {formatUsd(c.volumeUsd)}
                </span>
            </div>
            <div className="mt-1.5 h-2.5 rounded-full bg-[#F5F5F5]">
                <div className="h-full rounded-full bg-[#2261FE]" style={{ width: `${(c.transactions / maxCorridorTx) * 100}%` }} />
            </div>
        </li>
    );

    return (
        <>
            <p className="mb-6 flex items-center justify-center md:justify-start gap-2 text-[14px] text-[#3D3D3D]">
                <span className="relative flex h-2.5 w-2.5" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span>
                    Live · Updated <TimeAgo iso={stats.updatedAt} />
                </span>
            </p>

            {/* Headline counters: volume first, then a 2 × 2 grid (beside it on large screens) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <Counter
                    featured
                    className="col-span-2 lg:row-span-2"
                    label="Total volume"
                    value={formatUsd(totals.volumeUsd)}
                    note={
                        ngn && (
                            <RateNote
                                amount={formatApprox(ngn.amount)}
                                caption="Naira equivalent at today's rate"
                                tip={`Naira equivalent of total USD volume at the market rate of ₦${ngn.rate.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })} per $1 (updated ${dayLabel(ngn.rateUpdatedAt.slice(0, 10), true)}).`}
                            />
                        )
                    }
                />
                <Counter label="Transactions" value={formatCount(totals.transactions)} />
                <Counter label="Unique users" value={formatCount(totals.uniqueUsers)} />
                <Counter label="Average transaction" value={formatUsd(totals.avgTransactionUsd)} />
                <Counter
                    label="Last activity"
                    value={totals.lastActivityAt ? <TimeAgo iso={totals.lastActivityAt} /> : "None yet"}
                    rows={[
                        ["Latest", totals.lastActivityAt ? <LocalDateTime iso={totals.lastActivityAt} /> : "None"],
                        ["Since", totals.firstActivityAt ? <LocalDateTime iso={totals.firstActivityAt} dateOnly /> : "None"],
                    ]}
                />
            </div>

            <Section eyebrow="Growth" title="Volume and payouts over time">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
                    <Card>
                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">Cumulative volume</h3>
                        <p className="mb-6 text-[14px] text-[#3D3D3D]">Running total of everything sent through FX Remit</p>
                        <CumulativeChart daily={stats.daily} today={today} metric="volume" />
                    </Card>
                    <Card>
                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">Cumulative payouts</h3>
                        <p className="mb-6 text-[14px] text-[#3D3D3D]">Running count of every FX Remit transaction</p>
                        <CumulativeChart daily={stats.daily} today={today} metric="payouts" />
                    </Card>
                </div>
                <Card className="mt-4 md:mt-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">This month</h3>
                        <p className="text-[14px] text-[#3D3D3D]">
                            {monthLabel(thisMonth)} vs {monthLabel(lastMonth)}
                        </p>
                    </div>
                    <dl className="mt-2 grid divide-y divide-gray-100 md:grid-cols-3 md:divide-x md:divide-y-0">
                        <MonthRow label="Volume" now={now.volumeUsd} before={before.volumeUsd} format={formatUsd} lastMonth={lastMonth} />
                        <MonthRow label="Transactions" now={now.transactions} before={before.transactions} format={formatCount} lastMonth={lastMonth} />
                        <MonthRow label="Users" now={now.uniqueUsers} before={before.uniqueUsers} format={formatCount} lastMonth={lastMonth} />
                    </dl>
                </Card>
                <Card className="mt-4 md:mt-6">
                    <ActivityCharts daily={stats.daily} monthly={stats.monthly} today={today} />
                </Card>
            </Section>

            <Section eyebrow="Recent activity" title="Latest transactions">
                <Card flush>
                    {/* `relative` keeps the absolutely positioned sr-only text inside the scroll area; without it the page scrolls sideways on phones */}
                    <div className="relative overflow-x-auto">
                        <table className="w-full min-w-[720px] text-left text-[14px]">
                            <thead className="bg-[#F5F5F5] text-[12px] uppercase tracking-wide text-[#3D3D3D]">
                                <tr>
                                    <th scope="col" className="px-5 md:px-8 py-3 font-medium">When</th>
                                    <th scope="col" className="px-4 py-3 font-medium">Amount</th>
                                    <th scope="col" className="px-4 py-3 font-medium">Order ID</th>
                                    <th scope="col" className="px-4 py-3 font-medium">Network</th>
                                    <th scope="col" className="px-4 py-3 font-medium">Sender</th>
                                    <th scope="col" className="px-5 md:px-8 py-3 font-medium text-right">
                                        <span className="sr-only">Explorer</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {stats.recent.map((r, i) => (
                                    <tr key={`${r.txHash}-${i}`}>
                                        <td className="px-5 md:px-8 py-4 whitespace-nowrap">
                                            <div className="font-medium text-[#1C1C1C]">
                                                <TimeAgo iso={r.at} />
                                            </div>
                                            <div className="text-[12px] text-gray-500">
                                                <LocalDateTime iso={r.at} />
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap font-semibold tabular-nums text-[#1C1C1C]">{formatUsd(r.amountUsd)}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {r.orderId ? (
                                                <OrderId id={r.orderId} />
                                            ) : (
                                                <>
                                                    <span className="text-gray-400" aria-hidden>—</span>
                                                    <span className="sr-only">None</span>
                                                </>
                                            )}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-2">
                                                <ChainBadge chain={r.chain} />
                                                {r.source !== "app" && (
                                                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-semibold text-[#FF6600]">{r.source}</span>
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {r.sender ? <span className="font-mono text-[13px]">{r.sender}</span> : "FX Remit user"}
                                        </td>
                                        <td className="px-5 md:px-8 py-4 whitespace-nowrap text-right">
                                            <a
                                                href={r.explorerUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-[#2261FE] hover:text-blue-700 transition-colors"
                                            >
                                                View ↗<span className="sr-only"> transaction on the block explorer</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </Section>

            <Section eyebrow="Breakdown" title="Senders and corridors">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
                    <Card flush>
                        <div className="px-5 pt-5 md:px-8 md:pt-8">
                            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">Top senders</h3>
                            <p className="mb-4 text-[14px] text-[#3D3D3D]">Wallets that sent the most through the Celo contracts</p>
                        </div>
                        <div className="relative overflow-x-auto">
                            <table className="w-full min-w-[400px] text-left text-[14px]">
                                <thead className="bg-[#F5F5F5] text-[12px] uppercase tracking-wide text-[#3D3D3D]">
                                    <tr>
                                        <th scope="col" className="px-5 md:px-8 py-3 font-medium">Wallet</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-right">Transactions</th>
                                        <th scope="col" className="px-5 md:px-8 py-3 font-medium text-right">Volume</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {stats.topSenders.map((s, i) => (
                                        <tr key={s.sender}>
                                            <td className="px-5 md:px-8 py-3 whitespace-nowrap">
                                                <span className="mr-3 inline-block w-5 text-gray-400 tabular-nums">{i + 1}</span>
                                                <span className="font-mono text-[13px]">{s.sender}</span>
                                            </td>
                                            <td className="px-4 py-3 text-right tabular-nums">{formatCount(s.transactions)}</td>
                                            <td className="px-5 md:px-8 py-3 text-right font-semibold tabular-nums text-[#1C1C1C]">{formatUsd(s.volumeUsd)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">Corridors</h3>
                        <p className="mb-6 text-[14px] text-[#3D3D3D]">What people sent, and what it became, by number of transactions</p>
                        <ul className="space-y-4">{stats.corridors.slice(0, CORRIDORS_SHOWN).map(corridorItem)}</ul>
                        {stats.corridors.length > CORRIDORS_SHOWN && (
                            <details className="group mt-4">
                                <summary className="cursor-pointer list-none text-[14px] font-medium text-[#2261FE] hover:text-blue-700">
                                    <span className="group-open:hidden">Show all {formatCount(stats.corridors.length)} corridors</span>
                                    <span className="hidden group-open:inline">Show fewer</span>
                                </summary>
                                <ul className="mt-4 space-y-4">{stats.corridors.slice(CORRIDORS_SHOWN).map(corridorItem)}</ul>
                            </details>
                        )}
                    </Card>
                </div>
            </Section>

            <Section eyebrow="Verify it yourself" title="Every number is on-chain">
                <Card>
                    <p className="max-w-3xl text-[16px] md:text-[18px] leading-[150%] text-[#3D3D3D]">
                        Every FX Remit transaction settles on a public blockchain. Each bank payout emits a{" "}
                        <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 font-mono text-[0.9em] text-[#1C1C1C]">PayoutFunded</code> event
                        from our contract with its order ID. Click any transaction above to verify it.
                    </p>
                    <p className="mt-3 max-w-3xl text-[16px] md:text-[18px] leading-[150%] text-[#3D3D3D]">
                        Have an FX Remit receipt? Find its order ID in the table above and open the transaction on Basescan.
                    </p>
                    <ul className="mt-6 grid gap-3 md:grid-cols-3">
                        {EXPLORER_LINKS.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-full flex-col gap-2 rounded-2xl border border-gray-200 p-4 transition-colors hover:border-[#2261FE]"
                                >
                                    <span className="flex items-center justify-between gap-2 font-medium text-[#1C1C1C]">
                                        <span>
                                            {l.name} ({l.chain === "base" ? "Base" : "Celo"})
                                        </span>
                                        <span className="text-[#2261FE]" aria-hidden>↗</span>
                                    </span>
                                    <span className="break-all font-mono text-[12px] text-gray-500">{l.address}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Card>
            </Section>

            {/* Attribution required by ExchangeRate-API's free tier */}
            {ngn && (
                <p className="mt-16 text-center text-[12px] text-gray-500">
                    <a
                        href="https://www.exchangerate-api.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 transition-colors hover:text-[#2261FE] hover:underline"
                    >
                        Rates by ExchangeRate-API
                    </a>
                </p>
            )}
        </>
    );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
    return (
        <section className="mt-16 md:mt-24">
            <p className="text-[#FF6600] text-[16px] md:text-[18px] leading-[150%] mb-2">{eyebrow}</p>
            <h2 className="mb-6 md:mb-8 text-[28px] md:text-[40px] font-medium leading-tight text-[#1C1C1C]">{title}</h2>
            {children}
        </section>
    );
}

/** `flush` drops the padding so a table can run edge to edge. */
function Card({ className = "", flush = false, children }: { className?: string; flush?: boolean; children: ReactNode }) {
    return (
        <div className={`rounded-[2rem] border border-gray-100 bg-white shadow-sm ${flush ? "overflow-hidden" : "p-5 md:p-8"} ${className}`}>
            {children}
        </div>
    );
}

function Counter({
    label,
    value,
    note,
    rows,
    featured = false,
    className = "",
}: {
    label: string;
    value: ReactNode;
    /** Smaller line under the value. */
    note?: ReactNode;
    rows?: [string, ReactNode][];
    featured?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`flex flex-col rounded-[1.5rem] p-4 md:p-6 ${featured ? "bg-[#2261FE] text-white" : "border border-gray-100 bg-white shadow-sm"} ${className}`}
            style={featured ? { boxShadow: "0px 5px 0px 0px #FF6600" } : undefined}
        >
            <p className={`text-[13px] md:text-[14px] ${featured ? "text-blue-100" : "text-[#3D3D3D]"}`}>{label}</p>
            <p className={`mt-1 font-bold leading-tight tabular-nums ${featured ? "text-[40px] md:text-[56px]" : "text-[24px] md:text-[28px] text-[#1C1C1C]"}`}>
                {value}
            </p>
            {note}
            {rows && (
                <div className="mt-auto pt-4">
                    <dl className={`space-y-1 border-t pt-3 text-[12px] md:text-[13px] ${featured ? "border-white/20 text-blue-100" : "border-gray-100 text-[#3D3D3D]"}`}>
                        {rows.map(([name, v]) => (
                            <div key={name} className="flex flex-wrap justify-between gap-x-2">
                                <dt>{name}</dt>
                                <dd className={`font-medium tabular-nums ${featured ? "text-white" : "text-[#1C1C1C]"}`}>{v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            )}
        </div>
    );
}

function MonthRow({
    label,
    now,
    before,
    format,
    lastMonth,
}: {
    label: string;
    now: number;
    before: number;
    format: (n: number) => string;
    lastMonth: string;
}) {
    const change = before > 0 ? ((now - before) / before) * 100 : null;
    return (
        <div className="py-4 md:px-6 md:first:pl-0 md:last:pr-0">
            <dt className="text-[13px] text-[#3D3D3D]">{label}</dt>
            <dd>
                <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[22px] font-bold tabular-nums text-[#1C1C1C]">{format(now)}</span>
                    {change !== null && (
                        <span
                            className={`rounded-full px-2 py-0.5 text-[12px] font-semibold tabular-nums ${
                                change >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                            }`}
                        >
                            {change >= 0 ? "+" : "−"}
                            {Math.abs(change).toFixed(1)}%
                        </span>
                    )}
                </div>
                <p className="text-[12px] text-gray-500 tabular-nums">
                    {format(before)} in {monthLabel(lastMonth)}
                </p>
            </dd>
        </div>
    );
}
