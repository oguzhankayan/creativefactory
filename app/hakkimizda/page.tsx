import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AboutLampHero from "@/components/AboutLampHero";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Hakkımızda · Creative Factory",
  description:
    "İstanbul merkezli bağımsız kreatif stüdyo Creative Factory. On yıllık deneyim, multidisipliner ekip, sonuç odaklı çalışma.",
  alternates: { canonical: `${SITE_URL}/hakkimizda` },
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
  { v: "80+", k: "Marka" },
  { v: "06", k: "Disiplin" },
  { v: "01", k: "Stüdyo · Silivri" },
];

const PRINCIPLES = [
  {
    n: "01",
    t: "Şablon yok.",
    d: "Her marka kendi sistemini hak eder. Hazır kalıplarla değil, sıfırdan kurguyla çalışıyoruz.",
  },
  {
    n: "02",
    t: "Taşeron yok.",
    d: "Tasarım, geliştirme, içerik, reklam, prodüksiyon. Hepsi iç ekipte; kararlar tek masada.",
  },
  {
    n: "03",
    t: "Sonuç odaklı.",
    d: "Sözleşme imzaladığımız gün değil, marka büyüdüğü gün biz de büyürüz.",
  },
  {
    n: "04",
    t: "Uzun vadeli ortaklık.",
    d: "Tek seferlik lansman değil, sürdürülebilir ilişki. Bazı markalarla 8+ yıldır birlikteyiz.",
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
              On yılda <span className="ink">tek bir şey öğrendik.</span>
            </Reveal>
          </div>
          <Reveal delay={160} className="about__story-body">
            <p>
              Markaları büyüten şey tek bir kampanya, tek bir lansman ya da tek bir kreatif fikir
              değil. Tutarlı bir sistemdir: nasıl konuştuğun, nasıl göründüğün, neyi söz verdiğin
              ve neyi yerine getirdiğin. Biz bu sistemi kurmak için varız.
            </p>
            <p>
              Creative Factory, hizmetleri yan yana satan klasik bir ajans değil. Bir markanın
              karar dizisini tek elden örgütleyen bir stüdyo. Web ekibi marka ekibinden, performans
              ekibi içerik ekibinden ayrı değil. Aynı masada oturuyor, aynı dosyayı okuyor, aynı
              KPI'a bakıyor.
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
              Creative Factory'yi bağımsız bir stüdyo olarak kurdum. On yılı aşkın süredir
              Türkiye'nin sevdiği markalarla; markanın stratejisinden uygulamasına, sosyal medya
              yönetiminden mobil uygulama geliştirmeye kadar her aşamasında birlikte çalışıyoruz.
              İnandığım tek şey var: sözleşmeyle değil, sonuçla bağlıyız.
            </Reveal>
            <Reveal delay={200} className="about__founder-meta">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
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
              Nasıl çalıştığımız, <span className="ink">neden farklı olduğumuz.</span>
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
              <span className="kicker">Ekip</span>
            </Reveal>
            <Reveal as="h2" delay={80} className="about__ekip-h">
              Multidisipliner. <span className="ink">Tek çatı altında.</span>
            </Reveal>
            <Reveal as="p" delay={160} className="about__ekip-body">
              Strateji, tasarım, geliştirme, içerik, prodüksiyon ve performans pazarlama
              kadrolarının tamamı iç ekipte. Karmaşık 3D ya da özel medya için partner ağımızdan
              destek; bunun dışında her şey burada.
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
              <span className="bigbtn__arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
