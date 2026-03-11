'use client';

import Image from 'next/image';

const logos = [
    {
        src: '/celo.svg',
        alt: 'Celo',
        width: 171,
        height: 39,
        mobileWidth: 103.31,
        mobileHeight: 23.56
    },
    {
        src: '/base.svg',
        alt: 'Base',
        width: 158,
        height: 40,
        mobileWidth: 95.39,
        mobileHeight: 24.17
    },
    {
        src: '/eth.svg',
        alt: 'Ethereum',
        width: 59,
        height: 96,
        mobileWidth: 35.19,
        mobileHeight: 58
    },
    {
        src: '/solana.svg',
        alt: 'Solana',
        width: 165,
        height: 30,
        mobileWidth: 99.14,
        mobileHeight: 18.51
    },
];

export const ChainLogos = () => {
    return (
        <div className="bg-white border-y border-gray-100 relative mb-28">
            <style jsx>{`
                .logos-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 1340px;
                    height: 96px;
                    opacity: 0.6;
                    margin-top: 60px;
                    margin-left: 191px;
                }
                .logo-wrapper {
                    --logo-size-w: var(--logo-width);
                    --logo-size-h: var(--logo-height);
                }
                @media (max-width: 1024px) {
                    .logos-container {
                        width: 100%;
                        height: auto;
                        padding: 20px;
                        margin-top: 40px;
                        margin-left: 0;
                        overflow-x: auto;
                        justify-content: flex-start;
                        gap: 40px;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .logos-container::-webkit-scrollbar {
                        display: none;
                    }
                }
                @media (max-width: 768px) {
                    .logo-wrapper {
                        --logo-size-w: var(--mobile-logo-width);
                        --logo-size-h: var(--mobile-logo-height);
                    }
                }
            `}</style>
            <div className="container mx-auto px-6 logos-container">
                {logos.map((logo) => (
                    <div
                        key={logo.alt}
                        className="relative logo-wrapper flex-shrink-0"
                        style={{
                            '--logo-width': `${logo.width}px`,
                            '--logo-height': `${logo.height}px`,
                            '--mobile-logo-width': `${logo.mobileWidth}px`,
                            '--mobile-logo-height': `${logo.mobileHeight}px`,
                            width: 'var(--logo-size-w)',
                            height: 'var(--logo-size-h)'
                        } as React.CSSProperties}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
