"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The naira equivalent at the bottom of the Total volume card: a large "≈ ₦3.13M" with a
 * caption and an ⓘ. The explanation shows on hover or keyboard focus, or on tap (tap outside
 * or Esc closes it).
 */
export function RateNote({ amount, caption, tip }: { amount: string; caption: string; tip: string }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const close = (e: Event) => {
            if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("pointerdown", close);
        document.addEventListener("keydown", close);
        return () => {
            document.removeEventListener("pointerdown", close);
            document.removeEventListener("keydown", close);
        };
    }, [open]);

    return (
        <div ref={ref} className="group relative mt-auto pt-5">
            <div className="border-t border-white/20 pt-4">
                <p className="text-[28px] md:text-[36px] font-bold leading-tight tabular-nums text-white">{amount}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-[13px] md:text-[14px] text-blue-100">
                    {caption}
                    <button
                        type="button"
                        aria-label="About this naira figure"
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                        className="rounded-full p-0.5 text-blue-100 transition-colors hover:text-white"
                    >
                        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                            <circle cx="8" cy="8" r="6.5" />
                            <path d="M8 7.25V11M8 5v.25" strokeLinecap="round" />
                        </svg>
                    </button>
                </p>
            </div>
            <p
                role="tooltip"
                className={`${open ? "block" : "hidden"} group-hover:block group-focus-within:block absolute left-0 top-full z-20 mt-2 w-full max-w-sm rounded-xl bg-[#1C1C1C] px-3 py-2 text-[12px] leading-snug text-white shadow-lg`}
            >
                {tip}
            </p>
        </div>
    );
}
