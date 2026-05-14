const SITE_URL = "https://creativefactory.tr";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Creative Factory",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: "hi@creativefactory.tr",
  telephone: "+90 539 600 43 94",
  description:
    "İstanbul merkezli bağımsız kreatif stüdyo. Web, kimlik, içerik, performans pazarlaması ve mobil uygulama geliştirme.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Silivri",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: ["https://www.instagram.com/creativefactory.tr"],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#localbusiness`,
  name: "Creative Factory",
  image: `${SITE_URL}/icon.svg`,
  url: SITE_URL,
  email: "hi@creativefactory.tr",
  telephone: "+90 539 600 43 94",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Silivri",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Creative Factory",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE_URL}#organization` },
};

export default function HomeJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
