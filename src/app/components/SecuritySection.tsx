'use client';

import Image from 'next/image';

export const SecuritySection = () => {
    return (
        <section className="py-24 bg-[#2261FE] text-white relative overflow-hidden min-h-[1100px]">
            {/* Background motif */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '2000px',
                    height: '1694px',
                    top: '-230px',
                    left: '-100px',
                    opacity: 40
                }}
            >
                <Image src="/scale.svg" alt="Pattern" fill className="object-contain" priority />
            </div>

            <div className="max-w-[1650px] mx-auto px-6 relative z-10">
                <div className="max-w-xl mb-16">
                    <h3 className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">Built for millions</h3>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Built for scale and security
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Our multi-chain infrastructure is designed to handle millions of transactions while maintaining the highest security standards. Technical deep-dives below.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-12 items-start justify-center">
                    {/* 1. Large Main Card */}
                    <div
                        className="relative bg-[#2978FF] rounded-[50px] overflow-hidden border border-white/10 hidden xl:block"
                        style={{
                            width: '1160px',
                            height: '500px',
                            marginLeft: '70px'
                        }}
                    >
                        {/* Man Image */}
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                width: '800px',
                                height: '550px',
                                left: '-40px',
                                top: '2px'
                            }}
                        >
                            <Image src="/man.svg" alt="Infrastructure" fill className="object-cover" />
                        </div>

                        {/* Text Content Div */}
                        <div
                            className="absolute flex flex-col justify-center items-end"
                            style={{
                                width: '417px',
                                height: '160px',
                                left: '560px',
                                top: '180px',
                                gap: '40px',
                            }}
                        >
                            <h4 className="font-medium leading-[100%] text-gray-200" style={{ fontSize: '30px', width: 'max-content', whiteSpace: 'nowrap' }}>
                                Global reach, <span className="text-secondary">Local delivery</span>
                            </h4>
                            <p className="font-regular leading-[150%]" style={{ fontSize: '18px', color: '#E7E7E7', width: '300px', height: '81px' }}>
                                Send money to 15+ countries across Africa, Asia, Latin America with instant settlement.
                            </p>
                        </div>
                    </div>

                    {/* Mobile Version of Main Card */}
                    <div className="xl:hidden w-full bg-[#2978FF] rounded-[30px] p-8 border border-white/10 relative overflow-hidden flex flex-col gap-8">
                        <div className="space-y-4">
                            <h4 className="text-3xl font-medium leading-[100%] text-gray-200">
                                Global reach, <span className="text-secondary">Local delivery</span>
                            </h4>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Send money to 15+ countries across Africa, Asia, Latin America with instant settlement.
                            </p>
                        </div>
                        <div className="relative h-75 overflow-hidden">
                            <div className="absolute inset-0 scale-120 left-[10px] top-6">
                                <Image src="/man.svg" alt="Infrastructure" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* 2. Three Feature Cards Stacked Vertically */}
                    <div className="flex flex-col gap-8 w-full xl:w-[500px]">

                        {/* Settlement Partners Card */}
                        <div
                            className="relative bg-gray-100 rounded-[20px] p-8 shadow-xl shadow-gray-200/10 hover:shadow-2xl hover:shadow-gray-200/20 transition-all duration-500 group overflow-hidden"
                            style={{ height: '230px' }}
                        >
                            <div className="absolute inset-0 opacity-40 pointer-events-none xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>
                            <div className="xl:hidden absolute pointer-events-none opacity-40" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Settlement Partners.svg" alt="Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-[#1C1C1C] leading-none mb-0">Settlement Partners</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-[#3D3D3D] leading-relaxed text-sm md:text-base">
                                        Direct integration with local payment rails for instant funds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bridge Infrastructure Card */}
                        <div
                            className="relative bg-secondary rounded-[20px] p-8 text-white shadow-xl shadow-gray-200/10 hover:shadow-2xl hover:shadow-gray-200/20 transition-all duration-500 group overflow-hidden"
                            style={{ height: '230px' }}
                        >
                            <div className="absolute inset-0 opacity-40 pointer-events-none brightness-0 invert hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>
                            <div className="xl:hidden absolute pointer-events-none opacity-40 brightness-0 invert" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Bridge Infrastructure.svg" alt="Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold leading-none mb-0">Bridge Infrastructure</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                                        Robust institutional-grade bridges for maximum liquidity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Security & Compliance Card */}
                        <div
                            className="relative bg-gray-100 rounded-[20px] p-8 shadow-xl shadow-gray-200/10 hover:shadow-2xl hover:shadow-gray-200/20 transition-all duration-500 group overflow-hidden"
                            style={{ height: '230px' }}
                        >
                            <div className="absolute inset-0 opacity-40 pointer-events-none hidden xl:block">
                                <Image src="/side3.svg" alt="Pattern" fill className="object-cover" />
                            </div>
                            <div className="xl:hidden absolute pointer-events-none opacity-40" style={{ top: '-300px', left: '-10px', width: '1113.6px', height: '695.8px' }}>
                                <Image src="/side3.svg" alt="Pattern" fill className="object-contain" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-6 md:gap-8 h-full">
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 w-full md:w-[200px] text-left">
                                    <div className="mb-0 md:mb-1 flex-shrink-0">
                                        <Image src="/Security & Compliance.svg" alt="Icon" width={75} height={75} className="object-contain responsive-icon" />
                                    </div>
                                    <h4 className="text-2xl md:text-[28px] font-bold text-[#1C1C1C] leading-none mb-0">Security & Compliance</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left mt-auto md:mt-0">
                                    <p className="text-[#3D3D3D] leading-relaxed text-sm md:text-base">
                                        Regulatory-compliant transfers with AML/KYC integrated.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Custom Styling for feature cards matching WhyChooseFx */}
            <style jsx>{`
                @media (max-width: 1280px) {
                    .responsive-icon {
                        width: 60px !important;
                        height: 60px !important;
                    }
                }
                @media (min-width: 1281px) {
                    .responsive-icon {
                        width: 75px !important;
                        height: 75px !important;
                    }
                }
            `}</style>
        </section>
    );
};
