// Marks cropped from /public/base.svg and /public/celo.svg.
const CHAINS = {
    base: {
        name: "Base",
        icon: (
            <svg viewBox="0 10.77 28.33 28.36" className="h-4 w-4 shrink-0" aria-hidden>
                <path
                    d="M1.70477 39.1305C0.567434 39.1305 0 38.5611 0 37.4235V12.4741C0 11.3353 0.568668 10.7671 1.70477 10.7671H26.6201C27.7574 10.7671 28.3248 11.3365 28.3248 12.4741V37.4222C28.3248 38.5611 27.7562 39.1292 26.6201 39.1292H1.70477V39.1305Z"
                    fill="#0000FF"
                />
            </svg>
        ),
    },
    celo: {
        name: "Celo",
        icon: (
            <svg viewBox="0.65 0 38.28 38.52" className="h-4 w-4 shrink-0" aria-hidden>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9297 0H0.652344V38.523H38.929V25.0758H32.5766C30.3869 29.9814 25.4582 33.3981 19.8178 33.3981C12.0418 33.3981 5.74458 27.0058 5.74458 19.2345C5.74458 11.4633 12.0418 5.12568 19.8178 5.12568C25.5676 5.12568 30.4963 8.6531 32.6869 13.668H38.9297V0Z"
                    fill="#1C1C1C"
                />
            </svg>
        ),
    },
} as const;

export function ChainBadge({ chain }: { chain: keyof typeof CHAINS }) {
    const { name, icon } = CHAINS[chain];
    return (
        <span className="inline-flex items-center gap-2">
            {icon}
            {name}
        </span>
    );
}
