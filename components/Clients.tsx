"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

type GlowColor = "blue" | "purple" | "green" | "red" | "orange";

const CLIENTS: { name: string; glow: GlowColor }[] = [
  { name: "Eurosport Türkiye", glow: "blue" },
  { name: "Minnesota Timberwolves", glow: "green" },
  { name: "A101", glow: "red" },
  { name: "Avis Rent A Car", glow: "red" },
  { name: "Mavi Jeans", glow: "blue" },
  { name: "İstanbul Büyükşehir Belediyesi", glow: "green" },
  { name: "Bethesda", glow: "orange" },
  { name: "Yemeksepeti", glow: "red" },
  { name: "Galatasaray", glow: "orange" },
  { name: "Misli", glow: "purple" },
  { name: "Akasya Token", glow: "purple" },
  { name: "Köpüklü", glow: "blue" },
  { name: "SCOPS", glow: "orange" },
  { name: "Bilyoner", glow: "green" },
  { name: "Semical Biosurgery", glow: "green" },
];

const HUE: Record<GlowColor, number> = {
  blue: 220,
  purple: 280,
  green: 140,
  red: 0,
  orange: 30,
};

export default function Clients() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cells = Array.from(
      grid.querySelectorAll<HTMLElement>(".clients-edit__cell")
    );
    let rects: DOMRect[] = cells.map((c) => c.getBoundingClientRect());
    let rafId = 0;
    let lastX = 0;
    let lastY = 0;
    let pending = false;

    const refreshRects = () => {
      rects = cells.map((c) => c.getBoundingClientRect());
    };

    const writeVars = () => {
      pending = false;
      for (let i = 0; i < cells.length; i++) {
        const r = rects[i];
        cells[i].style.setProperty("--x", `${lastX - r.left}px`);
        cells[i].style.setProperty("--y", `${lastY - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(writeVars);
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", refreshRects, { passive: true });
    window.addEventListener("resize", refreshRects);
    return () => {
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", refreshRects);
      window.removeEventListener("resize", refreshRects);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="clients-edit">
      <div className="clients-edit__head">
        <Reveal as="div">
          <span className="kicker">Kariyerimde çalıştığım markalar</span>
        </Reveal>
        <Reveal as="p" delay={80} className="clients-edit__note">
          On yılı aşkın sürede, ajans ve kurum tarafında bu markaların işlerinde çalıştım.
          Büyük bir kısmı Creative Factory öncesine ait; hepsi ekip içinde üretilmiş işler.
        </Reveal>
      </div>
      <div className="clients-edit__grid" ref={gridRef}>
        {CLIENTS.map((c, i) => (
          <Reveal
            key={c.name}
            className="clients-edit__cell"
            delay={i * 35}
            style={{ ["--hue" as string]: HUE[c.glow] }}
          >
            <span className="clients-edit__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="clients-edit__name">{c.name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
