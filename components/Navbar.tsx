"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Süreç", href: "#surec" },
  { label: "Hakkımızda", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#" className="font-heading text-xl font-extrabold tracking-tight text-primary md:text-2xl">
            Creative Factory
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold text-primary/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="rounded-full bg-accent-orange px-5 py-2.5 font-heading text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-orange/25"
            >
              Ücretsiz Keşif Görüşmesi
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 md:hidden"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-6 bg-white md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-2xl font-bold text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-accent-orange px-8 py-3 font-heading text-lg font-bold text-white"
            >
              Ücretsiz Keşif Görüşmesi
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
