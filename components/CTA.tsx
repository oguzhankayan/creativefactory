"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Balloons, type BalloonsHandle } from "./ui/balloons";
import { SERVICES } from "@/lib/services";

const HEADLINE_WORDS = [
  { text: "Önce" },
  { text: "konuşalım.", className: "text-[var(--accent)]" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzkzrj";

// Optional on purpose. Asking for a range qualifies the lead without publishing
// a price list; "Henüz bilmiyorum" stays a valid answer so nobody bounces here.
const BUDGETS = [
  "Henüz bilmiyorum",
  "50.000 ₺ altı",
  "50.000 - 150.000 ₺",
  "150.000 - 400.000 ₺",
  "400.000 ₺ üzeri",
  "Aylık devam eden iş",
];

type Status = "idle" | "submitting" | "sent" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const balloonsRef = useRef<BalloonsHandle>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setStatus("sent");
        balloonsRef.current?.launchAnimation();
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          data?.errors?.[0]?.message ||
            "Bir şeyler ters gitti. Lütfen e-posta ile yaz: hi@creativefactory.tr"
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Bağlantı sorunu. Lütfen e-posta ile yaz: hi@creativefactory.tr"
      );
      setStatus("error");
    }
  };

  const sent = status === "sent";

  return (
    <section className="cta" id="iletisim">
      <div className="cta__grid">
        <div className="cta__left">
          <Reveal as="div">
            <span className="kicker">İletişim</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="cta__h" style={{ margin: 0, padding: 0, position: "relative" }}>
            {/* Invisible sizing reference: reserves final width so animation doesn't push the form */}
            <span aria-hidden="true" style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
              Önce konuşalım.
            </span>
            {/* Animated overlay */}
            <span style={{ position: "absolute", inset: 0, display: "block" }}>
              <TypewriterEffectSmooth
                words={HEADLINE_WORDS}
                className="my-0"
                cursorClassName="bg-[var(--accent)] h-[0.7em] self-end mb-2"
              />
            </span>
          </Reveal>
          <Reveal as="p" delay={180} className="cta__copy">
            30 dakikalık keşif görüşmesinde projeni dinliyor, neye ihtiyacın olduğunu birlikte
            netleştiriyoruz. Karşında ajans değil, işi yapacak kişi var. Hiçbir taahhüt yok.
          </Reveal>
          <Reveal delay={240} className="cta__contacts">
            <a href="mailto:hi@creativefactory.tr">
              <span className="dim">E-posta</span> hi@creativefactory.tr
            </a>
            <a href="tel:+905396004394">
              <span className="dim">Telefon</span> +90 539 600 43 94
            </a>
            <span>
              <span className="dim">Stüdyo</span> Silivri, İstanbul
            </span>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          as="form"
          className="cta__form"
          onSubmit={handleSubmit}
        >
          {sent ? (
            <div className="cta__success">
              <span className="cta__success-dot" />
              <h3>Mesajın iletildi.</h3>
              <p>24 saat içinde sana dönüyorum. Acelen varsa: hi@creativefactory.tr</p>
              <button type="button" className="ghostlink" onClick={() => setStatus("idle")}>
                Yeni mesaj
              </button>
            </div>
          ) : (
            <>
              <div className="cta__row2">
                <div className="cta__field">
                  <label htmlFor="cf-name">Ad Soyad</label>
                  <input id="cf-name" name="name" type="text" placeholder="Adın ve soyadın" required />
                </div>
                <div className="cta__field">
                  <label htmlFor="cf-email">E-posta</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="ad@firma.com"
                    required
                  />
                </div>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-type">Konu</label>
                <select id="cf-type" name="subject" defaultValue="" required>
                  <option value="" disabled>
                    Hizmet seç
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Ajans için beyaz etiket üretim">
                    Ajans için beyaz etiket üretim
                  </option>
                  <option value="Başka bir konu">Başka bir konu</option>
                </select>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-budget">Bütçe aralığı</label>
                <select id="cf-budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Aklındaki aralık
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-msg">Projeden bahset</label>
                <textarea
                  id="cf-msg"
                  name="message"
                  rows={4}
                  placeholder="2-3 cümle yeterli. Beklenti, takvim, bütçe."
                />
              </div>
              {status === "error" ? (
                <p className="cta__error" role="alert">{errorMsg}</p>
              ) : null}
              <button type="submit" className="cta__submit" disabled={status === "submitting"}>
                <span>{status === "submitting" ? "Gönderiliyor…" : "Mesajı gönder"}</span>
                <span aria-hidden="true" className="cta__submit-arrow">
                  ↗︎
                </span>
              </button>
            </>
          )}
        </Reveal>
      </div>
      <Balloons ref={balloonsRef} />
    </section>
  );
}
