import { Navbar, Footer, CTAFooter } from "../components";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white flex flex-col font-inter selection:bg-orange-100">
            <Navbar />
            
            <section className="pt-40 pb-20 bg-[#F5F5F5] rounded-b-[3rem] px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-[40px] md:text-[64px] font-bold text-[#1C1C1C] leading-tight mb-6 mt-10">
                        Terms of Service
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#3D3D3D] leading-[150%] max-w-2xl mx-auto">
                        Please read these terms carefully before utilizing our services.
                    </p>
                    <p className="text-[14px] text-gray-500 mt-8">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            <section className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="max-w-none text-[#3D3D3D] leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">1. Agreement to Terms</h2>
                            <p className="text-[18px]">
                                By accessing our platform, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you disagree with any portion of these terms, you are prohibited from using our services.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">2. Use License</h2>
                            <p className="text-[18px]">
                                Permission is granted to temporarily access the materials (information or software) on FX Remit's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-[18px]">
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose;</li>
                                <li>Attempt to decompile or reverse engineer any software contained on the platform;</li>
                                <li>Remove any copyright or other proprietary notations.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">3. Regulatory Compliance & Disclaimers</h2>
                            <p className="text-[18px]">
                                All blockchain transactions executed via FX Remit are final and irreversible. The materials on FX Remit's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">4. Limitations</h2>
                            <p className="text-[18px]">
                                In no event shall FX Remit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the platform, even if FX Remit or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
