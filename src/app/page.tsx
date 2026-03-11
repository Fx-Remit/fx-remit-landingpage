import {
  HeaderHero,
  ChainLogos,
  HowItWorks,
  WhyChooseFx,
  SecuritySection,
  FAQ,
  CTAFooter,
  Footer
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderHero />
      <ChainLogos />
      <HowItWorks />
      <WhyChooseFx />
      <SecuritySection />
      <FAQ />
      <CTAFooter />
      <Footer />
    </main>
  );
}
