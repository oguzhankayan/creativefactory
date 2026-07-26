"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import type { Service } from "@/lib/services";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq ${open ? "faq--open" : ""}`}>
      <button className="faq__head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="faq__q">{q}</span>
        <span className="faq__plus" aria-hidden="true">
          <span className="faq__plus-h" />
          <span className="faq__plus-v" />
        </span>
      </button>
      <div className="faq__panel" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

type Props = {
  service: Service;
  services: Service[];
};

export default function ServiceDetail({ service, services }: Props) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main id="main" className="sd" key={service.slug}>
      <div className="sd__topbar">
        <Link href="/" className="sd__back">
          <span className="sd__back-arrow" aria-hidden="true">
            ←
          </span>
          <span>Tüm hizmetler</span>
        </Link>
        <span className="sd__crumbs">
          <span className="dim">Hizmet</span>
          <span className="sd__crumb-sep" aria-hidden="true">
            /
          </span>
          <span>{service.title}</span>
        </span>
      </div>

      <section className="sd__hero">
        <Reveal as="div">
          <span className="kicker">Hizmet · {service.n} / 06</span>
        </Reveal>
        <Reveal as="h1" delay={100} className="sd__title">
          {service.title}
        </Reveal>
        <Reveal as="p" delay={200} className="sd__tagline">
          {service.tagline}
        </Reveal>
        <Reveal as="p" delay={300} className="sd__intro">
          {service.intro}
        </Reveal>
        {service.heroImage && (
          <Reveal delay={380} className="sd__hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.heroImage}
              alt=""
              width={1600}
              height={896}
              loading="eager"
              decoding="async"
              className="sd__hero-img"
            />
          </Reveal>
        )}
      </section>

      <section className="sd__grid">
        <Reveal className="sd__col">
          <span className="kicker">Teslim edilen</span>
          <ul className="sd__list">
            {service.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="sd__col">
          <span className="kicker">Süre</span>
          <p className="sd__big">{service.timeline}</p>
        </Reveal>
      </section>

      <section className="sd__faq-section">
        <div className="section-head section-head--split">
          <div>
            <Reveal as="div">
              <span className="kicker">Sık sorulanlar</span>
            </Reveal>
            <Reveal as="h2" delay={100} className="section-h">
              Akla ilk gelenler.
            </Reveal>
          </div>
          <Reveal as="p" delay={180} className="section-sub section-sub--right">
            Aklındaki soru burada yoksa direkt sor; sıradan bir soru bile başlamak için iyi bir
            bahane.
          </Reveal>
        </div>
        <div className="sd__faqs">
          {service.faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <section className="sd__cta-section">
        <Reveal className="sd__cta-card">
          <div>
            <span className="kicker">Hazırsan</span>
            <h2 className="sd__cta-h">Bu işi konuşalım.</h2>
            <p className="sd__cta-copy">30 dakikalık keşif görüşmesi. Hiçbir taahhüt yok.</p>
          </div>
          <Link href="/#iletisim" className="bigbtn">
            <span className="bigbtn__label">Konuşalım</span>
            <span className="bigbtn__arrow" aria-hidden="true">
              ↗︎
            </span>
          </Link>
        </Reveal>
      </section>

      <section className="sd__others">
        <div className="section-head section-head--split">
          <div>
            <Reveal as="div">
              <span className="kicker">Diğer hizmetler</span>
            </Reveal>
            <Reveal as="h2" delay={100} className="section-h">
              Devam et.
            </Reveal>
          </div>
        </div>
        <ul className="sd__others-list">
          {others.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <Link href={`/hizmetler/${s.slug}`} className="sd__other">
                <span className="sd__other-n">{s.n}</span>
                <span className="sd__other-title">{s.title}</span>
                <span className="sd__other-tags">{s.tags.join(" · ")}</span>
                <span className="sd__other-arrow" aria-hidden="true">
                  ↗︎
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
