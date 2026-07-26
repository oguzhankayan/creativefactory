import type { Metadata } from "next";
import Link from "next/link";
import NavEn from "@/components/NavEn";
import FooterEn from "@/components/FooterEn";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creative Factory is Oğuzhan Kayan's one-person independent studio in Istanbul. A decade of agency work, six apps live on the App Store, delivered end to end.",
  alternates: {
    canonical: `${SITE_URL}/en/about`,
    languages: {
      "tr-TR": `${SITE_URL}/hakkimizda`,
      "en-US": `${SITE_URL}/en/about`,
      "x-default": `${SITE_URL}/hakkimizda`,
    },
  },
  openGraph: {
    title: "About · Creative Factory",
    description: "Istanbul-based independent creative studio.",
    url: `${SITE_URL}/en/about`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: "Creative Factory",
  },
};

const STATS = [
  { v: "10+", k: "Years" },
  { v: "06", k: "Apps live on the App Store" },
  { v: "06", k: "Disciplines" },
  { v: "01", k: "Person · Silivri" },
];

const PRINCIPLES = [
  {
    n: "01",
    t: "No templates.",
    d: "Every brand deserves its own system. I work from scratch, not from pre-made kits.",
  },
  {
    n: "02",
    t: "No middle layer.",
    d: "The person who takes the brief designs it, writes the code and runs the ads. One table, same-day answers.",
  },
  {
    n: "03",
    t: "Outcome-focused.",
    d: "I don't win when the contract is signed. I win when the brand grows.",
  },
  {
    n: "04",
    t: "Long-term partnership.",
    d: "Not a single launch, a lasting relationship. After launch you still reach me on the same number.",
  },
];

const DISCIPLINES = [
  "Brand Strategy",
  "Design System",
  "Web Development",
  "Mobile Development",
  "Content Production",
  "Film & Editing",
  "Motion Graphics",
  "Performance Marketing",
  "Social Media",
  "Community Management",
];

export default function EnAboutPage() {
  return (
    <>
      <NavEn />
      <main id="main" className="about">
        <section className="en-page-hero">
          <div className="en-page-hero__inner">
            <span className="kicker">About · Creative Factory</span>
            <h1 className="en-page-hero__h">
              A one-person <span className="ink">creative studio.</span>
            </h1>
            <p className="en-page-hero__sub">
              I&apos;m Oğuzhan Kayan, a creative director with more than ten years in advertising,
              PR and digital marketing. I work out of Silivri, Istanbul: brand identity, web,
              social and mobile, done by hand.
            </p>
          </div>
        </section>

        <section className="about__stats" aria-label="Numbers">
          {STATS.map((s) => (
            <div key={s.k} className="about__stat">
              <span className="about__stat-v">{s.v}</span>
              <span className="about__stat-k">{s.k}</span>
            </div>
          ))}
        </section>

        <section className="about__story">
          <div className="about__story-left">
            <span className="kicker">Story</span>
            <h2 className="about__story-h">
              Ten years taught me <span className="ink">one thing.</span>
            </h2>
          </div>
          <div className="about__story-body">
            <p>
              What grows a brand is never a single campaign, a single launch, or a single
              creative idea. It&apos;s a consistent system: how you speak, how you look, what
              you promise, and what you deliver. I exist to build that system.
            </p>
            <p>
              Creative Factory isn&apos;t a classic agency selling services side by side. It&apos;s a
              studio where one person carries a brand&apos;s whole decision sequence. The web
              decision meets the brand decision in the same head. You never explain the brief
              twice, and nothing gets lost in the handoff.
            </p>
          </div>
        </section>

        <section className="about__studio-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/generated/about/studio.jpg"
            alt="Inside the Creative Factory studio"
            width={1408}
            height={896}
            loading="lazy"
            decoding="async"
            className="about__studio-img"
          />
        </section>

        <section className="about__founder">
          <div className="about__founder-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder.png"
              alt="Oğuzhan Kayan, Creative Factory founder"
              width={960}
              height={1200}
              loading="lazy"
              decoding="async"
              className="about__founder-img"
            />
          </div>
          <div className="about__founder-text">
            <span className="kicker">Founder</span>
            <h2 className="about__founder-name">Oğuzhan Kayan</h2>
            <p className="about__founder-bio">
              I founded Creative Factory as an independent studio. For over a decade I&apos;ve
              been working with brands that Türkiye loves, across strategy, social media,
              and mobile development. One thing I believe: we&apos;re bound by outcomes, not
              contracts.
            </p>
            <div className="about__founder-meta">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:hi@creativefactory.tr">hi@creativefactory.tr</a>
            </div>
          </div>
        </section>

        <section className="about__principles">
          <div className="about__principles-head">
            <span className="kicker">Principles · 04 rules</span>
            <h2 className="about__principles-h">
              How I work, <span className="ink">why it&apos;s different.</span>
            </h2>
          </div>
          <ol className="about__principles-list">
            {PRINCIPLES.map((p) => (
              <li key={p.n} className="about__principle">
                <span className="about__principle-n">{p.n}</span>
                <div>
                  <h3 className="about__principle-t">{p.t}</h3>
                  <p className="about__principle-d">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about__ekip">
          <div className="about__ekip-head">
            <span className="kicker">Scope</span>
            <h2 className="about__ekip-h">
              One person. <span className="ink">Wide scope.</span>
            </h2>
            <p className="about__ekip-body">
              Strategy, design, development, content and performance marketing all come off the
              same desk. For film shoots, heavy 3D or specialised production I work with
              long-standing partners, and I say so upfront.
            </p>
          </div>
          <div className="about__disciplines">
            {DISCIPLINES.map((d) => (
              <span key={d} className="about__discipline">{d}</span>
            ))}
          </div>
        </section>

        <section className="about__cta-section">
          <div className="sd__cta-card">
            <div>
              <span className="kicker">Get in touch</span>
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
