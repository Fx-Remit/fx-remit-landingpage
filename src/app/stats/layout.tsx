export default function StatsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-white flex flex-col font-inter selection:bg-orange-100">
            <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-[#F5F5F5] rounded-b-[3rem] px-4 md:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-[#FF6600] text-[16px] md:text-[18px] leading-[150%] mb-2">On-chain traction</p>
                    <h1 className="text-[40px] md:text-[64px] font-bold text-[#1C1C1C] leading-tight mb-6">
                        FX Remit Stats
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#3D3D3D] leading-[150%] max-w-2xl mx-auto">
                        Live volume, transactions and users. Every number comes from public blockchain data, so anyone can verify it.
                    </p>
                </div>
            </section>

            <section className="flex-1 py-12 md:py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">{children}</div>
            </section>
        </main>
    );
}
