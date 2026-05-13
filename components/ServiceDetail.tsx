"use client";

import { useState } from "react";
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
  onBack: () => void;
  onOpen: (slug: string) => void;
};

export default function ServiceDetail({ service, services, onBack, onOpen }: Props) {
  const others = services.filter((s) => s.slug !== service.slug);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
  };
  const handleOther = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onOpen(slug);
  };
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
    setTimeout(() => {
      window.location.hash = "iletisim";
    }, 40);
  };

  return (
    <main className="sd" key={service.slug}>
      <div className="sd__topbar">
        <a href="#" onClick={handleBack} className="sd__back">
          <span className="sd__back-arrow" aria-hidden="true">
            ←
          </span>
          <span>Tüm hizmetler</span>
        </a>
        <span className="sd__crumbs">
          <span className="dim">Hizmet</span>
          <span className="sd__crumb-sep" aria-hidden="true">
            /
          </span>
          <span>{service.title}</span>
        </span>
        <a href="#iletisim" onClick={handleContact} className="btn btn--pill sd__contact">
          <span className="btn__dot" /> Konuşalım
        </a>
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

        <Reveal delay={200} className="sd__col">
          <span className="kicker">Örnek projeler</span>
          <ul className="sd__cases">
            {service.cases.map((c) => (
              <li key={c}>
                <span>{c}</span>
                <span className="sd__case-arrow" aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="sd__faq-section">
        <div className="section-head section-head--split">
          <div>
            <Reveal as="div">
              <span className="kicker">Sık sorulanlar</span>
            </Reveal>
            <Reveal as="h2" delay={100} className="section-h">
              Detaylar.
            </Reveal>
          </div>
          <Reveal as="p" delay={180} className="section-sub section-sub--right">
            Aklındaki soru burada yoksa direkt sor — sıradan bir sorudan başlamak için müthiş bir
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
            <h2 className="sd__cta-h">{service.title} mu lazım?</h2>
            <p className="sd__cta-copy">30 dakikalık keşif görüşmesi — bağlayıcı değil.</p>
          </div>
          <a href="#iletisim" onClick={handleContact} className="bigbtn">
            <span className="bigbtn__label">Konuşalım</span>
            <span className="bigbtn__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
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
              <a
                href={`#/hizmetler/${s.slug}`}
                onClick={handleOther(s.slug)}
                className="sd__other"
              >
                <span className="sd__other-n">{s.n}</span>
                <span className="sd__other-title">{s.title}</span>
                <span className="sd__other-tags">{s.tags.join(" · ")}</span>
                <span className="sd__other-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
