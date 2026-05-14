"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Keşif",
    body: "Sektörü, rakipleri ve hedefi anlıyoruz. İlk 2 hafta ekibinle iç içe.",
    dur: "2 hafta",
    img: "/generated/process/01-kesif.jpg",
  },
  {
    n: "02",
    title: "Strateji",
    body: "Konumlandırma, mesajlar ve yol haritası. Verilen her karar tek bir dosyada.",
    dur: "1–2 hafta",
    img: "/generated/process/02-strateji.jpg",
  },
  {
    n: "03",
    title: "Uygulama",
    body: "Tasarım, geliştirme ve içerik üretimi. Haftalık demo, anında geri bildirim.",
    dur: "4–8 hafta",
    img: "/generated/process/03-uygulama.jpg",
  },
  {
    n: "04",
    title: "Büyüme",
    body: "Lansman bitiş değil, başlangıç. Aylık ölçüm, optimizasyon ve iyileştirme.",
    dur: "Sürekli",
    img: "/generated/process/04-buyume.jpg",
  },
];

export default function Process() {
  return (
    <section className="proc" id="surec">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Süreç · 04 aşama</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Nasıl çalışıyoruz, kısaca.
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Belirsizliği azaltmak için süreci dörde ayırıyoruz. Her aşamanın sonunda elinde bir karar
          dosyası kalıyor; gerekirse hangi karara döneceğin net.
        </Reveal>
      </div>

      <ol className="proc__list">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 80} className="proc__row">
            <span className="proc__media" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                className="proc__img"
              />
            </span>
            <span className="proc__n">{s.n}</span>
            <div className="proc__body">
              <h3 className="proc__title">{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <span className="proc__dur">{s.dur}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
