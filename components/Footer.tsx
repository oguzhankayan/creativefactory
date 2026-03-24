"use client";

import { motion } from "framer-motion";
import { AtSign, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark pt-16">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-60 w-60 rounded-full bg-accent-orange/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-accent-blue/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-orange">
                <span className="text-sm font-black text-white">CF</span>
              </div>
              <span className="font-heading text-2xl font-extrabold text-white">
                Creative Factory
              </span>
            </div>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/40">
              İstanbul merkezli kreatif ajans. Markalar için strateji, tasarım ve büyüme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {[
              { label: "Hizmetler", href: "#hizmetler" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Süreç", href: "#surec" },
              { label: "İletişim", href: "#iletisim" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group font-body text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            href="https://instagram.com/creativefactory.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 font-body text-sm font-medium text-white/60 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white hover:ring-white/20"
          >
            <AtSign size={16} />
            @creativefactory.tr
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-white/5 py-5">
        <div className="marquee-track-slow">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-6 px-3 font-heading text-base font-extrabold uppercase tracking-[0.15em] text-white/[0.06]"
            >
              <span>TASARIM</span>
              <span className="text-accent-orange/20">●</span>
              <span>STRATEJİ</span>
              <span className="text-accent-blue/20">●</span>
              <span>DİJİTAL</span>
              <span className="text-accent-yellow/20">●</span>
              <span>MARKA</span>
              <span className="text-accent-green/20">●</span>
              <span>ÜRETİM</span>
              <span className="text-accent-orange/20">●</span>
              <span>BÜYÜME</span>
              <span className="text-accent-blue/20">●</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <p className="font-body text-xs text-white/25">
          &copy; {new Date().getFullYear()} Creative Factory. Tüm hakları saklıdır.
        </p>
        <p className="font-body text-xs text-white/25">
          İstanbul&apos;dan markalara değer katıyoruz.
        </p>
      </div>
    </footer>
  );
}
