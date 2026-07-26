"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0.4, 0.25, 1] as const;

const up = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

// Every number here is checkable: the App Store listings and klevia.com.tr are public.
const PROOF = [
  { v: "10+", k: "yıl" },
  { v: "06", k: "uygulama App Store'da" },
  { v: "01", k: "SaaS canlı" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__col">
          <motion.span {...up(0.15)} className="kicker hero__kicker">
            Kreatif Direktör · Silivri, İstanbul
          </motion.span>

          <motion.h1 {...up(0.25)} className="hero__h">
            <span>Yarım iş teslim etmiyorum.</span>
            <span className="hero__h-accent">Uçtan uca bitmiş ürün.</span>
          </motion.h1>

          <motion.p {...up(0.4)} className="hero__sub">
            Marka kimliği, web sitesi, reklam, mobil uygulama. Sunum dosyasında değil,
            yayında teslim ediyorum. Konuştuğun kişi işi yapan kişi.
          </motion.p>

          <motion.div {...up(0.55)} className="hero__cta">
            <a href="#iletisim" className="bigbtn">
              <span className="bigbtn__label">Projeni getir</span>
              <span className="bigbtn__arrow" aria-hidden="true">
                ↗︎
              </span>
            </a>
            <Link href="/isler" className="ghostlink">
              İşleri gör
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="hero__media"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/founder.png"
            alt="Oğuzhan Kayan, Creative Factory kurucusu"
            width={1240}
            height={1240}
            loading="eager"
            decoding="async"
            className="hero__portrait"
          />
        </motion.div>
      </div>

      <motion.div {...up(0.7)} className="hero__proof">
        {PROOF.map((p) => (
          <span key={p.k} className="hero__proof-item">
            <strong>{p.v}</strong>
            <span>{p.k}</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
