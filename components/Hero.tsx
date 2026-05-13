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
        className="mx-auto font-bold tracking-tight leading-[1.02] mb-10 md:mb-14"
        style={{ fontSize: "clamp(36px, 7.5vw, 104px)", letterSpacing: "-0.035em" }}
      >
        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
          Tasarlamıyoruz.
        </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#c8ff3d] via-white/95 to-[#c8ff3d]/70">
          Marka inşa ederiz.
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.95)}
        className="mx-auto max-w-[640px] text-base sm:text-lg md:text-xl text-white/55 mb-12 md:mb-16 leading-relaxed font-light tracking-wide"
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
