"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_EN = [
  { label: "Services", href: "/en#services" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export default function NavEn() {
  const pathname = usePathname();
  const isHome = pathname === "/en";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = "en";
    return () => {
      document.documentElement.lang = prev;
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__row">
        <Link
          className="nav__brand"
          href={isHome ? "#top" : "/en"}
          aria-label="Creative Factory home"
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

        <nav className="nav__links" aria-label="Main menu">
          {NAV_EN.map((l) => (
            <Link key={l.href} href={l.href} className="navlink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__meta">
          <Link href="/" className="navlink lang-toggle" aria-label="Türkçe sürüm">
            TR
          </Link>
          <Link href="/en/contact" className="btn btn--pill">
            <span className="btn__dot" /> Let&apos;s talk
          </Link>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
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
          {NAV_EN.map((l, i) => (
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
            href="/"
            onClick={() => setOpen(false)}
            className="sheet-link"
            style={{ animationDelay: `${80 + NAV_EN.length * 60}ms` }}
          >
            <span>TR</span> Türkçe
          </Link>
          <Link
            href="/en/contact"
            onClick={() => setOpen(false)}
            className="btn btn--pill sheet-cta"
          >
            <span className="btn__dot" /> Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  );
}
