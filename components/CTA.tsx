"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SERVICES } from "@/lib/services";

const HEADLINE_WORDS = [
  { text: "Önce" },
  { text: "konuşalım.", className: "text-[#c8ff3d]" },
];

export default function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section className="cta" id="iletisim">
      <div className="cta__grid">
        <div className="cta__left">
          <Reveal as="div">
            <span className="kicker">İletişim</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="cta__h" style={{ margin: 0, padding: 0, position: "relative" }}>
            {/* Invisible sizing reference — reserves final width so animation doesn't push the form */}
            <span aria-hidden="true" style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
              Önce konuşalım.
            </span>
            {/* Animated overlay */}
            <span style={{ position: "absolute", inset: 0, display: "block" }}>
              <TypewriterEffectSmooth
                words={HEADLINE_WORDS}
                className="my-0"
                cursorClassName="bg-[#c8ff3d] h-[0.7em] self-end mb-2"
              />
            </span>
          </Reveal>
          <Reveal as="p" delay={180} className="cta__copy">
            Ücretsiz 30 dakikalık keşif görüşmesinde projeni anlıyoruz, neye ihtiyacın olduğunu
            netleştiriyoruz. Bağlayıcı bir şey yok.
          </Reveal>
          <Reveal delay={240} className="cta__contacts">
            <a href="mailto:merhaba@creativefactory.com.tr">
              <span className="dim">E-posta</span> merhaba@creativefactory.com.tr
            </a>
            <a href="tel:+902125550404">
              <span className="dim">Telefon</span> +90 212 555 04 04
            </a>
            <span>
              <span className="dim">Stüdyo</span> Bomonti, İstanbul
            </span>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          as="form"
          className="cta__form"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="cta__success">
              <span className="cta__success-dot" />
              <h3>Mesajın iletildi.</h3>
              <p>24 saat içinde sana yazarız. (Bu bir demo.)</p>
              <button type="button" className="ghostlink" onClick={() => setSent(false)}>
                Yeni mesaj
              </button>
            </div>
          ) : (
            <>
              <div className="cta__row2">
                <div className="cta__field">
                  <label htmlFor="cf-name">Ad</label>
                  <input id="cf-name" type="text" placeholder="Adın ve soyadın" required />
                </div>
                <div className="cta__field">
                  <label htmlFor="cf-email">E-posta</label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="seninadres@firma.com"
                    required
                  />
                </div>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-type">Konu</label>
                <select id="cf-type" defaultValue="">
                  <option value="" disabled>
                    Hizmet seç
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="diger">Başka bir şey</option>
                </select>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-msg">Projeden bahset</label>
                <textarea
                  id="cf-msg"
                  rows={4}
                  placeholder="2-3 cümle yeterli — beklenti, takvim, bütçe…"
                />
              </div>
              <button type="submit" className="cta__submit">
                <span>Mesajı gönder</span>
                <span aria-hidden="true" className="cta__submit-arrow">
                  ↗
                </span>
              </button>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
