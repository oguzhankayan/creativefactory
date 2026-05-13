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
          lineHeight: 1.08,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(6px, 0.6vw, 12px)",
          marginBottom: "clamp(28px, 3vw, 44px)",
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/70 to-white/40 drop-shadow-[0_0_24px_rgba(255,255,255,0.12)]">
          Tasarlamıyoruz.
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#c8ff3d] via-white to-[#c8ff3d]/50 drop-shadow-[0_0_32px_rgba(200,255,61,0.25)]">
          Marka inşa ederiz.
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.95)}
        className="text-white/65 font-light tracking-wide"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "720px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          lineHeight: 1.55,
          textAlign: "center",
          marginBottom: "clamp(40px, 4.5vw, 72px)",
        }}
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
