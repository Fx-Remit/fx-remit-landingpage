/**
 * Market-rate equivalent of USD volume, e.g. "≈ ₦3.1M at today's rate".
 * Uses the public market rate (never FX Remit's own rates), so it reveals nothing about pricing.
 * Source: ExchangeRate-API open access (free, no key, updates daily; attribution required).
 */
export type MarketEquivalent = { currency: string; rate: number; amount: number; rateUpdatedAt: string };

export async function marketEquivalent(
  volumeUsd: number,
  currency = 'NGN',
  init?: RequestInit,
): Promise<MarketEquivalent | null> {
  try {
    // A hung request would otherwise stall the build or the ISR refresh.
    const res = await fetch('https://open.er-api.com/v6/latest/USD', { ...init, signal: init?.signal ?? AbortSignal.timeout(10_000) });
    if (!res.ok) return null;
    const body = (await res.json()) as { result: string; rates?: Record<string, number>; time_last_update_unix?: number };
    const rate = body.rates?.[currency];
    if (body.result !== 'success' || !rate || !(rate > 0)) return null;
    return {
      currency,
      rate,
      amount: Math.round(volumeUsd * rate),
      rateUpdatedAt: new Date((body.time_last_update_unix ?? 0) * 1000).toISOString(),
    };
  } catch {
    return null; // the page hides the line rather than failing
  }
}

/** "≈ ₦3.13M", "≈ ₦845.23K", "≈ ₦9,999" */
export function formatApprox(amount: number, symbol = '₦'): string {
  const fmt = (n: number, unit: string) => `≈ ${symbol}${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}${unit}`;
  if (amount >= 1e9) return fmt(amount / 1e9, 'B');
  if (amount >= 1e6) return fmt(amount / 1e6, 'M');
  if (amount >= 1e4) return fmt(amount / 1e3, 'K');
  return `≈ ${symbol}${Math.round(amount).toLocaleString('en-US')}`;
}
