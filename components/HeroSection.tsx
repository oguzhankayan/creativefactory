"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Palette, TrendingUp, Share2, Lightbulb, Video } from "lucide-react";

const floatingBadges = [
  { icon: Monitor, label: "Web Tasarım", className: "float-1 top-[18%] left-[5%] sm:left-[8%] rotate-[-6deg]", delay: 0.8 },
  { icon: Palette, label: "Marka Kimliği", className: "float-2 top-[12%] right-[4%] sm:right-[10%] rotate-[4deg]", delay: 1.0 },
  { icon: TrendingUp, label: "Dijital Reklam", className: "float-3 top-[45%] right-[2%] sm:right-[5%] rotate-[-3deg]", delay: 1.2 },
  { icon: Share2, label: "Sosyal Medya", className: "float-4 bottom-[28%] left-[3%] sm:left-[6%] rotate-[5deg]", delay: 1.4 },
  { icon: Lightbulb, label: "Strateji", className: "float-5 bottom-[22%] right-[8%] sm:right-[12%] rotate-[-4deg]", delay: 1.6 },
  { icon: Video, label: "İçerik Üretimi", className: "float-6 top-[35%] left-[1%] sm:left-[3%] rotate-[3deg]", delay: 1.8 },
];

const words = "Stratejiden tasarıma, dijitalden büyümeye kadar markanızı bir sonraki seviyeye taşımak için buradayız. Tam da bu yüzden, büyüme bizim".split(" ");
const fadedWords = "için bir motto değil, sürekli yenilenen bir yol haritasıdır.".split(" ");

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh]">
      {/* Sticky hero container */}
      <div className="sticky top-0 flex min-h-screen flex-col overflow-hidden">
        {/* Animated glow orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-orb absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-orange/20 blur-[120px]" />
          <div className="glow-orb-delayed absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-blue/15 blur-[100px]" />
          <div className="glow-orb-slow absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-accent-yellow/15 blur-[100px]" />
        </div>

        {/* Floating badges - fly in from outside */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {floatingBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 80 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: badge.delay,
                  duration: 0.8,
                  type: "spring" as const,
                  stiffness: 80,
                  damping: 12,
                }}
                style={{ scale: badgeScale, opacity: badgeOpacity }}
                className={`absolute ${badge.className}`}
              >
                <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-black/5 ring-1 ring-black/5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-orange/10 to-accent-blue/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-heading text-sm font-bold text-primary">{badge.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main hero content */}
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg shadow-black/5 ring-1 ring-black/5"
          >
            <div className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-body text-sm font-medium text-text-secondary">250+ Başarılı Proje</span>
          </motion.div>

          {/* Headline - word by word */}
          <h1 className="max-w-5xl font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {["Sadece", "tasarlamıyoruz."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, type: "spring" as const, stiffness: 80 }}
                className="mr-[0.3em] inline-block text-primary"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {["Marka", "inşa", "ediyoruz."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.7, type: "spring" as const, stiffness: 70 }}
                className="mr-[0.3em] inline-block text-accent-orange"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#iletisim"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-white transition-all hover:scale-105 hover:shadow-2xl sm:text-lg"
            >
              <span className="relative z-10">Projenizi Konuşalım</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-8 py-4 font-heading text-base font-bold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white sm:text-lg"
            >
              Portfolyoyu İncele
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll reveal text section */}
        <div ref={textRef} className="relative z-10 mx-auto max-w-5xl px-4 pb-12 text-center sm:px-6">
          <ScrollRevealText words={words} fadedWords={fadedWords} />
        </div>

        {/* Marquee */}
        <div className="relative z-10 mt-auto w-full overflow-hidden bg-accent-yellow py-4">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-6 px-3 font-heading text-lg font-extrabold uppercase tracking-wide text-primary sm:text-2xl"
              >
                <span>WEB TASARIM</span>
                <span className="text-accent-orange">●</span>
                <span>MARKA KİMLİĞİ</span>
                <span className="text-accent-orange">●</span>
                <span>DİJİTAL REKLAM</span>
                <span className="text-accent-orange">●</span>
                <span>SOSYAL MEDYA</span>
                <span className="text-accent-orange">●</span>
                <span>STRATEJİ</span>
                <span className="text-accent-orange">●</span>
                <span>İÇERİK ÜRETİMİ</span>
                <span className="text-accent-orange">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollRevealText({ words, fadedWords }: { words: string[]; fadedWords: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <p ref={ref} className="font-heading text-2xl font-bold leading-relaxed sm:text-3xl md:text-4xl">
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} index={i} total={words.length}>
          {word}
        </Word>
      ))}
      {fadedWords.map((word, i) => (
        <Word key={`faded-${i}`} progress={scrollYProgress} index={words.length + i} total={words.length + fadedWords.length} faded>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  index,
  total,
  faded = false,
}: {
  children: string;
  progress: ReturnType<typeof useTransform<number, number>> | ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
  faded?: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, faded ? 0.35 : 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.3em] inline-block ${faded ? "text-text-secondary" : "text-primary"}`}
    >
      {children}
    </motion.span>
  );
}
