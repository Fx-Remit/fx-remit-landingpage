'use client';

import { useState } from 'react';

export const FAQ = () => {
    const [open01, setOpen01] = useState(false);
    const [open02, setOpen02] = useState(false);
    const [open03, setOpen03] = useState(false);

    return (
        <section id="faq" className="py-24 bg-white overflow-hidden font-inter">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-[#FF6600] text-[18px] leading-[150%] font-normal mb-2">
                        Got questions for us?
                    </p>
                    <h2 className="header-text text-[#1C1C1C] text-[56px] leading-[100%] font-medium">
                        Frequently asked questions
                    </h2>
                </div>

                {/* FAQ Cards Stack */}
                <div className="flex flex-col items-center gap-[30px] max-w-[1086px] mx-auto relative">

                    {/* 01. Fast Transfers */}
                    <div
                        className={`w-full overflow-hidden rounded-[45px] border border-[#191A23] transition-all duration-300 ease-out cursor-pointer group card-container`}
                        onClick={() => setOpen01(!open01)}
                        style={{
                            height: open01 ? 'auto' : '100px',
                            minHeight: open01 ? '238px' : '100px',
                            backgroundColor: '#2261FE',
                            boxShadow: '0px 5px 0px 0px #FF6600'
                        }}
                    >
                        <div className="card-header h-[100px] flex items-center justify-between px-[60px] py-[41px]">
                            <div className="flex items-center gap-10 card-title-alt">
                                <span className="number-text text-[#F6F6F6] text-[48px] leading-[120%] font-bold">01</span>
                                <span className="question-text text-[#F6F6F6] text-[24px] leading-[120%] font-bold">How fast are transfers?</span>
                            </div>
                            <div className="toggle-icon w-[48px] h-[48px] rounded-full bg-[#F6F6F6] flex items-center justify-center relative flex-shrink-0">
                                <div className={`absolute w-[2.5px] h-[20px] bg-[#1C1C1C] rounded-full transition-all duration-300 ${open01 ? 'opacity-0 scale-y-0' : 'opacity-100 scale-y-100'}`}></div>
                                <div className="absolute w-[20px] h-[3px] bg-[#1C1C1C] rounded-full"></div>
                            </div>
                        </div>
                        <div className={`px-[60px] pb-[41px] pt-8 transition-opacity duration-300 ${open01 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="h-[1px] w-full max-w-[966px] bg-[#F6F6F6] mb-4"></div>
                            <p className="answer-text text-[#E7E7E7] text-[16px] leading-[120%] font-normal font-montserrat max-w-[966px]">
                                Most transfers complete in under 1 minute. Settlement times may vary slightly depending on the destination country and payment method, but 99% of transactions are completed within 5 minutes.
                            </p>
                        </div>
                    </div>

                    {/* 02. Wallets Supported */}
                    <div
                        className={`w-full overflow-hidden rounded-[45px] border border-[#191A23] transition-all duration-300 ease-out cursor-pointer group card-container`}
                        onClick={() => setOpen02(!open02)}
                        style={{
                            height: open02 ? 'auto' : '100px',
                            minHeight: open02 ? '238px' : '100px',
                            backgroundColor: '#2261FE',
                            boxShadow: '0px 5px 0px 0px #FF6600'
                        }}
                    >
                        <div className="card-header h-[100px] flex items-center justify-between px-[60px] py-[41px]">
                            <div className="flex items-center gap-10 card-title-alt">
                                <span className="number-text text-[#F6F6F6] text-[48px] leading-[120%] font-bold">02</span>
                                <span className="question-text text-[#F6F6F6] text-[24px] leading-[120%] font-bold">Which wallets are supported?</span>
                            </div>
                            <div className="toggle-icon w-[48px] h-[48px] rounded-full bg-[#F6F6F6] flex items-center justify-center relative flex-shrink-0">
                                <div className={`absolute w-[2.5px] h-[20px] bg-[#1C1C1C] rounded-full transition-all duration-300 ${open02 ? 'opacity-0 scale-y-0' : 'opacity-100 scale-y-100'}`}></div>
                                <div className="absolute w-[20px] h-[3px] bg-[#1C1C1C] rounded-full"></div>
                            </div>
                        </div>
                        <div className={`px-[60px] pb-[41px] pt-8 transition-opacity duration-300 ${open02 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="h-[1px] w-full max-w-[966px] bg-[#F6F6F6] mb-4"></div>
                            <p className="answer-text text-[#E7E7E7] text-[16px] leading-[120%] font-normal font-montserrat max-w-[966px]">
                                We support 50+ wallets including MetaMask, Phantom, Trust wallet, MiniPay, Farcarster and many more. Both browser extensions and mobile wallets work seamlessly with our platform.
                            </p>
                        </div>
                    </div>

                    {/* 03. Limits */}
                    <div
                        className={`w-full overflow-hidden rounded-[45px] border border-[#191A23] transition-all duration-300 ease-out cursor-pointer group card-container`}
                        onClick={() => setOpen03(!open03)}
                        style={{
                            height: open03 ? 'auto' : '100px',
                            minHeight: open03 ? '238px' : '100px',
                            backgroundColor: '#FF6600',
                            boxShadow: '0px 5px 0px 0px #2261FE'
                        }}
                    >
                        <div className="card-header h-[100px] flex items-center justify-between px-[60px] py-[41px]">
                            <div className="flex items-center gap-10 card-title-alt">
                                <span className="number-text text-[#F6F6F6] text-[48px] leading-[120%] font-bold">03</span>
                                <span className="question-text text-[#F6F6F6] text-[24px] leading-[120%] font-bold">What are transfer limits?</span>
                            </div>
                            <div className="toggle-icon w-[48px] h-[48px] rounded-full bg-[#F6F6F6] flex items-center justify-center relative flex-shrink-0">
                                <div className={`absolute w-[2.5px] h-[20px] bg-[#1C1C1C] rounded-full transition-all duration-300 ${open03 ? 'opacity-0 scale-y-0' : 'opacity-100 scale-y-100'}`}></div>
                                <div className="absolute w-[20px] h-[3px] bg-[#1C1C1C] rounded-full"></div>
                            </div>
                        </div>
                        <div className={`px-[60px] pb-[41px] pt-8 transition-opacity duration-300 ${open03 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="h-[1px] w-full max-w-[966px] bg-[#F6F6F6] mb-4"></div>
                            <p className="answer-text text-[#E7E7E7] text-[16px] leading-[120%] font-normal font-montserrat max-w-[966px]">
                                You can send as little as $1 and as much as $10,000 per transaction. For larger amounts, please contact our support team for assistance.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1100px) {
                    .header-text {
                        font-size: 36px !important;
                    }
                    .card-container {
                        width: min(400px, 92vw) !important;
                        min-height: 100px !important;
                        border-radius: 45px !important;
                    }
                    .card-header {
                        padding: 20px 30px !important;
                        height: 100px !important;
                    }
                    .card-title-alt {
                        gap: 15px !important;
                        flex-direction: row !important;
                        align-items: center !important;
                    }
                    .number-text {
                        font-size: 32px !important;
                        line-height: 100% !important;
                    }
                    .question-text {
                        font-size: 16px !important;
                        line-height: 120% !important;
                    }
                    .toggle-icon {
                        width: 36px !important;
                        height: 36px !important;
                    }
                    .toggle-icon :global(div:first-child) {
                        height: 14px !important;
                    }
                    .toggle-icon :global(div:last-child) {
                        width: 14px !important;
                    }
                    .answer-text {
                        font-size: 14px !important;
                    }
                    div[class*="pt-8"] {
                        padding-left: 30px !important;
                        padding-right: 30px !important;
                        padding-top: 20px !important;
                        padding-bottom: 30px !important;
                    }
                }
            `}</style>
        </section>
    );
};
