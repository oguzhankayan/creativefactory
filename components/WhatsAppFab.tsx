"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PHONE = "905396004394";

const SECTION_MESSAGES: Record<string, string> = {
  top: "Merhaba, Creative Factory ile bir proje konuşmak istiyorum.",
  hizmetler: "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.",
  surec: "Merhaba, çalışma süreciniz hakkında konuşmak istiyorum.",
  fark: "Merhaba, sizinle çalışmak istiyorum. Detayları konuşabilir miyiz?",
  referanslar: "Merhaba, referanslarınızı inceledim. Benzer bir proje için konuşmak istiyorum.",
  iletisim: "Merhaba, projem için sizinle iletişime geçmek istiyorum.",
  studyo: "Merhaba, stüdyonuzla tanışmak ve projem hakkında konuşmak istiyorum.",
};

const PATH_MESSAGES: Record<string, string> = {
  "/kvkk": "Merhaba, KVKK ile ilgili sormak istediklerim var.",
  "/cerez-politikasi": "Merhaba, çerez politikası ile ilgili sormak istediklerim var.",
  "/kullanim-kosullari": "Merhaba, kullanım koşulları ile ilgili sormak istediklerim var.",
};

const DEFAULT_MSG = "Merhaba, Creative Factory ile iletişime geçmek istiyorum.";

const SERVICE_SLUG_TITLES: Record<string, string> = {
  "web-tasarim-gelistirme": "Web Tasarım & Geliştirme",
  "marka-kimligi": "Marka Kimliği",
  "sosyal-medya-icerik": "Sosyal Medya & İçerik",
  "dijital-reklam": "Dijital Reklam",
  "motion-icerik": "Motion & İçerik Üretimi",
  "mobil-uygulama-gelistirme": "Mobil Uygulama Geliştirme",
};

function getServiceFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const m = window.location.hash.match(/^#\/hizmetler\/([\w-]+)/);
  return m ? m[1] : null;
}

export default function WhatsAppFab() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("top");
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);

  useEffect(() => {
    setServiceSlug(getServiceFromHash());
    const onHash = () => setServiceSlug(getServiceFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" || serviceSlug) return;
    const ids = Object.keys(SECTION_MESSAGES);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { threshold: [0.3, 0.6], rootMargin: "-20% 0px -30% 0px" }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname, serviceSlug]);

  let message = DEFAULT_MSG;
  if (pathname && PATH_MESSAGES[pathname]) {
    message = PATH_MESSAGES[pathname];
  } else if (serviceSlug && SERVICE_SLUG_TITLES[serviceSlug]) {
    message = `Merhaba, ${SERVICE_SLUG_TITLES[serviceSlug]} hizmetiyle ilgileniyorum.`;
  } else if (pathname === "/" && SECTION_MESSAGES[activeSection]) {
    message = SECTION_MESSAGES[activeSection];
  }

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="WhatsApp ile iletişime geç"
    >
      <svg
        className="wa-fab__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="wa-fab__pulse" aria-hidden="true" />
    </a>
  );
}
