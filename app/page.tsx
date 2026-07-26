import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RevealStatement from "@/components/RevealStatement";
import Clients from "@/components/Clients";
import Works from "@/components/Works";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomeJsonLd from "@/components/HomeJsonLd";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/`,
    },
  },
};

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
        <Works />
        <Products />
        <Services />
        <Process />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
