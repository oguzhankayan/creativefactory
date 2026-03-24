"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portfolioItems = [
  { name: "Qualiko", sector: "Gıda & FMCG", gradient: "from-orange-400 to-red-500" },
  { name: "ICONICA", sector: "Sağlık", gradient: "from-blue-400 to-indigo-600" },
  { name: "Köpüklü", sector: "Yiyecek & İçecek", gradient: "from-yellow-400 to-orange-500" },
  { name: "SCOPS", sector: "Lifestyle & Perakende", gradient: "from-emerald-400 to-teal-600" },
  { name: "Akasya Token", sector: "Fintech & Blockchain", gradient: "from-violet-400 to-purple-600" },
  { name: "Müzedenal", sector: "Kültür & Kamu", gradient: "from-amber-400 to-orange-600" },
  { name: "Eurosport", sector: "Spor & Medya", gradient: "from-blue-500 to-cyan-500" },
  { name: "Minnesota Timberwolves", sector: "Spor & Animasyon", gradient: "from-green-500 to-blue-600" },
];

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="portfolio" ref={containerRef} className="overflow-hidden bg-surface-dark py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ürettiğimiz İşler
          </h2>
          <p className="mt-4 font-body text-lg text-white/60 md:text-xl">
            Farklı sektörlerden markalara hayat verdik.
          </p>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 px-4 sm:px-6 lg:px-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 120 }}
            className="group relative flex-shrink-0"
          >
            <div
              className={`relative h-72 w-72 overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} sm:h-80 sm:w-80 md:h-96 md:w-96`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-heading text-2xl font-extrabold text-white/90 sm:text-3xl">
                  {item.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 font-body text-sm font-medium text-white backdrop-blur-sm">
                  {item.sector}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-12 text-center font-heading text-xl font-bold text-white/40">
        ve daha fazlası...
      </p>
    </section>
  );
}
