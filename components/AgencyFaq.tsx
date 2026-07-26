"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "İşi kendi portföyünüzde paylaşır mısınız?",
    a: "Hayır. Ajans işleri portföyüme girmez, sosyal medyada çıkmaz. Bu sayfada Brand Story Agency'nin adı geçiyor çünkü kendileri izin verdi ve referans yazısını yazdılar. Onun dışında hiçbir ajans işi görünmez.",
  },
  {
    q: "Gizlilik sözleşmesi imzalar mısınız?",
    a: "Evet. Sizin şablonunuz varsa onu imzalarım, yoksa hazır bir metinle ilerleriz. Müşteriye doğrudan yaklaşmama taahhüdü de aynı sözleşmeye girer.",
  },
  {
    q: "Fiyatlama nasıl?",
    a: "İki şekilde: proje başına sabit bedel veya günlük tarife. Kapsamı net işlerde sabit bedel daha rahat, keşif gerektiren ya da uzayabilecek işlerde günlük tarife. Hangisinin işinize uyduğunu ilk görüşmede birlikte seçelim.",
  },
  {
    q: "Ne kadar sürede dönüş alırım?",
    a: "Müsaitlik sorusuna aynı gün. İş alınırsa takvim ilk 24 saatte netleşir. Yapamayacağım işe evet demem; takvim doluysa tarihi baştan söylerim.",
  },
  {
    q: "Aciliyet durumunda devreye girebilir misiniz?",
    a: "Bazen. Takvim müsaitse evet, değilse hayır derim. Acil işe evet deyip başka bir müşterinin işini geciktirme oyununu oynamıyorum.",
  },
  {
    q: "Sizin müşterinizle bizim müşterimiz çakışırsa?",
    a: "Baştan söylerim ve işi almam. Aynı sektörde rakip iki markanın işini aynı dönemde yürütmüyorum.",
  },
  {
    q: "Faturayı kim keser?",
    a: "Ben size keserim, siz müşterinize. Aradaki ilişki tamamen sizinle benim aramda kalır.",
  },
];

export default function AgencyFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="ag__faq">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Sık sorulanlar</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Akla ilk <span className="ink">gelenler.</span>
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Aklınızdaki soru burada yoksa direkt sorun. Müsaitlik sorusu bile başlamak için iyi bir
          bahane.
        </Reveal>
      </div>

      <div className="ag__faq-list">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 40} className={`faq ${open === i ? "faq--open" : ""}`}>
            <button
              className="faq__head"
              onClick={() => setOpen((o) => (o === i ? null : i))}
              aria-expanded={open === i}
            >
              <span className="faq__q">{f.q}</span>
              <span className="faq__plus" aria-hidden="true">
                <span className="faq__plus-h" />
                <span className="faq__plus-v" />
              </span>
            </button>
            <div className="faq__panel" hidden={open !== i}>
              <p>{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
