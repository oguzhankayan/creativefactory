import type { Metadata } from "next";
import Link from "next/link";
import NavEn from "@/components/NavEn";
import FooterEn from "@/components/FooterEn";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://creativefactory.tr";

const SERVICE_EN: Record<string, { title: string; body: string; tags: string[] }> = {
  "web-tasarim-gelistirme": {
    title: "Web Design & Development",
    body: "Fast, scalable, brand-specific sites. Headless CMS, e-commerce, micro-interactions. End-to-end.",
    tags: ["Next.js", "Webflow", "Shopify"],
  },
  "marka-kimligi": {
    title: "Brand Identity",
    body: "Not a logo, a brand system. Typography, voice, applications, and visual language built to last.",
    tags: ["Logotype", "Voice", "Brand book"],
  },
  "sosyal-medya-icerik": {
    title: "Social & Content",
    body: "Weekly planning, shooting, editing, community. One consistent voice, under one roof.",
    tags: ["Editorial", "Reels", "Community"],
  },
  "dijital-reklam": {
    title: "Digital Advertising",
    body: "Data-driven campaigns on Meta, Google, and TikTok. Measured on CAC and LTV. No vanity metrics.",
    tags: ["Paid social", "SEM", "Attribution"],
  },
  "motion-icerik": {
    title: "Motion & Production",
    body: "Photo, video, and motion graphics. Bringing the brand story to the screen, platform-native.",
    tags: ["Ad film", "3D / motion", "Stop motion"],
  },
  "mobil-uygulama-gelistirme": {
    title: "Mobile App Development",
    body: "Native and cross-platform iOS / Android apps. From design to App Store, end-to-end.",
    tags: ["iOS", "Android", "React Native"],
  },
};

export const metadata: Metadata = {
  title: { absolute: "Creative Factory · Independent brand studio · Istanbul" },
  description:
    "A one-person independent creative studio in Istanbul. Brand identity, web, content, performance marketing and mobile, delivered end to end. Six apps live on the App Store.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      "tr-TR": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Creative Factory · Independent brand studio",
    description: "Brand, web, content and performance from one person. No account layer, no handoffs.",
    url: `${SITE_URL}/en`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: "Creative Factory",
  },
};

export default function EnHome() {
  return (
    <>
      <NavEn />
      <main id="main">
        <section className="en-hero">
          <div className="en-hero__inner">
            <span className="kicker">Independent studio · Istanbul</span>
            <h1 className="en-hero__h">
              I don&apos;t just design.
              <br />
              <span className="ink">I ship it too.</span>
            </h1>
            <p className="en-hero__sub">
              Brand identity, web, content, advertising, and mobile. No account manager in
              between: you talk to the person doing the work.
            </p>
            <div className="en-hero__cta">
              <Link href="/en/contact" className="bigbtn">
                <span className="bigbtn__label">Start a project</span>
                <span className="bigbtn__arrow" aria-hidden="true">↗</span>
              </Link>
              <a href="#services" className="ghostlink">See services</a>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-head section-head--split">
            <div>
              <span className="kicker">Capabilities · 06 areas</span>
              <h2 className="section-h">
                What I do, <span className="ink">what I don&apos;t.</span>
              </h2>
            </div>
            <p className="section-sub section-sub--right">
              Six things I do well. Everything a brand needs to grow, from one desk. The
              person who takes the brief is the person who ships it.
            </p>
          </div>

          <div className="services__grid">
            {SERVICES.map((s) => {
              const en = SERVICE_EN[s.slug];
              if (!en) return null;
              return (
                <div key={s.slug} className="svc svc--static">
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
                  <h3 className="svc__title">{en.title}</h3>
                  <p className="svc__body">{en.body}</p>
                  <ul className="svc__tags">
                    {en.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="en-cta-section">
          <div className="sd__cta-card">
            <div>
              <span className="kicker">Ready?</span>
              <h2 className="sd__cta-h">Let&apos;s talk.</h2>
              <p className="sd__cta-copy">30-minute discovery call. Zero commitment.</p>
            </div>
            <Link href="/en/contact" className="bigbtn">
              <span className="bigbtn__label">Let&apos;s talk</span>
              <span className="bigbtn__arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  );
}
