'use client';

import Image from 'next/image';

export const CTAFooter = () => {
    return (
        <section id="waitlist" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden group">
                    {/* Background coins */}
                    <div className="absolute right-0 bottom-0 w-full h-full md:w-2/3 h-1/2 md:h-full opacity-60 md:opacity-100 translate-y-1/4 md:translate-y-0 translate-x-1/4">
                        <Image
                            src="/coins.svg"
                            alt="Crypto Wealth"
                            fill
                            className="object-contain object-bottom md:object-right transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                        <Image src="/rainbow.svg" alt="Pattern" fill className="object-cover" />
                    </div>

                    <div className="relative z-10 max-w-2xl text-white">
                        <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
                            Join our waitlist <br /> today
                        </h2>

                        <div className="space-y-12">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 flex-1 text-white placeholder:text-blue-100 outline-none focus:ring-2 focus:ring-secondary transition-all"
                                />
                                <button className="bg-secondary hover:bg-[#E65A00] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-orange-500/20 active:scale-95 whitespace-nowrap">
                                    Join waitlist
                                </button>
                            </div>

                            <p className="text-blue-100 text-sm max-w-xs leading-relaxed">
                                Join our waitlist to get first hand information immediately our app launches.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
