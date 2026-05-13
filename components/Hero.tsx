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
    <HeroGeometric badge="Bağımsız kreatif stüdyo · İstanbul · 2026">
      <motion.h1
        {...fadeUp(0.9)}
        className="font-bold tracking-tight leading-[0.94] mb-8 md:mb-10"
        style={{ fontSize: "clamp(56px, 10.5vw, 172px)", letterSpacing: "-0.04em" }}
      >
        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/85">
          Tasarlamıyoruz.
        </span>
        <span className="block text-[#c8ff3d]">
          Marka <em className="not-italic">inşa</em> ederiz.
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp(1.1)}
        className="text-[16px] md:text-[18px] leading-[1.5] text-white/55 max-w-[560px] mx-auto mb-10"
      >
        Web, kimlik, içerik ve performans pazarlaması. Stratejiden lansman sonrasına kadar
        markanızı uzun vadeli büyütecek tek bir ekip — sözleşmeyle değil sonuçla bağlı.
      </motion.p>

      <motion.div
        {...fadeUp(1.3)}
        className="flex flex-wrap items-center justify-center gap-5 md:gap-6"
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
