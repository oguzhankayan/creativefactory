"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--bg-main)] pt-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-orange/10 blur-3xl" />
        <div className="absolute -left-32 bottom-32 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-accent-yellow/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Sadece tasarlamıyoruz.
            <br />
            <span className="text-accent-orange">Marka inşa ediyoruz.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 80 }}
          className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary sm:text-xl md:mt-8 md:text-2xl"
        >
          Web tasarım, marka kimliği, dijital strateji ve reklam yönetimi ile
          işletmenizi bir sonraki seviyeye taşıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10"
        >
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center rounded-full bg-accent-orange px-8 py-4 font-heading text-base font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent-orange/25 sm:text-lg"
          >
            Projenizi Konuşalım
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 font-heading text-base font-bold text-primary transition-all hover:bg-primary hover:text-white sm:text-lg"
          >
            Portfolyoyu İncele
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-auto w-full overflow-hidden bg-accent-yellow py-4">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-6 px-3 font-heading text-lg font-extrabold uppercase tracking-wide text-primary sm:text-2xl"
            >
              <span>WEB TASARIM</span>
              <span className="text-accent-orange">—</span>
              <span>MARKA KİMLİĞİ</span>
              <span className="text-accent-orange">—</span>
              <span>DİJİTAL REKLAM</span>
              <span className="text-accent-orange">—</span>
              <span>SOSYAL MEDYA</span>
              <span className="text-accent-orange">—</span>
              <span>STRATEJİ</span>
              <span className="text-accent-orange">—</span>
              <span>İÇERİK ÜRETİMİ</span>
              <span className="text-accent-orange">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
