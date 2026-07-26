import type { Metadata } from "next";
import NavEn from "@/components/NavEn";
import FooterEn from "@/components/FooterEn";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Creative Factory, Istanbul-based independent creative studio. 30-minute discovery call, zero commitment.",
  alternates: {
    canonical: `${SITE_URL}/en/contact`,
    languages: {
      "tr-TR": `${SITE_URL}/#iletisim`,
      "en-US": `${SITE_URL}/en/contact`,
      "x-default": `${SITE_URL}/#iletisim`,
    },
  },
  openGraph: {
    title: "Contact · Creative Factory",
    description: "Start a conversation. 30-minute discovery call.",
    url: `${SITE_URL}/en/contact`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: "Creative Factory",
  },
};

export default function EnContactPage() {
  return (
    <>
      <NavEn />
      <main id="main" className="en-contact">
        <section className="en-page-hero">
          <div className="en-page-hero__inner">
            <span className="kicker">Contact</span>
            <h1 className="en-page-hero__h">
              Let&apos;s start <span className="ink">a conversation.</span>
            </h1>
            <p className="en-page-hero__sub">
              Tell me about your project. I reply within one business day. The first call
              is 30 minutes, zero commitment, just a clear read on whether we&apos;re a fit.
            </p>
          </div>
        </section>

        <section className="en-contact__grid">
          <div className="en-contact__col">
            <span className="kicker">Email</span>
            <a className="en-contact__big" href="mailto:hi@creativefactory.tr">
              hi@creativefactory.tr
            </a>
            <p className="en-contact__note">
              For new projects, partnerships, and press. Include a one-paragraph brief,
              budget range, and timeline if you have one.
            </p>
          </div>

          <div className="en-contact__col">
            <span className="kicker">Studio</span>
            <p className="en-contact__big en-contact__big--text">
              Silivri, Istanbul
              <br />
              Türkiye
            </p>
            <p className="en-contact__note">
              Visits by appointment. Most discovery calls run over video, that&apos;s the
              fastest way to start.
            </p>
          </div>

          <div className="en-contact__col">
            <span className="kicker">Direct</span>
            <a
              className="en-contact__big"
              href="https://wa.me/905555555555?text=Hello%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
            <p className="en-contact__note">
              Quickest channel during business hours (10:00-19:00 GMT+3, Mon-Fri).
            </p>
          </div>

          <div className="en-contact__col">
            <span className="kicker">Follow</span>
            <a
              className="en-contact__big"
              href="https://www.instagram.com/creativefactory.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <p className="en-contact__note">
              Recent work, behind-the-scenes, and short reads from the studio.
            </p>
          </div>
        </section>

        <section className="about__cta-section">
          <div className="sd__cta-card">
            <div>
              <span className="kicker">What happens next</span>
              <h2 className="sd__cta-h">A clear path, not a maze.</h2>
              <p className="sd__cta-copy">
                Reply within one business day → 30-minute call → a written scope and
                quote within a week.
              </p>
            </div>
            <a href="mailto:hi@creativefactory.tr" className="bigbtn">
              <span className="bigbtn__label">Write to me</span>
              <span className="bigbtn__arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  );
}
