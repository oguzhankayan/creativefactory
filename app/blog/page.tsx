import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/posts";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Marka, web, sosyal medya, performans pazarlama ve mobil üzerine uzun soluklu okumalar. Türkiye'de marka inşa edenler için pratik playbook'lar.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Insights · Creative Factory",
    description:
      "Türkiye'de marka inşa edenler için uzun soluklu playbook'lar.",
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "tr_TR",
    siteName: "Creative Factory",
  },
};

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", DATE_FORMAT);
}

export default function BlogIndexPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Creative Factory Insights",
    url: `${SITE_URL}/blog`,
    inLanguage: "tr-TR",
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Nav />
      <main id="main" className="blog">
        <section className="blog__hero">
          <Reveal as="div">
            <span className="kicker">Insights · Playbook</span>
          </Reveal>
          <Reveal as="h1" delay={100} className="blog__h">
            Marka inşa edenler için <span className="ink">pratik okumalar.</span>
          </Reveal>
          <Reveal as="p" delay={200} className="blog__sub">
            Bütçe, karar çerçeveleri, sık yapılan hatalar. Trend yazıları
            yerine, masaya gelmesini istediğimiz uzun soluklu konular.
          </Reveal>
        </section>

        <section className="blog__list" aria-label="Yazılar">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} className="postcard-wrap">
              <Link href={`/blog/${p.slug}`} className="postcard">
                {p.heroImage && (
                  <div className="postcard__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.heroImage}
                      alt=""
                      width={1600}
                      height={896}
                      loading="lazy"
                      decoding="async"
                      className="postcard__img"
                    />
                  </div>
                )}
                <div className="postcard__body">
                  <div className="postcard__meta">
                    <span>{formatDate(p.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readMinutes} dk okuma</span>
                  </div>
                  <h2 className="postcard__title">{p.title}</h2>
                  <p className="postcard__excerpt">{p.excerpt}</p>
                  <ul className="postcard__tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="postcard__detail">Okumaya başla ↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>

        <section className="about__cta-section">
          <Reveal className="sd__cta-card">
            <div>
              <span className="kicker">Hazırsan</span>
              <h2 className="sd__cta-h">Bu işi konuşalım.</h2>
              <p className="sd__cta-copy">
                30 dakikalık keşif görüşmesi. Hiçbir taahhüt yok.
              </p>
            </div>
            <Link href="/#iletisim" className="bigbtn">
              <span className="bigbtn__label">Konuşalım</span>
              <span className="bigbtn__arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
