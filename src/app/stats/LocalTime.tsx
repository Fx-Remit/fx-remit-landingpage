"use client";

import { useSyncExternalStore } from "react";

// The server (and an ISR page cached for minutes) can't know the visitor's time zone or "now",
// so these render a fixed UTC value first and switch to local time once in the browser.

const MINUTE = 60_000;

const subscribeToMinutes = (onChange: () => void) => {
    const id = setInterval(onChange, MINUTE);
    return () => clearInterval(id);
};
const currentMinute = () => Math.floor(Date.now() / MINUTE);
const noMinuteOnServer = () => null;

/** Minutes since the epoch, updated every minute; null while server rendering. */
const useMinute = () => useSyncExternalStore(subscribeToMinutes, currentMinute, noMinuteOnServer);

const utcDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

const relative = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function timeAgo(iso: string, nowMs: number) {
    const seconds = Math.round((Date.parse(iso) - nowMs) / 1000);
    const abs = Math.abs(seconds);
    if (abs < 60) return "just now";
    if (abs < 3600) return relative.format(Math.round(seconds / 60), "minute");
    if (abs < 86400) return relative.format(Math.round(seconds / 3600), "hour");
    if (abs < 86400 * 30) return relative.format(Math.round(seconds / 86400), "day");
    if (abs < 86400 * 365) return relative.format(Math.round(seconds / (86400 * 30)), "month");
    return relative.format(Math.round(seconds / (86400 * 365)), "year");
}

/** "2 hours ago", with the full local date and time on hover. */
export function TimeAgo({ iso }: { iso: string }) {
    const minute = useMinute();
    const local = minute === null ? undefined : new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    return (
        <time dateTime={iso} title={local}>
            {minute === null ? utcDate(iso) : timeAgo(iso, minute * MINUTE)}
        </time>
    );
}

/** "Oct 4, 2026, 3:12 PM" in the visitor's time zone (or just the date with `dateOnly`). */
export function LocalDateTime({ iso, dateOnly = false }: { iso: string; dateOnly?: boolean }) {
    const minute = useMinute();
    if (minute === null) return <time dateTime={iso}>{utcDate(iso)}</time>;
    const d = new Date(iso);
    return (
        <time dateTime={iso}>
            {dateOnly
                ? d.toLocaleDateString(undefined, { dateStyle: "medium" })
                : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
        </time>
    );
}
