// Own products shipped end to end: design, code, store listing, ads.
// Verified against App Store Connect and the public App Store on 2026-07-26.
// All six are live; Steady90 and Color Hunt are not public yet and stay out.

export type Product = {
  slug: string;
  name: string;
  category: string;
  body: string;
  icon: string;
  /** Where the card links. App Store for the apps, the product site for Klevia. */
  storeUrl: string;
  /** Label on the card's link. */
  linkLabel: string;
  siteUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "klevia",
    name: "Klevia",
    category: "SaaS · Türkiye",
    body: "Web sitesi olmayan yerel işletmeyi bulup ona gerçek verisiyle demo site kuran bir araç. Ajanslar ve satış yapan freelancer'lar için. Abonelikli, canlı, ödeme alıyor.",
    icon: "/apps/klevia.svg",
    storeUrl: "https://klevia.com.tr",
    linkLabel: "klevia.com.tr ↗",
  },
  {
    slug: "chiari",
    name: "Headache Log: Chiari Companion",
    category: "Sağlık günlüğü",
    body: "Chiari malformasyonu olan kişiler için baş ağrısı ve semptom günlüğü. Kontrole giderken doktorun eline veri geçsin diye.",
    icon: "/apps/chiari.png",
    storeUrl: "https://apps.apple.com/app/id6771904296",
    linkLabel: "App Store’da gör ↗",
    siteUrl: "https://chiari.creativefactory.tr",
  },
  {
    slug: "tend",
    name: "Autism Behavior Tracker: Tend",
    category: "Ebeveyn aracı",
    body: "Otizmli ve özel gereksinimli çocukların davranış takibi. IEP toplantısı ve terapi için PDF rapor üretiyor.",
    icon: "/apps/tend.png",
    storeUrl: "https://apps.apple.com/app/id6775020286",
    linkLabel: "App Store’da gör ↗",
    siteUrl: "https://tend.creativefactory.tr",
  },
  {
    slug: "purewave",
    name: "PureWave: Water Eject & Sound",
    category: "Yardımcı araç",
    body: "Islanan telefonun hoparlöründeki suyu ses dalgasıyla dışarı atan araç. Hoparlör ve ses testi de içinde.",
    icon: "/apps/purewave.png",
    storeUrl: "https://apps.apple.com/app/id6769761811",
    linkLabel: "App Store’da gör ↗",
    siteUrl: "https://purewave.creativefactory.tr",
  },
  {
    slug: "boncuk",
    name: "Boncuk: Flash Anzan Arithmetic",
    category: "Eğitim",
    body: "7-12 yaş için zihinden aritmetik. Flash anzan yöntemiyle, ekranda akan sayıları kafadan toplama pratiği.",
    icon: "/apps/boncuk.png",
    storeUrl: "https://apps.apple.com/app/id6771302468",
    linkLabel: "App Store’da gör ↗",
    siteUrl: "https://boncuk.creativefactory.tr",
  },
  {
    slug: "hcm",
    name: "HCM Companion: Heart Log",
    category: "Sağlık günlüğü",
    body: "Hipertrofik kardiyomiyopati hastaları için semptom, ilaç ve kontrol takibi. Kardiyoloğa gösterilecek bir kayıt bırakıyor.",
    icon: "/apps/hcm.png",
    storeUrl: "https://apps.apple.com/app/id6762368597",
    linkLabel: "App Store’da gör ↗",
    siteUrl: "https://hcm.creativefactory.tr",
  },
  {
    slug: "mirela",
    name: "Dream Interpretation - Mirela",
    category: "Yaşam tarzı",
    body: "Rüya yorumlama uygulaması. Türkçe ve İngilizce, kendi rüya arşivini tutan bir günlük yapısıyla.",
    icon: "/apps/mirela.png",
    storeUrl: "https://apps.apple.com/app/id6762972350",
    linkLabel: "App Store’da gör ↗",
  },
];
