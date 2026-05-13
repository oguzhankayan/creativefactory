"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Keşif",
    body: "Sektörü, rakipleri ve hedefi anlamak. 2 haftalık immersion — ekibinle iç içe.",
    dur: "2 hafta",
  },
  {
    n: "02",
    title: "Strateji",
    body: "Konumlandırma, mesajlar ve yol haritası. Karar verilen her şey tek bir kararname içinde.",
    dur: "1–2 hafta",
  },
  {
    n: "03",
    title: "Uygulama",
    body: "Tasarım, geliştirme ve içerik üretimi. Haftalık demo, anında geri bildirim.",
    dur: "4–8 hafta",
  },
  {
    n: "04",
    title: "Büyüme",
    body: "Lansman bir bitiş değil başlangıç. Aylık optimizasyon, ölçüm ve iyileştirme.",
    dur: "Sürekli",
  },
];

export default function Process() {
  return (
    <section className="proc" id="surec">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Süreç — 04 aşama</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Nasıl çalışıyoruz, kısaca.
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Belirsizlikten kaçınmak için süreci dört bölüme ayırıyoruz. Her aşama sonunda elinizde
          bir karar dosyası bırakıyoruz; geriye dönüşler net.
        </Reveal>
      </div>

      <ol className="proc__list">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 80} className="proc__row">
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
