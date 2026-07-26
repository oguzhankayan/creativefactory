import Reveal from "./Reveal";
import { PRODUCTS } from "@/lib/products";

export default function Products() {
  return (
    <section className="prod" id="urunler">
      <div className="section-head section-head--split">
        <div>
          <Reveal as="div">
            <span className="kicker">Kendi ürünlerim · 01 SaaS + 06 uygulama</span>
          </Reveal>
          <Reveal as="h2" delay={100} className="section-h">
            Anlatmıyorum, <span className="ink">gösteriyorum.</span>
          </Reveal>
        </div>
        <Reveal as="p" delay={180} className="section-sub section-sub--right">
          Altı uygulama App Store&apos;da, bir SaaS kendi sitesinde. Fikrinden tasarımına,
          kodundan mağaza sayfasına kadar hepsini tek başıma çıkardım. Müşteri işini de aynı
          masa yapıyor.
        </Reveal>
      </div>

      <div className="prod__grid">
        {PRODUCTS.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={i * 60}
            as="a"
            href={p.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="prod__card"
          >
            <div className="prod__head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.icon}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                className="prod__icon"
              />
              <span className="prod__cat">{p.category}</span>
            </div>
            <h3 className="prod__title">{p.name}</h3>
            <p className="prod__body">{p.body}</p>
            <span className="prod__link">{p.linkLabel}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
