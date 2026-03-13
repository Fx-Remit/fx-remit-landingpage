'use client';

import Image from 'next/image';

export const HowItWorks = () => {

    return (
        <section id="how-it-works" className="py-24 bg-white overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 px-4">
                    <div className="max-w-2xl text-left">
                        <h3 className="text-[#FF6600] font-bold text-sm tracking-[0.2em] uppercase mb-4">How it works</h3>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] leading-[1.1] mb-6">
                            Send money in 4 <span className="text-[#2261FE]">simple steps</span>
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
                            No complicated processes, no technical knowledge required. Just fast, secure transfers.
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <button className="bg-[#2261FE] hover:bg-[#1a4fd6] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2 group">
                            Start sending money
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    {/* Card 1: Open app */}
                    <div className="bg-[#2261FE] rounded-[50px] relative overflow-hidden flex flex-col group md:w-[515px] md:h-[672px] min-h-[600px] w-full shadow-2xl">
                        {/* Background Illustrations */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute" style={{ top: '37.99px', left: '-155.06px' }}>
                                <Image src="/side.svg" alt="" width={344} height={362} className="object-contain" />
                            </div>
                            <div className="absolute" style={{ top: '216px', left: '250px' }}>
                                <Image src="/slide2.svg" alt="" width={344} height={362} className="object-contain" />
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 md:left-[51px] md:translate-x-0" style={{ width: '416px', height: '870px', top: '-200px', opacity: 1 }}>
                                <Image src="/open app illustration.svg" alt="" fill className="object-contain" />
                            </div>
                        </div>

                        {/* Bottom White Card */}
                        <div className="bg-white md:absolute md:top-[401px] md:left-1/2 md:-translate-x-1/2 w-[calc(100%-48px)] mx-auto md:w-[450px] md:h-[214px] rounded-[20px] z-10 shadow-lg border border-gray-100/50 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-8 p-6 m-6 md:m-0 mt-auto">
                            <div className="flex flex-col gap-2 w-full md:w-[200px] text-left">
                                <div>
                                    <Image src="/open app.svg" alt="" width={60} height={60} className="md:w-[75px] md:h-[75px]" />
                                </div>
                                <h4 style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '28px',
                                    lineHeight: '100%',
                                    color: '#1C1C1C',
                                    margin: 0
                                }} className="md:text-[32px]">
                                    Open app
                                </h4>
                            </div>
                            <div className="w-full md:w-[170px] text-left">
                                <p style={{
                                    fontFamily: "'SF Pro Rounded', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '1.2',
                                    color: '#3D3D3D',
                                    margin: 0
                                }} className="md:text-[18px]">
                                    Connect with your Farcaster or MiniPay wallet in one click.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Stacked Cards */}
                    <div className="flex flex-col gap-8 w-full md:w-[515px] md:h-[672px]">
                        {/* Card 2: Recipient Details */}
                        <div className="flex-1 bg-gray-50 rounded-[50px] p-8 md:p-10 relative overflow-hidden group shadow-lg min-h-[350px] md:min-h-0">
                            <Image src="/side3.svg" alt="" fill className="absolute inset-0 object-cover" />
                            <div className="relative z-10 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-end gap-6 md:gap-8 h-full md:pb-6">
                                <div className="flex flex-col gap-4 md:gap-10 w-full md:w-[220px] text-left">
                                    <div>
                                        <Image src="/recipient.svg" alt="" width={60} height={60} className="md:w-[75px] md:h-[75px]" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] leading-none">Recipient Details</h4>
                                </div>
                                <div className="w-full md:w-[220px] text-left">
                                    <p className="text-[#3D3D3D] text-base md:text-lg leading-relaxed">
                                        Add the recipient&apos;s bank account or mobile money(MOMO) number. Enter the amount in crypto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Choose crypto */}
                        <div className="flex-1 bg-[#FF6600] rounded-[50px] p-8 md:p-10 relative overflow-hidden group shadow-lg min-h-[350px] md:min-h-0">
                            <div className="relative z-10 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-end gap-6 md:gap-8 h-full md:pb-6">
                                <div className="flex flex-col gap-4 md:gap-10 w-full md:w-[220px] text-left">
                                    <div>
                                        <Image src="/choose crypto.svg" alt="" width={60} height={60} className="md:w-[75px] md:h-[75px]" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white leading-none">Choose crypto</h4>
                                </div>
                                <div className="w-full md:w-[190px] text-left">
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                        Select choice of tokens from across chains integrated on our platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Send instantly */}
                    <div className="bg-[#F9FAFB] rounded-[50px] relative overflow-hidden flex flex-col group md:w-[515px] md:h-[672px] min-h-[600px] w-full shadow-2xl">
                        {/* Background Photo */}
                        <Image src="/send pic.svg" alt="" fill className="absolute inset-0 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Bottom White Card */}
                        <div className="bg-white rounded-[20px] p-6 absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] md:w-[450px] md:h-[214px] z-10 shadow-xl border border-gray-100/50 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-8">
                            <div className="flex flex-col gap-2 w-full md:w-[220px] text-left">
                                <div>
                                    <Image src="/send intantly.svg" alt="" width={60} height={60} className="md:w-[75px] md:h-[75px]" />
                                </div>
                                <h4 style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '28px',
                                    lineHeight: '100%',
                                    color: '#1C1C1C',
                                    margin: 0
                                }} className="md:text-[32px]">
                                    Send instantly
                                </h4>
                            </div>
                            <div className="w-full md:w-[190px] text-left">
                                <p style={{
                                    fontFamily: "'SF Pro Rounded', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '1.2',
                                    color: '#3D3D3D',
                                    margin: 0
                                }} className="md:text-[18px]">
                                    Funds arrive in <span className="font-bold">minutes in local currency</span> after approval.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
