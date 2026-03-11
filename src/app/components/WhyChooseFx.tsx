'use client';

import Image from 'next/image';

export const WhyChooseFx = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">Borderless Remittances</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                            One platform, different chains, any destination.
                        </h2>
                    </div>
                    <div className="md:text-right flex flex-col items-start md:items-end justify-between py-2">
                        <p className="text-gray-500 max-w-sm mb-6">
                            Fx Remit bridges the gap between blockchain networks and traditional payments rails.
                        </p>
                        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition-all shadow-lg shadow-blue-500/20">
                            Lorem
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Feature 1: Chain Flexibility */}
                    <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row gap-6 group">
                        <div className="flex-1 space-y-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Image src="/rainbow.svg" alt="Icon" width={20} height={20} className="opacity-80" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">Chain Flexibility</h4>
                            <p className="text-gray-500 text-sm">
                                Send from Ethereum, Solana, Celo, Base and many more.
                            </p>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-xl p-4 flex items-center justify-center transform group-hover:rotate-1 transition-transform">
                            <div className="relative w-full aspect-video">
                                <Image src="/logo.svg" alt="FX Remit" fill className="object-contain opacity-20" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Universal Delivery */}
                    <div className="md:col-span-2 bg-primary rounded-2xl p-8 text-white flex flex-col md:flex-row gap-6 group overflow-hidden relative">
                        <div className="z-10 flex-1 space-y-4">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Image src="/send.svg" alt="Icon" width={20} height={20} />
                            </div>
                            <h4 className="text-xl font-bold">Universal Delivery</h4>
                            <p className="text-blue-100 text-sm">
                                Funds arrive directly into bank accounts or mobile wallets.
                            </p>
                        </div>
                        <div className="z-0 absolute right-0 top-0 h-full w-1/2 opacity-20 transform translate-x-1/4 translate-y-1/4 scale-150 group-hover:scale-110 transition-transform duration-700">
                            <Image src="/rainbow.svg" alt="Pattern" fill className="object-contain" />
                        </div>
                    </div>

                    {/* Feature 3: Automated Routing */}
                    <div className="md:col-span-2 bg-secondary rounded-2xl p-8 text-white flex flex-col md:flex-row gap-6 group">
                        <div className="flex-1 space-y-4">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Image src="/coins.svg" alt="Icon" width={20} height={20} />
                            </div>
                            <h4 className="text-xl font-bold">Automated Routing</h4>
                            <p className="text-orange-100 text-sm">
                                Smart algorithms find the fastest, cheapest path for every transaction.
                            </p>
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center overflow-hidden">
                            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        </div>
                    </div>

                    {/* Feature 4: Easy Onboarding */}
                    <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row gap-6 group">
                        <div className="flex-1 space-y-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Image src="/file.svg" alt="Icon" width={20} height={20} className="invert opacity-80" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">Easy Onboarding</h4>
                            <p className="text-gray-500 text-sm">
                                Recipient gets local currency, they don&apos;t need wallets or blockchain experience.
                            </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 justify-center">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                            <div className="h-2 w-1/2 bg-secondary/20 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
