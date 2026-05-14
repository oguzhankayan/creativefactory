"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const PAIRS = [
  { ord: "Hazır şablon", us: "Markaya özel sistem" },
  { ord: "Teslim et, unut", us: "Uzun vadeli ortaklık" },
  { ord: "Belirsiz sonuçlar", us: "Ölçülebilir KPI'lar" },
  { ord: "Geç dönüşler", us: "Günlük canlı iletişim" },
  { ord: "Yalnız güzel görünüm", us: "Güzel ve sonuç getiren" },
];

export default function Comparison() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setIdx(0);
        setProgress(0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      setProgress(p);
      setIdx(Math.min(Math.floor(p * PAIRS.length + 0.0001), PAIRS.length - 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const dotFillFor = (i: number) => {
    const segStart = i / PAIRS.length;
    const segEnd = (i + 1) / PAIRS.length;
    if (progress >= segEnd) return 1;
    if (progress < segStart) return 0;
    return (progress - segStart) / (segEnd - segStart);
  };

  const jumpTo = (i: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + (i / PAIRS.length) * total + (0.5 / PAIRS.length) * total;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section className="comp" id="fark">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">
              Fark · {String(idx + 1).padStart(2, "0")} / {String(PAIRS.length).padStart(2, "0")}
            </span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Aynı iş, iki farklı şekil.
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Aşağıya kaydır. Aynı saatler, farklı süreçlerle farklı sonuç üretir.
        </Reveal>
      </div>

      <div className="comp__pinwrap" ref={wrapperRef}>
        <div className="comp__pin">
          <div className="comp__stage">
            <div className="comp__side comp__side--ord">
              <span className="comp__sidelabel">Sıradan ajansta</span>
              <div className="comp__words">
                {PAIRS.map((p, i) => (
                  <span key={i} className={`comp__word ${i === idx ? "is-on" : ""}`}>
                    {p.ord}
                  </span>
                ))}
              </div>
            </div>
            <div className="comp__divider" aria-hidden="true">
              <span className="comp__arrow">→</span>
            </div>
            <div className="comp__side comp__side--us">
              <span className="comp__sidelabel">Creative Factory&apos;de</span>
              <div className="comp__words">
                {PAIRS.map((p, i) => (
                  <span key={i} className={`comp__word ${i === idx ? "is-on" : ""}`}>
                    {p.us}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="comp__dots" role="tablist" aria-label="Fark gezinmesi">
            {PAIRS.map((_, i) => (
              <button
                key={i}
                className={`comp__dot ${i === idx ? "is-on" : ""}`}
                onClick={() => jumpTo(i)}
                aria-label={`Fark ${i + 1}`}
                aria-selected={i === idx}
              >
                <span
                  className="comp__dot-fill"
                  style={{ transform: `scaleX(${dotFillFor(i)})` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
