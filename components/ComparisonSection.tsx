"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SplitText from "./SplitText";

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

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function ComparisonSection() {
  return (
    <section className="bg-bg-primary py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="font-heading text-[32px] font-bold leading-[1.15] text-text-primary sm:text-[40px] md:text-[48px]">
            <SplitText>Fark Nerede?</SplitText>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2"
        >
          {/* Ordinary */}
          <motion.div
            variants={staggerChild}
            className="rounded-2xl border border-border bg-[#F5F5F0] p-8 md:p-10"
          >
            <h3 className="font-heading text-[24px] font-bold text-text-tertiary">
              Sıradan Ajanslar
            </h3>
            <ul className="mt-6 space-y-4" role="list">
              {ordinary.map((item) => (
                <li key={item} className="flex items-start gap-3" role="listitem">
                  <X
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4D4D4]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="font-body text-[16px] text-text-tertiary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Creative Factory */}
          <motion.div
            variants={staggerChild}
            className="rounded-2xl border-2 border-accent-orange bg-white p-8 shadow-[0_8px_40px_rgba(255,107,53,0.08)] md:p-10"
          >
            <h3 className="font-heading text-[24px] font-bold text-text-primary">
              Creative Factory
            </h3>
            <ul className="mt-6 space-y-4" role="list">
              {creative.map((item) => (
                <li key={item} className="flex items-start gap-3" role="listitem">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-accent-orange"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="font-body text-[16px] font-medium text-text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
