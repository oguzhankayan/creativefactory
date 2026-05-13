"use client";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <Reveal as="div" delay={50} className="hero__lede">
          <span>Bağımsız kreatif stüdyo</span>
          <span>İstanbul — 2026</span>
        </Reveal>

        <h1 className="hero__h">
          <Reveal as="span" delay={120} className="hero__line">
            Tasarlamıyoruz.
          </Reveal>
          <Reveal as="span" delay={280} className="hero__line hero__line--accent">
            Marka <em className="hero__em">inşa</em> ederiz.
          </Reveal>
        </h1>

        <div className="hero__foot">
          <Reveal as="p" delay={440} className="hero__copy">
            Web, kimlik, içerik ve performans pazarlaması. Stratejiden lansman sonrasına kadar
            markanızı uzun vadeli büyütecek tek bir ekip — sözleşmeyle değil sonuçla bağlı.
          </Reveal>

          <Reveal as="div" delay={560} className="hero__cta">
            <a href="#iletisim" className="bigbtn">
              <span className="bigbtn__label">Projeni getir</span>
              <span className="bigbtn__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#hizmetler" className="ghostlink">
              Hizmetlere göz at
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
