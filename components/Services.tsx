"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";

export default function Services() {
  return (
    <section className="services" id="hizmetler">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Yetkinlikler · 06 alan</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Ne yapıyoruz, <span className="ink">ne yapmıyoruz.</span>
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          İyi yaptığımız altı şey var. Bir markanın büyümesi için gerekenleri tek çatı altında
          topluyoruz; taşeron yok.
        </Reveal>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={i * 60}
            as={Link}
            href={`/hizmetler/${s.slug}`}
            className="svc"
          >
            {s.image && (
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt=""
                  width={1024}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="svc__img"
                />
              </div>
            )}
            <span className="svc__n">{s.n}</span>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__body">{s.body}</p>
            <ul className="svc__tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className="svc__detail">İncele</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
