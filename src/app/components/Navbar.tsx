"use client"

import { useState } from "react"
import Link from "next/link"
import { useWaitlist } from "../context/WaitlistContext"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { openWaitlist } = useWaitlist()

    return (
        <div className="relative z-50">
            {/* Desktop Header */}
            <header className="hidden md:block fixed w-full top-0 left-0 p-10">
                <div className="flex justify-center">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 px-8 py-4" style={{ width: '1280px', height: '94px' }}>
                        <div className="flex justify-between items-center h-full">
                            {/* Logo */}
                            <Link href="/" className="flex items-center flex-shrink-0">
                                <img
                                    src="/fx-remit-v2.svg"
                                    alt="FX Remit"
                                    className="object-contain"
                                    style={{ width: '122px', height: '26px' }}
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="flex space-x-12">
                                <Link href="/#how-it-works" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    How it Works
                                </Link>
                                <Link href="/#why-us" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    Why Us
                                </Link>
                                <Link href="/#security" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    Security
                                </Link>
                                <Link href="/#faq" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    FAQ
                                </Link>
                            </nav>

                            {/* Desktop CTA Button */}
                            <div>
                                <button
                                    onClick={openWaitlist}
                                    className="bg-[#2261FE] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors inline-block font-inter"
                                >
                                    Join Waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="md:hidden fixed w-full top-0 left-0 p-4">
                <div className="flex justify-center">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 px-4 py-3" style={{ width: '100%', maxWidth: '400px', height: '65px' }}>
                        <div className="flex justify-between items-center h-full">
                            {/* Mobile Logo */}
                            <Link href="/" className="flex items-center flex-shrink-0">
                                <img
                                    src="/fx-remit-v2.svg"
                                    alt="FX Remit"
                                    className="object-contain"
                                    style={{ width: '100px', height: 'auto' }}
                                />
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-20 left-4 right-4 z-40">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3">
                        <div className="space-y-3">
                            <Link href="/#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                How it Works
                            </Link>
                            <Link href="/#why-us" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                Why Us
                            </Link>
                            <Link href="/#security" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                Security
                            </Link>
                            <Link href="/#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                FAQ
                            </Link>
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        openWaitlist();
                                    }}
                                    className="bg-[#2261FE] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                                >
                                    Join Waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
