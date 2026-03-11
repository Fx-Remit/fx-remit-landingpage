'use client';

import { useState } from 'react';

const faqs = [
    {
        q: 'How fast are transfers?',
        a: 'Transfers are typically completed within 5-10 minutes, depending on the recipient\'s bank or mobile money operator processing speeds.',
        color: 'bg-primary'
    },
    {
        q: 'Which wallets are supported?',
        a: 'We support all major self-custody wallets including MiniPay, Valora, MetaMask, and Farcaster-integrated wallets.',
        color: 'bg-primary'
    },
    {
        q: 'What are transfer limits?',
        a: 'Initial limits start at $1,000 per transaction, which can be increased with account verification tiers.',
        color: 'bg-secondary'
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">Got questions for us?</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="group">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${faq.color} text-white shadow-lg ${openIndex === i ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-2xl font-black opacity-40">0{i + 1}</span>
                                    <span className="text-lg font-bold text-left">{faq.q}</span>
                                </div>
                                <div className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                    <span className="text-2xl font-light">+</span>
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100 py-6 px-12' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
