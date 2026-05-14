import type { Service } from "@/lib/services";

const SITE_URL = "https://creativefactory.tr";

export default function ServiceJsonLd({ service }: { service: Service }) {
  const url = `${SITE_URL}/hizmetler/${service.slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.body,
    url,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: { "@type": "Country", name: "Türkiye" },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Teslim edilenler",
      itemListElement: service.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/#hizmetler` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
