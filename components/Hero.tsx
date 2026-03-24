"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticWrap from "./MagneticWrap";
import SplitText from "./SplitText";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — heading moves slower, subtitle fades, CTA shrinks
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const ctaScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 pt-[72px] md:px-10"
    >
      {/* Animated gradient mesh background */}
      <div className="hero-gradient-mesh" aria-hidden="true" />

      <div className="relative z-[2] flex w-full max-w-[1200px] flex-col items-center gap-8 py-16 text-center md:py-24">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          style={{ y: badgeY, opacity: badgeOpacity }}
          className="rounded-full bg-bg-dark px-5 py-2 motion-reduce:!transform-none motion-reduce:!opacity-100"
        >
          <span className="font-body text-[13px] font-medium text-white">
            İstanbul Merkezli Kreatif Ajans
          </span>
        </motion.div>

        {/* Heading — split text reveal */}
        <motion.div
          style={{ y: headingY }}
          className="motion-reduce:!transform-none"
        >
          <h1 className="font-heading text-[40px] font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-[56px] md:text-[72px]">
            <SplitText delay={0.2}>Sadece tasarlamıyoruz.</SplitText>
            <br />
            <span className="text-accent-orange">
              <SplitText delay={0.5}>Marka inşa ediyoruz.</SplitText>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ y: subtitleY, opacity: subtitleOpacity }}
          className="max-w-[560px] font-body text-[17px] leading-[1.6] text-text-secondary md:text-[20px] motion-reduce:!transform-none motion-reduce:!opacity-100"
        >
          Web tasarım, marka kimliği, dijital strateji ve reklam yönetimi ile
          işletmenizi bir sonraki seviyeye taşıyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          style={{ y: ctaY, opacity: ctaOpacity, scale: ctaScale }}
          className="flex flex-col items-center gap-4 sm:flex-row motion-reduce:!transform-none motion-reduce:!opacity-100"
        >
          <MagneticWrap strength={0.25}>
            <a
              href="#iletisim"
              className="inline-block rounded-xl bg-accent-orange px-9 py-4 font-body text-[16px] font-semibold tracking-[0.01em] text-white transition-[transform,box-shadow,filter] duration-200 hover:scale-[1.02] hover:shadow-lg hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
            >
              Projenizi Konuşalım
            </a>
          </MagneticWrap>
          <MagneticWrap strength={0.25}>
            <a
              href="#portfolio"
              className="inline-block rounded-xl border-2 border-border px-9 py-4 font-body text-[16px] font-semibold tracking-[0.01em] text-text-primary transition-[border-color,background-color,color] duration-200 hover:border-bg-dark hover:bg-bg-dark hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
            >
              Portfolyoyu İncele
            </a>
          </MagneticWrap>
        </motion.div>
      </div>
    </section>
  );
}
