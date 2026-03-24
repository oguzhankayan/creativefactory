"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ordinary = [
  "Hazır şablonlar, herkese aynı tasarım",
  "Teslim et, unut yaklaşımı",
  "Ölçülemeyen, belirsiz sonuçlar",
  "Geç dönüşler, kopuk iletişim",
  "Sadece güzel görünsün kafası",
];

const creative = [
  "Her markaya özel, sıfırdan tasarım",
  "Uzun vadeli büyüme ortaklığı",
  "Ölçülebilir, raporlanabilir sonuçlar",
  "Her zaman ulaşılabilir, hızlı iletişim",
  "Güzel görünsün ve sonuç getirsin",
];

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="neden-biz" className="bg-[var(--bg-main)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" as const, stiffness: 100, damping: 15 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Neden biz?
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Fark Nerede?
          </h2>
        </motion.div>

        <div ref={ref} className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Ordinary agencies */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -3, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" as const, stiffness: 60, damping: 14 }}
            className="relative rounded-2xl bg-gray-100/80 p-6 shadow-sm md:p-8"
          >
            <div className="absolute -right-2 -top-2 rounded-full bg-gray-300 px-3 py-1 font-heading text-xs font-bold text-gray-600 shadow-sm">
              Sıradan
            </div>
            <h3 className="mb-6 font-heading text-2xl font-extrabold text-text-secondary/60">
              Sıradan Ajanslar
            </h3>
            <ul className="space-y-4">
              {ordinary.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 font-body text-text-secondary/70"
                >
                  <span className="mt-0.5 text-base">❌</span>
                  <span className="line-through decoration-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Creative Factory */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 3, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15, type: "spring" as const, stiffness: 60, damping: 14 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="relative overflow-hidden rounded-2xl border-2 border-accent-orange/30 bg-white p-6 shadow-2xl shadow-accent-orange/10 md:-translate-y-4 md:p-8"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent-orange/10 blur-[60px]" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent-yellow/10 blur-[50px]" />

            <div className="absolute -right-2 -top-2 rounded-full bg-accent-orange px-3 py-1 font-heading text-xs font-bold text-white shadow-lg shadow-accent-orange/30">
              Creative Factory
            </div>
            <h3 className="mb-6 font-heading text-2xl font-extrabold text-primary">
              Creative Factory
            </h3>
            <ul className="space-y-4">
              {creative.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                  className="flex items-start gap-3 font-body font-medium text-primary"
                >
                  <span className="mt-0.5 text-base">✅</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
