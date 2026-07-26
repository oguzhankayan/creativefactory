import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AgencyFaq from "@/components/AgencyFaq";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Ajanslar için beyaz etiket üretim",
  description:
    "Reklam ve dijital ajanslar için beyaz etiket kreatif üretim ve kapasite desteği. Web, marka kimliği, motion, sosyal medya ve mobil. İş sizin markanız altında çıkar.",
  keywords: [
    "beyaz etiket ajans",
    "white label kreatif üretim",
    "ajanslara freelance destek",
    "ajans kapasite desteği",
    "taşeron kreatif direktör",
    "white label web tasarım",
    "ajans için motion üretimi",
  ],
  alternates: { canonical: `${SITE_URL}/ajanslar-icin` },
  openGraph: {
    title: "Ajanslar için beyaz etiket üretim · Creative Factory",
    description:
      "Kapasite satıyorum, müşteri değil. İş sizin markanız altında çıkar, adım görünmez.",
    url: `${SITE_URL}/ajanslar-icin`,
    type: "website",
    locale: "tr_TR",
    siteName: "Creative Factory",
  },
};

const OFFERS = [
  {
    n: "01",
    t: "Web build",
    d: "Tasarımı sizde ise sadece geliştirme, değilse ikisi birden. Next.js, Webflow, Shopify. Teslim repo veya canlı yayın, tercihinize göre.",
  },
  {
    n: "02",
    t: "Marka kimliği",
    d: "Logotype, tipografi sistemi, renk, uygulama örnekleri, brand book. Sunum dosyası sizin şablonunuzda çıkabilir.",
  },
  {
    n: "03",
    t: "Motion ve kurgu",
    d: "Reklam filmi kurgusu, 2D motion, sosyal formatlara uyarlama. Çekilmiş materyaliniz varsa sadece post-prodüksiyon.",
  },
  {
    n: "04",
    t: "Sosyal medya üretimi",
    d: "Aylık içerik üretimi ve tasarım. Strateji sizde kalabilir, üretim yükünü ben alırım.",
  },
  {
    n: "05",
    t: "Mobil uygulama",
    d: "iOS ve Android. App Store'da yayında altı uygulamam var, süreci ve reddedilme sebeplerini biliyorum.",
  },
  {
    n: "06",
    t: "Kreatif direksiyon",
    d: "Pitch aşamasında konsept ve yaratıcı yön. Kazanılırsa üretime de girerim, kazanılmazsa hesap kapanır.",
  },
];

const RULES = [
  {
    n: "01",
    t: "Müşterinizi almam.",
    d: "Sizin üzerinden gelen hiçbir markayla doğrudan iş konuşmam. Bu yazılı bir taahhüt, isterseniz sözleşmeye girer.",
  },
  {
    n: "02",
    t: "Adım görünmez.",
    d: "İş sizin markanız altında çıkar. Portföyümde paylaşmam, sosyal medyada göstermem, izin vermediğiniz sürece söylemem.",
  },
  {
    n: "03",
    t: "Arada katman yok.",
    d: "Brief'i alan, işi yapan ve teslim eden aynı kişi. Sizin tarafınızda bir müşteri temsilcisiyle uğraşmak yok.",
  },
  {
    n: "04",
    t: "Kapasitemi baştan söylerim.",
    d: "Alamayacağım işe evet demem. Takvim doluysa tarihi söylerim, sizi bekletip son gün bırakmam.",
  },
];

export default function AgencyPage() {
  return (
    <>
      <Nav />
      <main id="main" className="ag">
        <section className="ag__hero">
          <Reveal as="div">
            <span className="kicker">Ajanslar için</span>
          </Reveal>
          <Reveal as="h1" delay={100} className="ag__title">
            Kapasite satıyorum,
            <br />
            <span style={{ color: "var(--accent)" }}>müşteri değil.</span>
          </Reveal>
          <Reveal as="p" delay={200} className="ag__lede">
            İşiniz taştığında, ekipte o işi yapacak kişi olmadığında ya da bir pitch'e yetişmeniz
            gerektiğinde devreye giriyorum. Üretim benden çıkar, müşteri ilişkisi sizde kalır. On
            yılı aşkın süre ajans tarafında çalıştım, nasıl yürüdüğünü biliyorum.
          </Reveal>
          <Reveal delay={280} className="ag__cta">
            <Link href="/#iletisim" className="bigbtn">
              <span className="bigbtn__label">Müsaitlik sor</span>
              <span className="bigbtn__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <a
              href="https://wa.me/905396004394?text=Merhaba%2C%20ajans%20i%C3%A7in%20beyaz%20etiket%20%C3%BCretim%20konu%C5%9Fmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="ghostlink"
            >
              WhatsApp&apos;tan yaz
            </a>
          </Reveal>
        </section>

        <section className="ag__rules">
          <div className="section-head section-head--split">
            <div>
              <Reveal as="div">
                <span className="kicker">Çalışma kuralları · 04 madde</span>
              </Reveal>
              <Reveal as="h2" delay={100} className="section-h">
                Bir ajansın <span className="ink">bilmek istediği şeyler.</span>
              </Reveal>
            </div>
            <Reveal as="p" delay={180} className="section-sub section-sub--right">
              Taşeronla çalışmanın gerçek riski gecikme değil, müşteriyi kaybetmek. Dördü de
              baştan yazılı.
            </Reveal>
          </div>
          <ol className="ag__rules-list">
            {RULES.map((r, i) => (
              <Reveal as="li" key={r.n} delay={i * 80} className="ag__rule">
                <span className="ag__rule-n">{r.n}</span>
                <div>
                  <h3 className="ag__rule-t">{r.t}</h3>
                  <p className="ag__rule-d">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="ag__offers">
          <div className="section-head section-head--split">
            <div>
              <Reveal as="div">
                <span className="kicker">Ne alıyorum · 06 kalem</span>
              </Reveal>
              <Reveal as="h2" delay={100} className="section-h">
                Devredebileceğiniz <span className="ink">işler.</span>
              </Reveal>
            </div>
            <Reveal as="p" delay={180} className="section-sub section-sub--right">
              Tek kalem de olur, projenin tamamı da. Strateji sizde kalıp sadece üretimi
              devretmeniz en sık kurduğumuz düzen.
            </Reveal>
          </div>
          <div className="ag__grid">
            {OFFERS.map((o, i) => (
              <Reveal key={o.n} delay={i * 50} className="ag__offer">
                <span className="ag__offer-n">{o.n}</span>
                <h3 className="ag__offer-t">{o.t}</h3>
                <p className="ag__offer-d">{o.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="ag__proof">
          <Reveal as="div">
            <span className="kicker">Referans</span>
          </Reveal>
          <Reveal as="figure" delay={100} className="ag__quote">
            <blockquote>
              Creative Factory&apos;den projelerimiz için 360 derece hizmet alabiliyoruz. Bizi
              hiçbir zaman yarı yolda bırakmadılar.
            </blockquote>
            <figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ozgurahmet.jpeg"
                alt=""
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />
              <span>
                <strong>Özgür Ahmet Köse</strong>
                <span className="dim">Kurucu · Brand Story Agency</span>
              </span>
            </figcaption>
          </Reveal>
          <Reveal delay={180} className="ag__proof-link">
            <Link href="/isler#brand-story-agency" className="ghostlink">
              Bu işi incele
            </Link>
          </Reveal>
        </section>

        <AgencyFaq />

        <section className="wp__cta">
          <Reveal as="div">
            <span className="kicker">Başlangıç</span>
          </Reveal>
          <Reveal as="h2" delay={80} className="wp__cta-h">
            Önce müsaitliği konuşalım.
          </Reveal>
          <Reveal as="p" delay={140} className="wp__cta-p">
            Elinizdeki işi anlatın, alıp alamayacağımı ve ne kadar süreceğini aynı gün söyleyeyim.
          </Reveal>
          <Reveal delay={200}>
            <Link href="/#iletisim" className="bigbtn">
              <span className="bigbtn__label">Müsaitlik sor</span>
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
