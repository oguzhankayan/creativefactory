"use client";

import { motion } from "framer-motion";
import { HeroGeometric } from "./ui/shape-landing-hero";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function Hero() {
  return (
    <HeroGeometric>
      <motion.h1
        {...fadeUp(0.7)}
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(40px, 5.8vw, 76px)",
          letterSpacing: "-0.035em",
          lineHeight: 1.05,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(2px, 0.3vw, 6px)",
          marginBottom: "clamp(22px, 2.2vw, 32px)",
        }}
      >
        <span style={{ color: "var(--fg-strong)" }}>Sadece tasarlamıyoruz.</span>
        <span style={{ color: "var(--accent)" }}>Marka inşa ediyoruz.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.95)}
        className="text-white/65 font-light tracking-wide"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "640px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          lineHeight: 1.55,
          textAlign: "center",
          marginBottom: "clamp(48px, 5vw, 72px)",
        }}
      >
        Web, kimlik, içerik ve performans pazarlaması. Sözleşmeyle değil, sonuçla bağlıyız.
      </motion.p>

      <motion.div
        {...fadeUp(1.15)}
        className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-5"
      >
        <a href="#iletisim" className="bigbtn">
          <span className="bigbtn__label">Projeni getir</span>
          <span className="bigbtn__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a href="#hizmetler" className="ghostlink">
          Hizmetleri gör
        </a>
      </motion.div>
    </HeroGeometric>
  );
}
