"use client";

import { useState, type PointerEvent } from "react";
import type { PublicStats } from "@/lib/stats/stats";
import { dayLabel, fillDays, fillMonths, formatCount, formatUsd, lastDays, monthLabel } from "./format";

const BLUE = "#2261FE";
const ORANGE = "#FF6600";

type Series = { name: string; color: string; values: number[]; format: (n: number) => string };

/** Round the top of the y-axis up to 1, 1.5, 2, 2.5 or 5 × 10ⁿ so the gridline labels are readable. */
function niceMax(max: number) {
    if (max <= 0) return 1;
    const exp = Math.pow(10, Math.floor(Math.log10(max)));
    for (const step of [1, 1.5, 2, 2.5, 5]) if (max <= step * exp) return step * exp;
    return 10 * exp;
}

const usdAxis = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: n >= 10 || n === 0 ? 0 : 2 });
const countAxis = (n: number) => (Number.isInteger(n) ? formatCount(n) : "");

/**
 * One SVG chart: bars (first series only), lines, or a filled area. The plot stretches to its
 * container, so text and dots live in HTML around it rather than inside the SVG.
 */
function Chart({
    type,
    labels,
    series,
    axisFormat,
    axis,
    ariaLabel,
}: {
    type: "bar" | "line" | "area";
    /** Readout label for each point. */
    labels: string[];
    series: Series[];
    axisFormat: (n: number) => string;
    /** X-axis labels for the first and last point. */
    axis: { first: string; last: string };
    ariaLabel: string;
}) {
    const [hover, setHover] = useState<number | null>(null);
    const n = labels.length;
    const max = niceMax(Math.max(0, ...series.flatMap((s) => s.values)));
    const active = hover ?? n - 1;
    const y = (v: number) => 100 - (v / max) * 100;

    const track = (e: PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const i = Math.floor(((e.clientX - rect.left) / rect.width) * n);
        setHover(Math.min(n - 1, Math.max(0, i)));
    };

    if (n === 0) return null;

    return (
        <figure>
            {/* Readout: the hovered point, or the latest one */}
            <figcaption className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[13px] text-[#3D3D3D]" aria-live="polite">
                <span className="font-medium text-[#1C1C1C]">{labels[active]}</span>
                {series.map((s) => (
                    <span key={s.name} className="inline-flex items-center gap-1.5 tabular-nums">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name} <span className="font-semibold text-[#1C1C1C]">{s.format(s.values[active])}</span>
                    </span>
                ))}
            </figcaption>

            <div className="flex gap-2">
                {/* Y-axis labels; the invisible copy of the widest label sets the column width */}
                <div className="relative h-[180px] md:h-[220px] text-right text-[11px] leading-none text-gray-400 tabular-nums" aria-hidden>
                    <span className="invisible">{axisFormat(max)}</span>
                    <span className="absolute right-0 top-0">{axisFormat(max)}</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2">{axisFormat(max / 2)}</span>
                    <span className="absolute right-0 bottom-0">{axisFormat(0)}</span>
                </div>

                <div className="min-w-0 flex-1">
                    <div
                        className="relative h-[180px] md:h-[220px] touch-pan-y"
                        role="img"
                        aria-label={ariaLabel}
                        onPointerMove={track}
                        onPointerDown={track}
                        onPointerLeave={() => setHover(null)}
                    >
                        {[0, 50, 100].map((top) => (
                            <div key={top} className="absolute inset-x-0 border-t border-dashed border-gray-200" style={{ top: `${top}%` }} />
                        ))}

                        <svg viewBox={`0 0 ${n} 100`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                            {type === "bar" &&
                                series[0].values.map((v, i) => {
                                    if (v <= 0) return null;
                                    // Keep tiny non-zero days visible next to large ones.
                                    const h = Math.max(1.5, (v / max) * 100);
                                    const gap = n > 40 ? 0.1 : 0.18;
                                    return (
                                        <rect
                                            key={i}
                                            x={i + gap}
                                            width={1 - gap * 2}
                                            y={100 - h}
                                            height={h}
                                            fill={series[0].color}
                                            opacity={hover === null || hover === i ? 1 : 0.45}
                                        />
                                    );
                                })}
                            {type === "area" && (
                                <path
                                    d={`M0.5,100 ${series[0].values.map((v, i) => `L${i + 0.5},${y(v)}`).join(" ")} L${n - 0.5},100 Z`}
                                    fill={series[0].color}
                                    fillOpacity={0.12}
                                />
                            )}
                            {type !== "bar" &&
                                series.map((s) => (
                                    <path
                                        key={s.name}
                                        d={s.values.map((v, i) => `${i ? "L" : "M"}${i + 0.5},${y(v)}`).join(" ")}
                                        fill="none"
                                        stroke={s.color}
                                        strokeWidth={2.5}
                                        strokeLinejoin="round"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                ))}
                        </svg>

                        {hover !== null && (
                            <div className="pointer-events-none absolute inset-y-0 w-px bg-gray-300" style={{ left: `${((hover + 0.5) / n) * 100}%` }}>
                                {type !== "bar" &&
                                    series.map((s) => (
                                        <span
                                            key={s.name}
                                            className="absolute left-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
                                            style={{ top: `${y(s.values[hover])}%`, backgroundColor: s.color }}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-2 flex justify-between text-[12px] text-gray-500" aria-hidden>
                        <span>{axis.first}</span>
                        <span>{axis.last}</span>
                    </div>
                </div>
            </div>
        </figure>
    );
}

const CUMULATIVE = {
    volume: { name: "Total volume", field: "cumulativeVolumeUsd", format: formatUsd, axisFormat: usdAxis },
    payouts: { name: "Total payouts", field: "cumulativeTransactions", format: formatCount, axisFormat: countAxis },
} as const;

/** A running total (volume or payouts), one point per day from the first transaction to today. */
export function CumulativeChart({
    daily,
    today,
    metric,
}: {
    daily: PublicStats["daily"];
    today: string;
    metric: keyof typeof CUMULATIVE;
}) {
    if (daily.length === 0) return null;
    const { name, field, format, axisFormat } = CUMULATIVE[metric];
    const days = fillDays(daily, daily[0].day, today);
    const values = days.map((d) => d[field]);
    const axis = { first: dayLabel(days[0].day, true), last: dayLabel(today, true) };
    return (
        <Chart
            type="area"
            labels={days.map((d) => dayLabel(d.day, true))}
            series={[{ name, color: BLUE, values, format }]}
            axisFormat={axisFormat}
            axis={axis}
            ariaLabel={`${name} over time, from ${axis.first} to ${axis.last}, reaching ${format(values[values.length - 1])}`}
        />
    );
}

const RANGES = [
    { key: "7d", label: "7D", days: 7 },
    { key: "30d", label: "30D", days: 30 },
    { key: "all", label: "All", days: 0 },
] as const;

type RangeKey = (typeof RANGES)[number]["key"];

/** Volume bars plus transactions and users lines, by day (7D, 30D) or by month (All). */
export function ActivityCharts({
    daily,
    monthly,
    today,
}: {
    daily: PublicStats["daily"];
    monthly: PublicStats["monthly"];
    today: string;
}) {
    const [range, setRange] = useState<RangeKey>("all");
    const thisMonth = today.slice(0, 7);

    const days = RANGES.find((r) => r.key === range)?.days ?? 0;
    const points = days
        ? lastDays(daily, today, days).map((d) => ({ ...d, label: dayLabel(d.day, true), axis: dayLabel(d.day) }))
        : fillMonths(monthly, monthly[0]?.month ?? thisMonth, thisMonth).map((m) => ({
              ...m,
              label: monthLabel(m.month),
              axis: monthLabel(m.month),
          }));
    const per = days ? "day" : "month";
    const labels = points.map((p) => p.label);
    const axis = { first: points[0]?.axis ?? "", last: points[points.length - 1]?.axis ?? "" };

    return (
        <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1C1C1C]">Activity</h3>
                    <p className="text-[14px] text-[#3D3D3D]">{days ? "Daily" : "Monthly"} volume, transactions and users</p>
                </div>
                <div className="inline-flex rounded-xl bg-[#F5F5F5] p-1" role="group" aria-label="Time range">
                    {RANGES.map((r) => (
                        <button
                            key={r.key}
                            type="button"
                            onClick={() => setRange(r.key)}
                            aria-pressed={range === r.key}
                            className={`rounded-lg px-4 py-1.5 text-[14px] font-medium transition-colors ${
                                range === r.key ? "bg-[#2261FE] text-white shadow-sm" : "text-[#3D3D3D] hover:text-[#1C1C1C]"
                            }`}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
                <div>
                    <Chart
                        type="bar"
                        labels={labels}
                        series={[{ name: "Volume", color: BLUE, values: points.map((p) => p.volumeUsd), format: formatUsd }]}
                        axisFormat={usdAxis}
                        axis={axis}
                        ariaLabel={`Volume per ${per}, ${axis.first} to ${axis.last}`}
                    />
                </div>
                <div>
                    <Chart
                        type="line"
                        labels={labels}
                        series={[
                            { name: "Transactions", color: BLUE, values: points.map((p) => p.transactions), format: formatCount },
                            { name: "Users", color: ORANGE, values: points.map((p) => p.uniqueUsers), format: formatCount },
                        ]}
                        axisFormat={countAxis}
                        axis={axis}
                        ariaLabel={`Transactions and users per ${per}, ${axis.first} to ${axis.last}`}
                    />
                </div>
            </div>
        </div>
    );
}
