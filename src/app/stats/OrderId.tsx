"use client";

import { useState } from "react";

/**
 * An app payout's order ID, as shown on the user's receipt. Phones show the last 6 digits
 * (tap to show it all); the copy button always copies the full ID.
 */
export function OrderId({ id }: { id: string }) {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);
    const short = id.length > 6 ? `…${id.slice(-6)}` : id;

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(id);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Clipboard blocked (e.g. some in-wallet browsers): show the full ID to select by hand.
            setExpanded(true);
        }
    };

    return (
        <span className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[#1C1C1C]">
            <span className="hidden select-all md:inline">{id}</span>
            <button
                type="button"
                className={`md:hidden ${expanded ? "select-all" : ""}`}
                title={id}
                aria-label={expanded ? `Order ID ${id}` : `Order ID ending ${id.slice(-6)}, tap to show in full`}
                onClick={() => setExpanded((e) => !e)}
            >
                {expanded ? id : short}
            </button>
            <button
                type="button"
                onClick={copy}
                title="Copy order ID"
                aria-label={`Copy order ID ${id}`}
                className="rounded-md p-1 text-gray-400 transition-colors hover:bg-[#F5F5F5] hover:text-[#2261FE]"
            >
                {copied ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                        <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
                        <path d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
                    </svg>
                )}
            </button>
            <span className="sr-only" aria-live="polite">
                {copied ? "Order ID copied" : ""}
            </span>
        </span>
    );
}
