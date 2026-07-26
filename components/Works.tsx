"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { WORKS } from "@/lib/works";

export default function Works() {
  return (
    <section className="works" id="isler">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">İşler · {WORKS.length} müşteri</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Kimin için, <span className="ink">ne yaptım.</span>
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Ambulans servisinden sürücü kursuna, ajanstan gıda markasına. Dört farklı problem,
          aynı masa.
        </Reveal>
      </div>

      <div className="works__grid">
        {WORKS.map((w, i) => (
          <Reveal
            key={w.slug}
            delay={i * 60}
            as={Link}
            href={`/isler#${w.slug}`}
            className="work"
          >
            <span className="work__sector">{w.sector}</span>
            <h3 className="work__client">{w.client}</h3>
            <p className="work__summary">{w.summary}</p>
            <ul className="work__scope">
              {w.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className="work__detail">İncele</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
