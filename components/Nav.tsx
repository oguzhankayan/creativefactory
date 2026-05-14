"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/services";

type Props = { onHome?: () => void };

export default function Nav({ onHome }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHome = (e: React.MouseEvent) => {
    if (!isHome) return; // Let Link navigate to "/"
    e.preventDefault();
    if (onHome) onHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__row">
        <Link
          className="nav__brand"
          href={isHome ? "#top" : "/"}
          onClick={handleHome}
          aria-label="Creative Factory ana sayfa"
        >
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
          </span>
          <span className="brand-word">
            Creative Factory<span className="brand-sup">©</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Ana menü">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className="navlink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__meta">
          <Link href="/#iletisim" className="btn btn--pill">
            <span className="btn__dot" /> Konuşalım
          </Link>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger ${open ? "burger--x" : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {open && (
        <div className="nav__sheet" role="dialog" aria-modal="true">
          {NAV.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="sheet-link"
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <span>0{i + 1}</span> {l.label}
            </Link>
          ))}
          <Link
            href="/#iletisim"
            onClick={() => setOpen(false)}
            className="btn btn--pill sheet-cta"
          >
            <span className="btn__dot" /> Konuşalım
          </Link>
        </div>
      )}
    </header>
  );
}
