// Own products shipped end to end: design, code, store listing, ads.
// Verified against App Store Connect and the public App Store on 2026-07-26.
// All six are live; Steady90 and Color Hunt are not public yet and stay out.

export type Product = {
  slug: string;
  name: string;
  category: string;
  body: string;
  icon: string;
  storeUrl: string;
  siteUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "chiari",
    name: "Headache Log: Chiari Companion",
    category: "Sağlık günlüğü",
    body: "Chiari malformasyonu olan kişiler için baş ağrısı ve semptom günlüğü. Kontrole giderken doktorun eline veri geçsin diye.",
    icon: "/apps/chiari.png",
    storeUrl: "https://apps.apple.com/app/id6771904296",
    siteUrl: "https://chiari.creativefactory.tr",
  },
  {
    slug: "tend",
    name: "Autism Behavior Tracker: Tend",
    category: "Ebeveyn aracı",
    body: "Otizmli ve özel gereksinimli çocukların davranış takibi. IEP toplantısı ve terapi için PDF rapor üretiyor.",
    icon: "/apps/tend.png",
    storeUrl: "https://apps.apple.com/app/id6775020286",
    siteUrl: "https://tend.creativefactory.tr",
  },
  {
    slug: "purewave",
    name: "PureWave: Water Eject & Sound",
    category: "Yardımcı araç",
    body: "Islanan telefonun hoparlöründeki suyu ses dalgasıyla dışarı atan araç. Hoparlör ve ses testi de içinde.",
    icon: "/apps/purewave.png",
    storeUrl: "https://apps.apple.com/app/id6769761811",
    siteUrl: "https://purewave.creativefactory.tr",
  },
  {
    slug: "boncuk",
    name: "Boncuk: Flash Anzan Arithmetic",
    category: "Eğitim",
    body: "7-12 yaş için zihinden aritmetik. Flash anzan yöntemiyle, ekranda akan sayıları kafadan toplama pratiği.",
    icon: "/apps/boncuk.png",
    storeUrl: "https://apps.apple.com/app/id6771302468",
    siteUrl: "https://boncuk.creativefactory.tr",
  },
  {
    slug: "hcm",
    name: "HCM Companion: Heart Log",
    category: "Sağlık günlüğü",
    body: "Hipertrofik kardiyomiyopati hastaları için semptom, ilaç ve kontrol takibi. Kardiyoloğa gösterilecek bir kayıt bırakıyor.",
    icon: "/apps/hcm.png",
    storeUrl: "https://apps.apple.com/app/id6762368597",
    siteUrl: "https://hcm.creativefactory.tr",
  },
  {
    slug: "mirela",
    name: "Dream Interpretation - Mirela",
    category: "Yaşam tarzı",
    body: "Rüya yorumlama uygulaması. Türkçe ve İngilizce, kendi rüya arşivini tutan bir günlük yapısıyla.",
    icon: "/apps/mirela.png",
    storeUrl: "https://apps.apple.com/app/id6762972350",
  },
];
