"use client";

import Reveal from "./Reveal";

const CLIENTS = [
  "Qualiko",
  "Iconica",
  "Köpüklü",
  "SCOPS",
  "Akasya",
  "Müzedenal",
  "Eurosport",
  "Timberwolves",
  "Mavi",
  "Boyner",
  "Trendyol",
  "Yapı Kredi",
];

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__head">
        <Reveal as="div">
          <span className="kicker">Birlikte çalıştığımız markalar</span>
        </Reveal>
      </div>
      <div className="clients__grid">
        {CLIENTS.map((c, i) => (
          <Reveal key={c} delay={i * 35} className="clients__cell">
            <span className="clients__name">{c}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
