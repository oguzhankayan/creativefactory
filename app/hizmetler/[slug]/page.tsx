import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://creativefactory.tr";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Hizmet bulunamadı · Creative Factory" };
  }
  const display = service.seoTitle ?? service.title;
  const title = `${display} · Creative Factory`;
  const description = service.seoDescription ?? service.body;
  const url = `${SITE_URL}/hizmetler/${service.slug}`;
  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "Creative Factory",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      <Nav />
      <ServiceDetail service={service} services={SERVICES} />
      <Footer />
    </>
  );
}
