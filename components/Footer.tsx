"use client";

import { AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-dark pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-10 md:flex-row">
          <div>
            <span className="font-heading text-xl font-extrabold text-white">
              Creative Factory
            </span>
            <p className="mt-1 font-body text-sm text-white/40">
              &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#hizmetler"
              className="font-body text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Hizmetler
            </a>
            <a
              href="#portfolio"
              className="font-body text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Portfolio
            </a>
            <a
              href="#iletisim"
              className="font-body text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              İletişim
            </a>
          </div>

          <a
            href="https://instagram.com/creativefactory.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-white/60 transition-colors hover:text-white"
          >
            <AtSign size={18} />
            @creativefactory.tr
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-white/5 py-4">
        <div className="marquee-track-slow">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-4 px-2 font-heading text-sm font-bold uppercase tracking-widest text-white/10"
            >
              <span>TASARIM</span>
              <span className="text-accent-orange/30">●</span>
              <span>STRATEJİ</span>
              <span className="text-accent-blue/30">●</span>
              <span>DİJİTAL</span>
              <span className="text-accent-yellow/30">●</span>
              <span>MARKA</span>
              <span className="text-accent-green/30">●</span>
              <span>ÜRETİM</span>
              <span className="text-accent-orange/30">●</span>
            </span>
          ))}
        </div>
      </div>

      <div className="py-6 text-center">
        <p className="font-body text-sm text-white/30">
          İstanbul&apos;dan markalara değer katıyoruz.
        </p>
      </div>
    </footer>
  );
}
