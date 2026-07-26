import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { WORKS } from "@/lib/works";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "İşler",
  description:
    "Creative Factory'nin müşteri işleri: Etra Ambulans, Maşalacı Sürücü Kursu ve Anaokulu, Brand Story Agency, Fratelli Cheese. Kapsam, karar ve sonuç.",
  keywords: [
    "kreatif ajans işleri",
    "web tasarım örnekleri",
    "marka kimliği örnekleri",
    "ajans referansları",
    "beyaz etiket kreatif",
  ],
  alternates: { canonical: `${SITE_URL}/isler` },
  openGraph: {
    title: "İşler · Creative Factory",
    description: "İsimli müşteriler, izinli işler, uydurulmamış sonuçlar.",
    url: `${SITE_URL}/isler`,
    type: "website",
    locale: "tr_TR",
    siteName: "Creative Factory",
  },
};

export default function WorksPage() {
  return (
    <>
      <Nav />
      <main id="main" className="wp">
        <section className="wp__hero">
          <Reveal as="div">
            <span className="kicker">İşler · {WORKS.length} müşteri</span>
          </Reveal>
          <Reveal as="h1" delay={100} className="wp__title">
            İsimli işler,
            <br />
            <span style={{ color: "var(--accent)" }}>isimli insanlar.</span>
          </Reveal>
          <Reveal as="p" delay={200} className="wp__lede">
            Müşteri adı vermeden iş örneği paylaşmıyorum. Anonim vaka çalışması, &ldquo;bir
            perakende markası&rdquo; diye başlayan hikâye, rakamı doğrulanamayan başarı grafiği
            yok. Aşağıdakilerin hepsi izinli.
          </Reveal>
        </section>

        {WORKS.map((w, i) => (
          <section className="wcase" id={w.slug} key={w.slug}>
            <div className="wcase__head">
              <Reveal as="div">
                <span className="kicker">
                  {String(i + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")} ·{" "}
                  {w.sector}
                </span>
              </Reveal>
              <Reveal as="h2" delay={80} className="wcase__client">
                {w.client}
              </Reveal>
              {w.liveUrl && (
                <Reveal delay={120} className="wcase__live">
                  <a href={w.liveUrl} target="_blank" rel="noopener noreferrer">
                    {w.liveLabel ?? w.liveUrl} ↗
                  </a>
                </Reveal>
              )}
            </div>

            <div className="wcase__body">
              <Reveal delay={140} className="wcase__scope">
                <span className="dim">Kapsam</span>
                <ul>
                  {w.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200} className="wcase__text">
                {w.body.map((p, n) => (
                  <p key={n}>{p}</p>
                ))}

                {w.quote && (
                  <figure className="wcase__quote">
                    <blockquote>{w.quote.text}</blockquote>
                    <figcaption>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={w.quote.avatar}
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                      />
                      <span>
                        <strong>{w.quote.author}</strong>
                        <span className="dim">{w.quote.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                )}
              </Reveal>
            </div>
          </section>
        ))}

        <section className="wp__cta">
          <Reveal as="div">
            <span className="kicker">Sıradaki</span>
          </Reveal>
          <Reveal as="h2" delay={80} className="wp__cta-h">
            Bu işi konuşalım.
          </Reveal>
          <Reveal as="p" delay={140} className="wp__cta-p">
            30 dakikalık keşif görüşmesi. Hiçbir taahhüt yok.
          </Reveal>
          <Reveal delay={200}>
            <Link href="/#iletisim" className="bigbtn">
              <span className="bigbtn__label">Konuşalım</span>
              <span className="bigbtn__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
