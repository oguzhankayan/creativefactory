"use client";

import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";

type Props = { onOpen: (slug: string) => void };

export default function Services({ onOpen }: Props) {
  return (
    <section className="services" id="hizmetler">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Yetkinlikler — 06 disiplin</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Ne yapıyoruz, <span className="ink">ne yapmıyoruz.</span>
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Her şeyi yapmıyoruz; iyi yaptığımız altı şey var. Bir markanın büyümesi için gereken her
          şeyi tek çatı altında topluyoruz — taşeron yok.
        </Reveal>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={i * 60}
            as="a"
            href={`#/hizmetler/${s.slug}`}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              onOpen(s.slug);
            }}
            className="svc"
          >
            <span className="svc__n">{s.n}</span>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__body">{s.body}</p>
            <ul className="svc__tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className="svc__detail">Detay</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
