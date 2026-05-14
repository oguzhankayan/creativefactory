export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** Estimated read time in minutes */
  readMinutes: number;
  author: string;
  tags: string[];
  /** SEO description (140-160ch) */
  seoDescription: string;
  /** Meta keywords (Yandex/Naver) */
  keywords: string[];
  /** Optional hero image path; falls back to generated/blog/<slug>.jpg if omitted */
  heroImage?: string;
};

export const POSTS: Post[] = [
  {
    slug: "marka-kimligi-yatirimi-playbook-2026",
    title: "Türkiye'de Marka Kimliği Yatırımı: 2026 Playbook'u",
    excerpt:
      "Marka kimliği harcaması bir maliyet kalemi değil, kurumsal bir karar dizisi. Bütçe aralıkları, kapsam, takvim ve sık yapılan hatalar.",
    date: "2026-05-08",
    readMinutes: 9,
    author: "Oğuzhan Kayan",
    tags: ["Marka Kimliği", "Strateji", "Bütçe"],
    seoDescription:
      "Türkiye'de marka kimliği yatırımı için 2026 playbook'u: bütçe aralıkları, kapsam, takvim, brand book teslimi ve kurumsal karar çerçevesi.",
    keywords: [
      "marka kimliği yatırımı",
      "marka kimliği maliyeti",
      "brand book fiyat",
      "marka tasarım bütçesi",
      "kurumsal kimlik yenileme",
      "rebranding maliyeti türkiye",
    ],
    heroImage: "/generated/service-hero/marka-kimligi.jpg",
  },
  {
    slug: "kurumsal-web-sitesi-yenileme-karar-cercevesi",
    title: "Kurumsal Web Sitesi Yenileme: Şirket Sahibinin Karar Çerçevesi",
    excerpt:
      "Mevcut siteyi yenilemek mi, sıfırdan kurmak mı? Platform seçimi, CMS, SEO devri, lansman sonrası bakım, karar verirken bakılacak yedi başlık.",
    date: "2026-04-22",
    readMinutes: 11,
    author: "Oğuzhan Kayan",
    tags: ["Web", "Strateji", "Karar Çerçevesi"],
    seoDescription:
      "Kurumsal web sitesi yenileme rehberi: platform seçimi (Next.js, Webflow, Shopify), CMS, SEO devri, takvim ve lansman sonrası destek.",
    keywords: [
      "kurumsal web sitesi yenileme",
      "web sitesi yenileme",
      "kurumsal site tasarımı",
      "web sitesi platform seçimi",
      "next.js vs webflow",
      "şirket sitesi yenileme rehberi",
    ],
    heroImage: "/generated/service-hero/web-tasarim-gelistirme.jpg",
  },
  {
    slug: "sosyal-medya-ajansi-mi-ici-ekip-mi",
    title: "Sosyal Medya: Ajans mı, İç Ekip mi? Bütçe ve Karar Matrisi",
    excerpt:
      "İç ekip ile ajans modeli arasındaki gerçek toplam maliyet karşılaştırması; karar verirken bakılacak beş kriter ve hibrit modelin nerede işe yaradığı.",
    date: "2026-04-05",
    readMinutes: 8,
    author: "Oğuzhan Kayan",
    tags: ["Sosyal Medya", "İçerik", "Bütçe"],
    seoDescription:
      "Sosyal medya yönetiminde ajans ile iç ekip modeli karşılaştırması: bütçe, hız, içerik kalitesi, ölçeklenebilirlik ve hibrit model.",
    keywords: [
      "sosyal medya ajansı",
      "sosyal medya iç ekip",
      "sosyal medya yönetimi maliyet",
      "instagram yönetimi ücret",
      "sosyal medya ajans seçimi",
      "içerik üretimi maliyeti",
    ],
    heroImage: "/generated/service-hero/sosyal-medya-icerik.jpg",
  },
  {
    slug: "cac-ltv-performans-pazarlama-rehberi",
    title: "Performans Pazarlamada CAC ve LTV: Türkiye Pazarı İçin Pratik Rehber",
    excerpt:
      "CAC ve LTV hesabını günlük operasyona nasıl indireceksiniz? Türk pazarına özel benchmark aralıkları, attribution hataları ve kanal mix kararları.",
    date: "2026-03-18",
    readMinutes: 12,
    author: "Oğuzhan Kayan",
    tags: ["Performans", "Reklam", "Veri"],
    seoDescription:
      "CAC, LTV ve attribution kurulumu için Türkiye odaklı pratik rehber. Meta, Google ve TikTok'ta ölçeklenebilir performans pazarlama.",
    keywords: [
      "cac ltv hesaplama",
      "performans pazarlama rehberi",
      "müşteri edinme maliyeti",
      "ltv hesaplama",
      "meta reklam attribution",
      "ga4 attribution kurulumu",
    ],
    heroImage: "/generated/service-hero/dijital-reklam.jpg",
  },
  {
    slug: "mobil-uygulama-mi-mobile-web-mi",
    title: "Mobil Uygulama mı, Mobile Web mi? KOBİ'ler İçin Karar Çerçevesi",
    excerpt:
      "Mobil uygulama her marka için zorunlu mu? Sekiz soruluk karar çerçevesi: kullanım sıklığı, donanım gereksinimi, bütçe, store ekonomisi ve PWA alternatifi.",
    date: "2026-02-26",
    readMinutes: 10,
    author: "Oğuzhan Kayan",
    tags: ["Mobil", "Strateji", "KOBİ"],
    seoDescription:
      "Mobil uygulama mı, mobile web mi sorusuna karar çerçevesi. KOBİ'ler için kullanım sıklığı, store ekonomisi ve PWA değerlendirmesi.",
    keywords: [
      "mobil uygulama mı web mi",
      "mobil uygulama yaptırma",
      "ios android uygulama",
      "pwa progressive web app",
      "mobil uygulama maliyeti",
      "kobi mobil uygulama",
    ],
    heroImage: "/generated/service-hero/mobil-uygulama-gelistirme.jpg",
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getOtherPosts(slug: string, limit = 3): Post[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
