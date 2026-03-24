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
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);

  const row1 = portfolioItems.slice(0, 4);
  const row2 = portfolioItems.slice(4);

  return (
    <section id="portfolio" ref={containerRef} className="overflow-hidden bg-surface-dark py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" as const, stiffness: 100, damping: 15 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent-orange">
            Portfolio
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ürettiğimiz İşler
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-lg text-white/50">
            Farklı sektörlerden markalara hayat verdik.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <motion.div style={{ x }} className="mb-6 flex gap-5 px-4">
        {[...row1, ...row1].map((item, index) => (
          <PortfolioCard key={`r1-${index}`} item={item} index={index} />
        ))}
      </motion.div>

      {/* Row 2 - scrolls right */}
      <motion.div style={{ x: x2 }} className="flex gap-5 px-4">
        {[...row2, ...row2, ...row2].map((item, index) => (
          <PortfolioCard key={`r2-${index}`} item={item} index={index} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center font-heading text-xl font-bold text-white/30"
      >
        ve daha fazlası...
      </motion.p>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: typeof portfolioItems[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group relative flex-shrink-0 cursor-pointer"
    >
      <div
        className={`relative h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} sm:h-72 sm:w-72 md:h-80 md:w-80`}
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="font-heading text-2xl font-extrabold text-white drop-shadow-lg sm:text-3xl">
            {item.name}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

        {/* Sector tag - slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-all duration-500 group-hover:translate-y-0">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 font-body text-sm font-semibold text-white backdrop-blur-md">
            {item.sector}
          </span>
        </div>

        {/* Top-right glow on hover */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/0 blur-[40px] transition-all duration-500 group-hover:bg-white/20" />
      </div>
    </motion.div>
  );
}
