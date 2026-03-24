import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import LogoCarousel from "@/components/LogoCarousel";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <LogoCarousel />
        <ServicesSection />
        <PortfolioSection />
        <ComparisonSection />
        <ProcessSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
