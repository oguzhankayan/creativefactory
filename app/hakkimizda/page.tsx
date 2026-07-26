import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AboutLampHero from "@/components/AboutLampHero";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Creative Factory, Oğuzhan Kayan'ın tek kişilik bağımsız kreatif stüdyosu. On yılı aşkın ajans deneyimi, App Store'da altı canlı uygulama, tek elden teslim.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
    languages: {
      "tr-TR": `${SITE_URL}/hakkimizda`,
      "en-US": `${SITE_URL}/en/about`,
      "x-default": `${SITE_URL}/hakkimizda`,
    },
  },
  openGraph: {
    title: "Hakkımızda · Creative Factory",
    description: "İstanbul merkezli bağımsız kreatif stüdyo.",
    url: `${SITE_URL}/hakkimizda`,
    type: "website",
    locale: "tr_TR",
    siteName: "Creative Factory",
  },
};

const STATS = [
  { v: "10+", k: "Yıl" },
  { v: "06", k: "App Store'da canlı uygulama" },
  { v: "06", k: "Disiplin" },
  { v: "01", k: "Kişi · Silivri" },
];

const PRINCIPLES = [
  {
    n: "01",
    t: "Şablon yok.",
    d: "Her marka kendi sistemini hak eder. Hazır kalıplarla değil, sıfırdan kurguyla çalışıyorum.",
  },
  {
    n: "02",
    t: "Aracı yok.",
    d: "Brief'i alan, tasarlayan, kodu yazan ve reklamı kuran aynı kişi. Karar tek masada, dönüş aynı gün.",
  },
  {
    n: "03",
    t: "Sonuç odaklı.",
    d: "Sözleşmeyi imzaladığımız gün değil, marka büyüdüğü gün kazanmış olurum.",
  },
  {
    n: "04",
    t: "Uzun vadeli ortaklık.",
    d: "Tek seferlik lansman değil, sürdürülebilir ilişki. Lansmandan sonra da aynı numaradan bana ulaşıyorsun.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="about">
        <AboutLampHero />

        <section className="about__stats" aria-label="Sayılar">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 60} className="about__stat">
              <span className="about__stat-v">{s.v}</span>
              <span className="about__stat-k">{s.k}</span>
            </Reveal>
          ))}
        </section>

        <section className="about__story">
          <div className="about__story-left">
            <Reveal as="div">
              <span className="kicker">Hikâye</span>
            </Reveal>
            <Reveal as="h2" delay={80} className="about__story-h">
              On yılda <span className="ink">tek bir şey öğrendim.</span>
            </Reveal>
          </div>
          <Reveal delay={160} className="about__story-body">
            <p>
              Markaları büyüten şey tek bir kampanya, tek bir lansman ya da tek bir kreatif fikir
              değil. Tutarlı bir sistemdir: nasıl konuştuğun, nasıl göründüğün, neyi söz verdiğin
              ve neyi yerine getirdiğin. Bu sistemi kurmak için varım.
            </p>
            <p>
              Creative Factory, hizmetleri yan yana satan klasik bir ajans değil. Bir markanın
              karar dizisini baştan sona tek kişinin taşıdığı bir stüdyo. Marka kararıyla web
              kararı, içerik kararıyla reklam kararı aynı kafada birleşiyor. Brief'i anlatırken
              kimseye ikinci kez anlatmıyorsun, arada kaybolan bir şey olmuyor.
            </p>
            <p>
              Kendi ürünlerimi de aynı şekilde yapıyorum. App Store'da altı canlı uygulamam var:
              tasarımından koduna, paywall'ından mağaza sayfasına kadar hepsi bu masadan çıktı.
              Müşteri işinde verdiğim sözü kendi ürünümde deniyorum.
            </p>
          </Reveal>
        </section>

        <Reveal className="about__studio-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/generated/about/studio.jpg"
            alt="Creative Factory stüdyosundan bir görüntü"
            width={1408}
            height={896}
            loading="lazy"
            decoding="async"
            className="about__studio-img"
          />
        </Reveal>

        <section className="about__founder">
          <Reveal className="about__founder-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder.png"
              alt="Oğuzhan Kayan, Creative Factory founder"
              width={960}
              height={1200}
              loading="eager"
              decoding="async"
              className="about__founder-img"
            />
          </Reveal>
          <div className="about__founder-text">
            <Reveal as="div">
              <span className="kicker">Founder</span>
            </Reveal>
            <Reveal as="h2" delay={80} className="about__founder-name">
              Oğuzhan Kayan
            </Reveal>
            <Reveal as="p" delay={140} className="about__founder-bio">
              Kreatif direktörüm. On yılı aşkın süre reklam, PR, sosyal medya ve dijital
              pazarlama tarafında çalıştım; Eurosport'tan A101'e, Yemeksepeti'nden Mavi'ye
              kadar birçok markanın işinde ekip içindeydim. Creative Factory'yi bağımsız bir
              stüdyo olarak kurdum ve o işleri artık tek elden yapıyorum. İnandığım tek şey
              var: sözleşmeyle değil, sonuçla bağlıyım.
            </Reveal>
            <Reveal delay={200} className="about__founder-meta">
              <a href="https://www.instagram.com/creativefactory.tr" target="_blank" rel="noopener noreferrer">
                Instagram ↗︎
              </a>
              <a href="mailto:hi@creativefactory.tr">hi@creativefactory.tr</a>
            </Reveal>
          </div>
        </section>

        <section className="about__principles">
          <div className="about__principles-head">
            <Reveal as="div">
              <span className="kicker">İlkeler · 04 madde</span>
            </Reveal>
            <Reveal as="h2" delay={80} className="about__principles-h">
              Nasıl çalışıyorum, <span className="ink">neden farklı.</span>
            </Reveal>
          </div>
          <ol className="about__principles-list">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 80} className="about__principle">
                <span className="about__principle-n">{p.n}</span>
                <div>
                  <h3 className="about__principle-t">{p.t}</h3>
                  <p className="about__principle-d">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="about__ekip">
          <div className="about__ekip-head">
            <Reveal as="div">
              <span className="kicker">Kapsam</span>
            </Reveal>
            <Reveal as="h2" delay={80} className="about__ekip-h">
              Tek kişi. <span className="ink">Geniş kapsam.</span>
            </Reveal>
            <Reveal as="p" delay={160} className="about__ekip-body">
              Strateji, tasarım, geliştirme, içerik ve performans pazarlaması. Hepsi aynı
              masadan çıkıyor. Reklam filmi çekimi, karmaşık 3D ya da özel prodüksiyon
              gerektiğinde uzun süredir çalıştığım partnerlerle ilerliyorum ve bunu baştan
              söylüyorum.
            </Reveal>
          </div>
          <Reveal delay={220} className="about__disciplines">
            {[
              "Marka Stratejisi",
              "Tasarım Sistemi",
              "Web Geliştirme",
              "Mobil Geliştirme",
              "İçerik Üretimi",
              "Çekim & Kurgu",
              "Motion Grafik",
              "Performans Pazarlama",
              "Sosyal Medya",
              "Topluluk Yönetimi",
            ].map((d) => (
              <span key={d} className="about__discipline">{d}</span>
            ))}
          </Reveal>
        </section>

        <section className="about__cta-section">
          <Reveal className="sd__cta-card">
            <div>
              <span className="kicker">Bağlantı kuralım</span>
              <h2 className="sd__cta-h">Bu işi konuşalım.</h2>
              <p className="sd__cta-copy">30 dakikalık keşif görüşmesi. Hiçbir taahhüt yok.</p>
            </div>
            <Link href="/#iletisim" className="bigbtn">
              <span className="bigbtn__label">Konuşalım</span>
              <span className="bigbtn__arrow" aria-hidden="true">↗︎</span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
