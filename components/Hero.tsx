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
          fontSize: "clamp(40px, 6.2vw, 80px)",
          letterSpacing: "-0.035em",
          lineHeight: 1.08,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(10px, 1.2vw, 20px)",
          marginBottom: "clamp(48px, 7vw, 112px)",
        }}
      >
        <span className="text-white/95">Tasarlamıyoruz.</span>
        <span className="text-[#c8ff3d]">Marka inşa ederiz.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.95)}
        className="mx-auto max-w-[560px] text-base sm:text-lg text-white/55 leading-relaxed font-light tracking-wide"
        style={{ marginBottom: "clamp(40px, 6vw, 96px)" }}
      >
        Web, kimlik, içerik ve performans pazarlaması — sözleşmeyle değil sonuçla bağlı.
      </motion.p>

      <motion.div
        {...fadeUp(1.15)}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <a href="#iletisim" className="bigbtn">
          <span className="bigbtn__label">Projeni getir</span>
          <span className="bigbtn__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a href="#hizmetler" className="ghostlink">
          Hizmetlere göz at
        </a>
      </motion.div>
    </HeroGeometric>
  );
}
