"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="neden-biz" className="bg-[var(--bg-main)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Fark Nerede?
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="rounded-xl bg-gray-100 p-6 md:p-8"
          >
            <h3 className="mb-6 font-heading text-xl font-bold text-text-secondary">
              Sıradan Ajanslar
            </h3>
            <ul className="space-y-4">
              {ordinary.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-text-secondary">
                  <span className="mt-0.5 text-lg">❌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="-translate-y-0 rounded-xl border-2 border-accent-orange bg-white p-6 shadow-xl shadow-accent-orange/10 md:-translate-y-4 md:p-8"
          >
            <h3 className="mb-6 font-heading text-xl font-bold text-primary">
              Creative Factory
            </h3>
            <ul className="space-y-4">
              {creative.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-primary">
                  <span className="mt-0.5 text-lg">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
