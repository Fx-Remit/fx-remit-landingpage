'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-zinc-950 pt-24 pb-12 relative overflow-hidden">
            {/* Footer background motif */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] opacity-10 pointer-events-none">
                <Image src="/footer.svg" alt="Footer Motif" fill className="object-contain" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2 space-y-8">
                        <Image src="/logo.svg" alt="FX Remit" width={140} height={40} />
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                            Democratizing cross-border payments with blockchain technology. Send money globally with ultra low fees and lightning fast transactions.
                        </p>
                        <div className="text-secondary font-semibold text-sm">
                            Powered by Celo
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-widest">Product</h4>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Send money</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Track transfer</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Exchange rates</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">API</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-widest">Support</h4>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Help center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col items-center">
                    <p className="text-gray-400 dark:text-zinc-600 text-xs text-center">
                        @ {currentYear} FX - Remit. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
