'use client';

import Image from 'next/image';

export const HowItWorks = () => {


    return (
        <section id="how-it-works" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h3 className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">How it works</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Send money in 4 simple steps
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                        No complicated processes, no technical knowledge required. Just fast, secure transfers.
                    </p>
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/20">
                        Start sending money
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Detailed step cards based on mockup */}

                    {/* Card 1 */}
                    <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group min-h-[400px]">
                        <div className="z-10 relative space-y-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-12">
                                <Image src="/rainbow.svg" alt="Icon" width={24} height={24} />
                            </div>
                            <h4 className="text-2xl font-bold">Open app</h4>
                            <p className="text-blue-100 max-w-[200px]">Connect with your Farcaster or MiniPay wallet in one click.</p>
                        </div>
                        <div className="absolute bottom-0 right-[-20px] w-48 h-64 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                            <Image src="/phone.svg" alt="Phone" fill className="object-contain object-bottom" />
                        </div>
                    </div>

                    {/* Card 2 - Wide */}
                    <div className="md:col-span-2 bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group min-h-[400px]">
                        <div className="z-10 relative flex flex-col md:flex-row h-full">
                            <div className="flex-1 space-y-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-12">
                                    <Image src="/file.svg" alt="Icon" width={24} height={24} className="invert" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Recipient Details</h4>
                                <p className="text-gray-500 dark:text-gray-400 max-w-[250px]">
                                    Add the recipient&apos;s bank account or mobile money (MOMO) number. Enter the amount in crypto.
                                </p>
                            </div>
                            <div className="mt-8 md:mt-0 flex-1 relative flex items-center justify-center">
                                <div className="w-full h-full bg-blue-100/50 dark:bg-blue-900/20 rounded-2xl p-4 transform group-hover:scale-105 transition-transform">
                                    {/* Mock interface element */}
                                    <div className="w-full h-4 bg-gray-200 dark:bg-zinc-700 rounded mb-2"></div>
                                    <div className="w-2/3 h-4 bg-gray-200 dark:bg-zinc-700 rounded mb-8"></div>
                                    <div className="w-full h-12 bg-primary/20 rounded mb-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-secondary rounded-3xl p-8 text-white relative overflow-hidden group min-h-[400px]">
                        <div className="z-10 relative space-y-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-12">
                                <Image src="/coins.svg" alt="Icon" width={24} height={24} />
                            </div>
                            <h4 className="text-2xl font-bold">Choose crypto</h4>
                            <p className="text-orange-100 max-w-[200px]">Select choice of tokens from across chains integrated on our platform.</p>
                        </div>
                        <div className="absolute bottom-[-40px] right-[-20px] w-48 h-48 opacity-20 group-hover:opacity-40 transition-all duration-500">
                            <Image src="/coins.svg" alt="Coins" fill className="object-contain" />
                        </div>
                    </div>

                    {/* Card 4 - Man Image */}
                    <div className="md:col-span-2 rounded-3xl relative overflow-hidden group min-h-[400px] border border-gray-100 dark:border-zinc-800">
                        <Image src="/man.svg" alt="User" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <div className="z-10 space-y-4 text-white">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Image src="/send.svg" alt="Icon" width={24} height={24} />
                                </div>
                                <h4 className="text-2xl font-bold">Send instantly</h4>
                                <p className="text-gray-200 max-w-sm">
                                    Review the exchange rate and fees. Approve the transaction from your wallet, funds arrive in minutes in local currency.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
