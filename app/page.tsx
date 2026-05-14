import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RevealStatement from "@/components/RevealStatement";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomeJsonLd from "@/components/HomeJsonLd";

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <RevealStatement />
        <Clients />
        <Services />
        <Process />
        <Comparison />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
