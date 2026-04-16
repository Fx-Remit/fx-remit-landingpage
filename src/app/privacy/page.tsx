import { Navbar, Footer, CTAFooter } from "../components";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col font-inter selection:bg-orange-100">
            <Navbar />
            
            <section className="pt-40 pb-20 bg-[#F5F5F5] rounded-b-[3rem] px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-[40px] md:text-[64px] font-bold text-[#1C1C1C] leading-tight mb-6 mt-10">
                        Privacy Policy
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#3D3D3D] leading-[150%] max-w-2xl mx-auto">
                        Your privacy is our priority. Learn how we collect, use, and protect your personal information.
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
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Introduction</h2>
                            <p className="text-[18px] mb-4">
                                FX Remit (we, us, our) complies with applicable privacy laws and regulations when dealing with personal information. Personal information is information about an identifiable individual (a natural person).
                            </p>
                            <p className="text-[18px] mb-4">
                                This policy sets out how we will collect, use, disclose and protect your personal information.
                            </p>
                            <p className="text-[18px]">
                                This policy does not limit or exclude any of your rights under applicable privacy laws.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Changes to this policy</h2>
                            <p className="text-[18px]">
                                We may change this policy by uploading a revised policy onto the website. The change will apply from the date that we upload the revised policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Who we collect your personal information from</h2>
                            <p className="text-[18px] mb-4">We collect personal information about you from:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-[18px]">
                                <li>You, when you provide that personal information to us, including via the website and any related service, through any registration or subscription process, through any contact with us (e.g. telephone call or email), or when you buy or use our services and products.</li>
                                <li>Third parties where you have authorised this or the information is publicly available.</li>
                            </ul>
                            <p className="text-[18px] mt-4">If possible, we will collect personal information from you directly.</p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">How we use your personal information</h2>
                            <p className="text-[18px] mb-4">We will use your personal information:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-[18px]">
                                <li>To verify your identity.</li>
                                <li>To provide services and products to you.</li>
                                <li>To market our services and products to you, including contacting you electronically (e.g. by text or email for this purpose).</li>
                                <li>To improve the services and products that we provide to you.</li>
                                <li>To undertake credit checks of you (if necessary).</li>
                                <li>To bill you and to collect money that you owe us, including authorising and processing credit card transactions.</li>
                                <li>To respond to communications from you, including a complaint.</li>
                                <li>To conduct research and statistical analysis (on an anonymised basis).</li>
                                <li>To protect and/or enforce our legal rights and interests, including defending any claim.</li>
                                <li>For any other purpose authorised by you or the law.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Disclosing your personal information</h2>
                            <p className="text-[18px] mb-4">We may disclose your personal information to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-[18px]">
                                <li>Another company within our group.</li>
                                <li>Any business that supports our services and products, including any person that hosts or maintains any underlying IT system or data centre that we use to provide the website or other services and products.</li>
                                <li>A credit reference agency for the purpose of credit checking you.</li>
                                <li>Other third parties (for anonymised statistical information).</li>
                                <li>A person who can require us to supply your personal information (e.g. a regulatory authority).</li>
                                <li>Any other person authorised by the law (e.g. a law enforcement agency).</li>
                                <li>Any other person authorised by you.</li>
                            </ul>
                            <p className="text-[18px] mt-4">
                                A business that supports our services and products may be located globally. This may mean your personal information is held and processed across jurisdictions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Protecting your personal information</h2>
                            <p className="text-[18px]">
                                We will take reasonable steps to keep your personal information safe from loss, unauthorised activity, or other misuse.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Accessing and correcting your personal information</h2>
                            <p className="text-[18px] mb-4">
                                Subject to certain grounds for refusal, you have the right to access your readily retrievable personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates.
                            </p>
                            <p className="text-[18px] mb-4">
                                In respect of a request for correction, if we think the correction is reasonable and we are reasonably able to change the personal information, we will make the correction. If we do not make the correction, we will take reasonable steps to note on the personal information that you requested the correction.
                            </p>
                            <p className="text-[18px] mb-4">
                                If you want to exercise either of the above rights, email us at <strong>team@fx-remit.xyz</strong>. Your email should provide evidence of who you are and set out the details of your request.
                            </p>
                            <p className="text-[18px]">
                                We may charge you our reasonable costs of providing to you copies of your personal information or correcting that information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[28px] font-semibold text-[#1C1C1C] mb-4">Internet use</h2>
                            <p className="text-[18px] mb-4">
                                While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.
                            </p>
                            <p className="text-[18px] mb-4">
                                If you post your personal information on our website's or in any of our social media channels, you acknowledge and agree that the information you post is publicly available.
                            </p>
                            <p className="text-[18px] mb-4">
                                If you follow a link on our website to another site, the owner of that site will have its own privacy policy relating to your personal information. We suggest you review that site's privacy policy before you provide personal information.
                            </p>
                            <p className="text-[18px]">
                                We use cookies (an alphanumeric identifier that we transfer to your computer's hard drive so that we can recognise your browser) to monitor your use of the website. You may disable cookies by changing the settings on your browser, although this may mean that you cannot use all of the features of the website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
