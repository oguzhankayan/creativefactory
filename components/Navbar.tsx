"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ease } from "@/lib/motion";

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button when menu opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!mobileOpen || !menuRef.current) return;

    if (e.key === "Escape") {
      setMobileOpen(false);
      return;
    }

    if (e.key !== "Tab") return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Üst menü"
        className="transition-[background-color,border-color,backdrop-filter] duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,250,247,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 md:px-10 lg:px-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2" aria-label="Creative Factory Ana Sayfa">
            <div className="h-2 w-2 rounded-[3px] bg-accent-orange" />
            <span className="font-heading text-[20px] font-bold text-text-primary">
              Creative Factory
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="rounded-[10px] bg-accent-orange px-6 py-2.5 font-body text-[14px] font-semibold text-white transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:shadow-lg hover:brightness-[1.08] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
            >
              Ücretsiz Görüşme
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={closeButtonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] rounded-sm md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} className="text-text-on-dark" />
            ) : (
              <Menu size={24} className="text-text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        className="h-[3px] origin-left bg-accent-orange motion-reduce:hidden"
        style={{ scaleX }}
      />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-bg-dark md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease }}
                className="rounded-sm font-heading text-[28px] font-bold text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#iletisim"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 rounded-xl bg-accent-orange px-8 py-4 font-body text-[16px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
            >
              Ücretsiz Görüşme
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
