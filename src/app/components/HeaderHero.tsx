"use client"

import { useState } from "react"

export function HeaderHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <section className="relative min-h-screen overflow-hidden pb-40">
            <style jsx>{`
                .hero-rainbow {
                    position: absolute;
                    height: 2160px;
                    top: -580px;
                    left: -549px;
                    max-width: none;
                }
                .hero-text-container {
                    display: flex;
                    flex-direction: column;
                    z-index: 10;
                    position: absolute;
                    width: 808px;
                    top: 200px;
                    left: -100px;
                    gap: 30px;
                    text-align: left;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid #fb923c;
                    border-radius: 9999px;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
                .hero-image-container {
                    position: absolute;
                    width: 507px;
                    height: 760.5px;
                    top: 130px;
                    left: 1050px;
                    z-index: 5;
                }
                @media (max-width: 768px) {
                    .hero-rainbow {
                        width: 2300px;
                        height: 1517px;
                        top: -200px;
                        left: -280px;
                    }
                    .hero-text-container {
                        width: 400px;
                        height: 189px;
                        top: 110px;
                        left: 20px;
                        gap: 15px;
                        position: absolute;
                        text-align: left;
                    }
                    .hero-badge {
                        width: 159px;
                        height: 37px;
                        border-radius: 70px;
                        padding: 10px;
                        gap: 10px;
                        border-width: 1px;
                    }
                    .hero-image-container {
                        top: 577px;
                        left: -33px;
                    }
                }
            `}</style>
            {/* Background Image */}
            <div className="absolute z-0 pointer-events-none w-full h-full overflow-hidden">
                <img
                    src="/rainbow.svg"
                    alt="Background"
                    className="hero-rainbow"
                />
            </div>

            {/* Header Overlay */}
            <div className="relative">
                {/* Desktop Header */}
                <header className="hidden md:block fixed w-full top-0 left-0 z-50 p-10">
                    <div className="flex justify-center">
                        <div className="bg-white rounded-2xl shadow-lg border-b border-gray-200 px-8 py-4" style={{ width: '1280px', height: '94px' }}>
                            <div className="flex justify-between items-center h-full">
                                {/* Logo */}
                                <div className="flex items-center flex-shrink-0">
                                    <img
                                        src="/fx-remit.svg"
                                        alt="FX Remit"
                                        className="object-contain"
                                        style={{ width: '122px', height: '26px' }}
                                    />
                                </div>

                                {/* Desktop Navigation */}
                                <nav className="flex space-x-12">
                                    <a href="#how-it-works" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: '#050505BF' }}>
                                        How it Works
                                    </a>
                                    <a href="#why-us" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: '#050505BF' }}>
                                        About
                                    </a>
                                    <a href="#contact" className="font-normal text-center" style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: '#050505BF' }}>
                                        Team
                                    </a>
                                </nav>

                                {/* Desktop CTA Button */}
                                <div>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors inline-block"
                                    >
                                        Join Waitlist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Header */}
                <header className="md:hidden fixed w-full top-0 left-0 z-50 p-4">
                    <div className="flex justify-center">
                        <div className="bg-white rounded-2xl shadow-lg border-b border-gray-200 px-4 py-3" style={{ width: '100%', maxWidth: '400px', height: '65px' }}>
                            <div className="flex justify-between items-center h-full">
                                {/* Mobile Logo */}
                                <div className="flex items-center flex-shrink-0">
                                    <img
                                        src="/fx-remit.svg"
                                        alt="FX Remit"
                                        className="object-contain"
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </div>

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
                                <a href="#how-it-works" className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    How it Works
                                </a>
                                <a href="#why-us" className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    Why Us
                                </a>
                                <a href="#contact" className="block px-3 py-2 font-normal text-center" style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '150%', color: '#050505BF' }}>
                                    Contact Us
                                </a>
                                <div className="flex justify-center">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors inline-block"
                                    >
                                        Launch App
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Hero Section Content */}
            <div className="relative min-h-screen flex items-center justify-center pt-10 md:pt-0">
                <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative h-full min-h-[800px]">

                    {/* Left Column: Text Content */}
                    <div className="hero-text-container">
                        {/* Live on Celo Mainnet Badge */}
                        <div className="hero-badge self-start px-4 py-1.5 mb-4">
                            <span className="text-orange-400 text-sm font-semibold whitespace-nowrap">
                                Live on Celo Mainnet
                            </span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-0 leading-none">
                            <h1
                                className="text-[#1C1C1C] font-bold text-[36px] md:text-[64px]"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    lineHeight: '100%',
                                    marginBottom: '10px'
                                }}
                            >
                                CROSS-BORDER
                            </h1>
                            <div className="flex flex-row items-baseline gap-2 md:gap-4">
                                <span
                                    className="text-[#FF6600] text-[48px] md:text-[96px]"
                                    style={{
                                        fontFamily: 'var(--font-instrument-serif)',
                                        fontWeight: 400,
                                        lineHeight: '100%'
                                    }}
                                >
                                    Payments
                                </span>
                                <span
                                    className="text-[#1C1C1C] font-bold text-[32px] md:text-[64px]"
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                        lineHeight: '100%'
                                    }}
                                >
                                    INSTANT
                                </span>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <p
                            className="text-[#3D3D3D] text-[18px] leading-[150%] max-w-[808px]"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400
                            }}
                        >
                            Send crypto directly to bank accounts and mobile money in 20+ countries. <br />
                            Experience sub-5 minute settlements and ultra-low fees across all major blockchains.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <a
                                href="#waitlist"
                                className="inline-flex items-center justify-center bg-[#2261FE] text-[#F8F8FF] font-medium text-[18px] px-10 py-5 rounded-xl shadow-lg shadow-blue-500/10 no-underline"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Start sending money
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Hero ImageContainer */}
                    <div className="hero-image-container">
                        <div className="relative w-full h-full">
                            <img
                                src="/hero.svg"
                                alt="FX Remit Mobile App"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
