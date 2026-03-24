"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Süreç", href: "#surec" },
  { label: "Hakkımızda", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > prev && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/[0.03] border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="group flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight text-primary md:text-2xl"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-orange transition-transform group-hover:rotate-12 group-hover:scale-110">
                <span className="text-sm font-black text-white">CF</span>
              </div>
              Creative Factory
            </motion.a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="group relative px-4 py-2 font-heading text-sm font-semibold text-primary/60 transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-accent-orange transition-all duration-300 group-hover:w-2/3" />
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="#iletisim"
                className="group ml-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                Ücretsiz Keşif Görüşmesi
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 md:hidden"
              aria-label="Menü"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-white md:hidden"
          >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="glow-orb absolute -right-20 top-20 h-60 w-60 rounded-full bg-accent-orange/20 blur-[80px]" />
              <div className="glow-orb-delayed absolute -left-20 bottom-20 h-60 w-60 rounded-full bg-accent-blue/15 blur-[80px]" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, type: "spring" as const, stiffness: 100, damping: 15 }}
                  className="font-heading text-4xl font-extrabold text-primary transition-colors hover:text-accent-orange"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#iletisim"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" as const, stiffness: 80 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-orange px-8 py-4 font-heading text-lg font-bold text-white shadow-xl shadow-accent-orange/30"
              >
                Ücretsiz Keşif Görüşmesi
                <ArrowUpRight size={20} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
