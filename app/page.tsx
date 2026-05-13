"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/services";

type Route = { type: "home" } | { type: "service"; slug: string };

function parseRoute(hash: string): Route {
  const m = (hash || "").match(/^#\/hizmetler\/([\w-]+)/);
  if (m) return { type: "service", slug: m[1] };
  return { type: "home" };
}

export default function Home() {
  const [route, setRoute] = useState<Route>({ type: "home" });

  useEffect(() => {
    setRoute(parseRoute(window.location.hash));
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route.type === "service" ? route.slug : "home"]);

  const openService = (slug: string) => {
    window.location.hash = `/hizmetler/${slug}`;
  };

  const closeService = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.hash = "";
  };

  const isService = route.type === "service";
  const activeService = isService ? SERVICES.find((s) => s.slug === route.slug) : null;

  useEffect(() => {
    if (isService && !activeService) window.location.hash = "";
  }, [isService, activeService]);

  if (isService && activeService) {
    return (
      <>
        <Nav onHome={closeService} />
        <ServiceDetail
          service={activeService}
          services={SERVICES}
          onBack={closeService}
          onOpen={openService}
        />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Clients />
        <Services onOpen={openService} />
        <Process />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
