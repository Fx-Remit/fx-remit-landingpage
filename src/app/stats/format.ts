import type { PublicStats } from "@/lib/stats/stats";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const count = new Intl.NumberFormat("en-US");

/** $2,355.80 */
export const formatUsd = (n: number) => usd.format(n);

/** 1,234 */
export const formatCount = (n: number) => count.format(n);

export function corridorLabel(corridor: string) {
    const [from, to] = corridor.split("-");
    if (!to) return corridor;
    return `${from} → ${to === "bank" ? "Bank" : to === "wallet" ? "Wallet" : to}`;
}

export const pluralize = (n: number, one: string, many: string) => `${formatCount(n)} ${n === 1 ? one : many}`;

/* ---------- Calendar buckets (UTC, matching getStats) ---------- */

type Bucket = { volumeUsd: number; transactions: number; uniqueUsers: number };
export type DayPoint = PublicStats["daily"][number];
export type MonthPoint = { month: string } & Bucket;

const DAY_MS = 86_400_000;
const EMPTY: Bucket = { volumeUsd: 0, transactions: 0, uniqueUsers: 0 };

const dayToMs = (day: string) => Date.parse(`${day}T00:00:00Z`);
const msToDay = (ms: number) => new Date(ms).toISOString().slice(0, 10);

/**
 * Every day from `start` to `end` inclusive. Days without activity get zeros, and the running
 * totals carry forward from the last active day (also from before `start`) rather than drop to 0.
 */
export function fillDays(daily: PublicStats["daily"], start: string, end: string): DayPoint[] {
    const out: DayPoint[] = [];
    let carried = { cumulativeVolumeUsd: 0, cumulativeTransactions: 0 };
    let i = 0; // daily is oldest first
    for (let ms = dayToMs(start); ms <= dayToMs(end); ms += DAY_MS) {
        const day = msToDay(ms);
        for (; i < daily.length && daily[i].day <= day; i++) {
            const { cumulativeVolumeUsd, cumulativeTransactions } = daily[i];
            carried = { cumulativeVolumeUsd, cumulativeTransactions };
            if (daily[i].day === day) out.push(daily[i]);
        }
        if (out.length === 0 || out[out.length - 1].day !== day) out.push({ day, ...EMPTY, ...carried });
    }
    return out;
}

/** The `n` days ending on `end`. */
export function lastDays(daily: PublicStats["daily"], end: string, n: number): DayPoint[] {
    return fillDays(daily, msToDay(dayToMs(end) - (n - 1) * DAY_MS), end);
}

/** "2026-10" → "2026-09" */
export function previousMonth(month: string) {
    const [y, m] = month.split("-").map(Number);
    return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
}

/** Every month from `start` to `end` inclusive, with zeros for months without activity. */
export function fillMonths(monthly: PublicStats["monthly"], start: string, end: string): MonthPoint[] {
    const byMonth = new Map(monthly.map((m) => [m.month, m]));
    const months: string[] = [];
    for (let m = end; m >= start; m = previousMonth(m)) months.unshift(m);
    return months.map((month) => byMonth.get(month) ?? { month, ...EMPTY });
}

/* ---------- Labels for UTC buckets (same output on server and client) ---------- */

export const dayLabel = (day: string, withYear = false) =>
    new Date(`${day}T00:00:00Z`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        ...(withYear && { year: "numeric" }),
        timeZone: "UTC",
    });

export const monthLabel = (month: string) =>
    new Date(`${month}-01T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
