'use client';

import Image from 'next/image';

export const WhyChooseFx = () => {
    return (
        <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden min-h-[950px] flex items-center">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 bg-blue-50/50 rounded-full blur-3xl"></div>

            <div className="relative z-10 w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-8 max-w-[1450px] mx-auto px-6">
                    <div className="max-w-2xl">
                        <h3 className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-4">Borderless Remittances</h3>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-[1.1]">
                            One platform,<br />
                            different chains,<br />
                            any destination.
                        </h2>
                    </div>
                    <div className="md:text-right flex flex-col items-start md:items-end justify-start pt-6">
                        <p className="text-gray-500 max-w-sm mb-8 text-lg leading-relaxed">
                            Fx Remit bridges the gap between blockchain networks and traditional payments rails.
                        </p>
                        <button className="bg-[#2261FE] hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                            Start Sending
                        </button>
                    </div>
                </div>

                {/* Interconnected Features Layout */}
                <div
                    className="relative mx-auto origin-top feature-container"
                    style={{
                        width: '1701px',
                        height: '1000px',
                        left: '14px'
                    }}
                >
                    {/* Central Image - Illustration focal point */}
                    <div
                        className="absolute left-1/2 z-20 hidden xl:flex items-center justify-center -translate-x-1/2"
                        style={{ top: '300px' }}
                    >
                        <div className="relative w-[1700.3px] h-[378px]">
                            <Image src="/How it works.svg" alt="How it works" fill className="object-contain" priority />
                        </div>
                    </div>

                    {/* Feature Cards*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:block h-full gap-16 relative z-30 card-stack">

                        {/* 1. Chain Flexibility (Top Left) */}
                        <div
                            className="xl:absolute bg-[#F5F5F5] rounded-[20px] p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 group overflow-hidden relative-card"
                            style={{
                                width: '500px',
                                height: '230px',
                                top: '170px',
                                left: '18px'
                            }}
                        >
                            {/* Card Background Pattern - Desktop */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none group-hover:scale-110 transition-transform duration-700 hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>

                            {/* Card Background Pattern - Mobile (Clipped exact size) */}
                            <div className="xl:hidden absolute pointer-events-none opacity-40" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Chain Flexibility.svg" alt="Chain Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-[#1C1C1C] leading-none mb-0">Chain Flexibility</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-[#3D3D3D] leading-relaxed text-sm md:text-base">
                                        Send from Ethereum, Solana, Celo, Base and many more.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Automated Routing (Bottom Left) */}
                        <div
                            className="xl:absolute bg-[#FF6600] rounded-[20px] p-8 text-white overflow-hidden shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 group relative-card"
                            style={{
                                width: '500px',
                                height: '230px',
                                top: '530px',
                                left: '10px'
                            }}
                        >
                            {/* Card Background Pattern - Desktop */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none brightness-0 invert hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>

                            {/* Card Background Pattern - Mobile (Clipped exact size) */}
                            <div className="xl:hidden absolute pointer-events-none opacity-40 brightness-0 invert" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Automated Routing.svg" alt="Routing Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-white leading-none mb-0">Automated Routing</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                                        Smart algorithms find the fastest, path for every transaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Universal Delivery (Top Right) */}
                        <div
                            className="xl:absolute bg-[#2261FE] rounded-[20px] p-8 text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 group overflow-hidden relative-card"
                            style={{
                                width: '500px',
                                height: '230px',
                                top: '200px',
                                left: '1180px'
                            }}
                        >
                            {/* Card Background Pattern - Desktop */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none brightness-0 invert hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>

                            {/* Card Background Pattern - Mobile */}
                            <div className="xl:hidden absolute pointer-events-none opacity-40 brightness-0 invert" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Universal Delivery.svg" alt="Global Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-white leading-none mb-0">Universal Delivery</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                                        Funds arrive directly into bank accounts or mobile wallets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Easy Onboarding (Bottom Right) */}
                        <div
                            className="xl:absolute bg-[#FFFFFF] rounded-[20px] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 group overflow-hidden relative-card"
                            style={{
                                width: '500px',
                                height: '230px',
                                top: '530px',
                                left: '1190px'
                            }}
                        >
                            {/* Card Background Pattern - Desktop */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none group-hover:scale-110 transition-transform duration-700 hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>

                            {/* Card Background Pattern - Mobile (Clipped exact size) */}
                            <div className="xl:hidden absolute pointer-events-none opacity-35" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Easy Onboarding.svg" alt="Onboarding Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-[#1C1C1C] leading-none mb-0">Easy Onboarding</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-[#3D3D3D] leading-relaxed text-sm md:text-base">
                                        Recipient gets local currency, they don&apos;t need wallers or blockchain experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Custom Styling */}
                <style jsx>{`
                    @media (max-width: 1280px) {
                        .feature-container {
                            width: 100% !important;
                            height: auto !important;
                            left: auto !important;
                        }
                        .card-stack {
                            display: flex !important;
                            flex-direction: column !important;
                            align-items: center !important;
                            gap: 2rem !important;
                            padding: 0 1rem !important;
                        }
                        .relative-card {
                            position: relative !important;
                            width: min(400px, 92vw) !important;
                            height: 244px !important;
                            border-radius: 30px !important;
                            top: auto !important;
                            left: auto !important;
                            margin: 0 auto !important;
                            overflow: hidden !important;
                        }
                        :global(.responsive-icon) {
                            width: 60px !important;
                            height: 60px !important;
                        }
                    }
                    @media (min-width: 1281px) {
                        :global(.responsive-icon) {
                            width: 75px !important;
                            height: 75px !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};
