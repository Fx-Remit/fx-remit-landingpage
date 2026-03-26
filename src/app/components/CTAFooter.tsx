'use client';

import Image from 'next/image';

export const CTAFooter = () => {
    return (
        <section id="waitlist" className="py-24 bg-white overflow-hidden font-inter">
            <div className="container mx-auto px-6">
                <div className="relative bg-[#2261FE] rounded-[3rem] p-8 md:p-24 overflow-hidden min-h-[650px] md:min-h-[500px] flex flex-col justify-center">

                    {/* Background SVG pattern (Text/Texture) */}
                    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                        <Image
                            src="/side3-light.svg"
                            alt="Background side text"
                            fill
                            className="object-cover opacity-80"
                        />
                    </div>

                    {/* Desktop Coin Image */}
                    <div
                        className="absolute z-0 opacity-100 pointer-events-none hidden md:block"
                        style={{
                            width: '700px',
                            top: '125px',
                            left: '800px'
                        }}
                    >
                        <Image
                            src="/coins.svg"
                            alt="Crypto Wealth Desktop"
                            width={920}
                            height={518}
                            className="object-contain"
                        />
                    </div>

                    {/* Mobile Coin Image with specific specs */}
                    <div
                        className="absolute z-0 opacity-100 pointer-events-none block md:hidden"
                        style={{
                            width: '482px',
                            height: '269px',
                            top: '370px',
                            left: '-100px'
                        }}
                    >
                        <Image
                            src="/coins.svg"
                            alt="Crypto Wealth Mobile"
                            width={482}
                            height={269}
                            className="object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl -top-32 -left-2 md:-top-12 md:-left-8">
                        <h2 className="text-[#F5F5F5] text-[28px] md:text-[56px] leading-[100%] font-medium mb-10 md:mb-40">
                            Join our waitlist today
                        </h2>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                            <p className="text-[#D1D1D1] text-[16px] md:text-[18px] leading-[150%] font-normal max-w-md">
                                Join our waitlist to get first hand information immediately our app launches.
                            </p>

                            <button className="bg-[#FF6600] hover:bg-[#E65A00] text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-2xl transition-all shadow-xl shadow-orange-500/10 active:scale-95 whitespace-nowrap text-[16px] md:text-[18px]">
                                Join waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
