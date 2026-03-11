'use client';

import Image from 'next/image';

const features = [
    {
        title: 'Settlement Partners',
        icon: '/file.svg',
        className: 'bg-gray-100'
    },
    {
        title: 'Bridge Infrastructure',
        icon: '/coins.svg',
        className: 'bg-secondary text-white'
    },
    {
        title: 'Security & Compliance',
        icon: '/phone.svg',
        className: 'bg-gray-100'
    }
];

export const SecuritySection = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background motif */}
            <div className="absolute inset-0 opacity-10">
                <Image src="/rainbow.svg" alt="Pattern" fill className="object-cover scale-150 rotate-12" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl mb-16">
                    <h3 className="text-secondary font-bold text-sm tracking-wider uppercase mb-4">Built for millions</h3>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Built for scale and security
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Our multi-chain infrastructure is designed to handle millions of transactions while maintaining the highest security standards. Technical deep-dives below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                        <Image src="/man.svg" alt="Infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent flex flex-col justify-end p-8">
                            <div className="space-y-4">
                                <h4 className="text-3xl font-bold"><span className="text-gray-200">Global reach,</span> <span className="text-secondary">Local delivery</span></h4>
                                <p className="text-sm text-gray-200 max-w-sm">
                                    Send money to 15+ countries across Africa, Asia, Latin America with instant settlement.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {features.map((f) => (
                            <div key={f.title} className={`${f.className} p-8 rounded-2xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all`}>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center">
                                        <Image src={f.icon} alt={f.title} width={24} height={24} className={f.title === 'Settlement Partners' || f.title === 'Security & Compliance' ? 'invert' : ''} />
                                    </div>
                                    <h4 className="text-xl font-bold">{f.title}</h4>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-2xl">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
