import { Navbar, Footer, CTAFooter } from "../components";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col font-inter selection:bg-orange-100">
            <Navbar />
            
            {/* Header Box */}
            <section className="pt-40 pb-20 bg-[#F5F5F5] rounded-b-[3rem] px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-[40px] md:text-[64px] font-bold text-[#1C1C1C] leading-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#3D3D3D] leading-[150%] max-w-2xl mx-auto">
                        We're here to help you navigate your cross-border payments. Reach out with any questions, issues, or partnership inquiries.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <section className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-[2rem] p-10 md:p-16">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-[24px] font-semibold text-[#1C1C1C] mb-4">Customer Support</h3>
                                <p className="text-[16px] text-[#3D3D3D] mb-6 leading-relaxed">
                                    Our support team is available around the clock to assist you with any transaction issues or account inquiries.
                                </p>
                                <a href="mailto:team@fx-remit.xyz" className="inline-flex items-center text-[#2261FE] font-medium text-[16px] hover:text-blue-700 transition-colors">
                                    team@fx-remit.xyz
                                </a>
                            </div>

                            <div>
                                <h3 className="text-[24px] font-semibold text-[#1C1C1C] mb-4">Business & Partnerships</h3>
                                <p className="text-[16px] text-[#3D3D3D] mb-6 leading-relaxed">
                                    Interested in integrating FX Remit into your platform? We offer robust API solutions for businesses.
                                </p>
                                <a href="mailto:team@fx-remit.xyz" className="inline-flex items-center text-[#2261FE] font-medium text-[16px] hover:text-blue-700 transition-colors">
                                    team@fx-remit.xyz
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
