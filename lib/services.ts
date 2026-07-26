export type Service = {
  n: string;
  slug: string;
  title: string;
  body: string;
  tags: string[];
  tagline: string;
  intro: string;
  deliverables: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
  /** SEO-only title override for <title> and OG. UI uses `title`. */
  seoTitle?: string;
  /** SEO-only description for meta + OG. Keyword-rich, 140-160ch. */
  seoDescription?: string;
  /** Meta keywords (Yandex/Naver still use; Google ignores). */
  keywords?: string[];
  /** Small card thumbnail (used in Services grid). 640×400. */
  image?: string;
  /** Large detail-page hero image. 1600×900. */
  heroImage?: string;
  /** Generation prompt for fal.ai (kept here so the slot is self-documenting). */
  imagePrompt?: string;
  heroImagePrompt?: string;
};

export const SERVICES: Service[] = [
  {
    n: "01",
    slug: "web-tasarim-gelistirme",
    title: "Web Tasarım & Geliştirme",
    body: "Hızlı, ölçeklenebilir ve markaya özel siteler. Headless CMS, e-ticaret, mikro-etkileşim. Uçtan uca.",
    tags: ["Next.js", "Webflow", "Shopify"],
    tagline: "Markanın dijital evi.",
    intro: "Her siteyi sıfırdan kurguluyorum; şablon yok. Hız, erişilebilirlik ve SEO başından dahil. Geliştirme tarafında Next.js, Webflow veya Shopify; projeye göre seçiyorum.",
    deliverables: ["Bilgi mimarisi ve wireframe", "Tasarım sistemi (Figma)", "Geliştirme (Next.js / Webflow / Shopify)", "Headless CMS yapılandırması", "Lansman, eğitim ve dokümantasyon", "Lansman sonrası 3 ay teknik destek"],
    timeline: "4-10 hafta",
    faqs: [
      { q: "Hangi platformu seçiyorsunuz?", a: "İhtiyaca göre Next.js, Webflow veya Shopify; karma çözümler de mümkün. İlk görüşmede uygun olanı birlikte seçiyoruz. Bu sitenin kendisi de Next.js ile yazılıp Cloudflare üzerinde yayınlanıyor." },
      { q: "Lansman sonrası bakım var mı?", a: "İlk 3 ay dahil. Sonrası için aylık paket veya saatlik destek; acil müdahale hattı ayrı." },
      { q: "Mevcut sitemi yenileyebilir misiniz?", a: "Çoğu durumda sıfırdan başlamak daha hızlı çıkıyor. Mevcut yapıya entegrasyon da mümkün; şartlara birlikte bakalım." },
    ],
    seoTitle: "Web Tasarım & Geliştirme Ajansı",
    seoDescription: "İstanbul merkezli web tasarım ajansı. Next.js, Webflow ve Shopify ile markaya özel kurumsal site ve e-ticaret geliştirme. Hız, SEO, erişilebilirlik baştan dahil.",
    keywords: ["web tasarım ajansı", "web tasarım istanbul", "kurumsal web tasarım", "next.js geliştirme", "shopify ajans", "webflow ajans", "e-ticaret web tasarım", "headless cms"],
    image: "/generated/services/web-tasarim-gelistirme.jpg",
    heroImage: "/generated/service-hero/web-tasarim-gelistirme.jpg",
    imagePrompt: "Abstract dark visual representing modern web design: layered translucent glass panels, faint UI grid lines, soft glowing wireframes floating in deep black space, subtle warm gold accent light. Minimalist, cinematic, ultra clean, 3D render aesthetic, no text.",
    heroImagePrompt: "Cinematic dark editorial shot: a designer's workspace at night, glowing monitor with abstract wireframe interface, deep blacks, single warm amber light source from the side, soft volumetric haze, ultra detailed, premium agency look, no text, no logos.",
  },
  {
    n: "02",
    slug: "marka-kimligi",
    title: "Marka Kimliği",
    body: "Logo değil, marka sistemi. Tipografi, ses tonu, kullanım örnekleri ve uzun ömürlü görsel dil. Tek dosyada teslim.",
    tags: ["Logotype", "Ses tonu", "Brand book"],
    tagline: "Karar dizisi, dosya değil.",
    intro: "Marka, bir logodan çok bir karar dizisi. Hangi kelimeyi seçtiğin, hangi rengi yan yana koyduğun, hangi tonu kullandığın; hepsi birbirine bağlı. Sıfırdan kuruyor, kullanım kılavuzunu yazıyor, ekibinin uygulayabileceği şekilde teslim ediyorum.",
    deliverables: ["Stratejik konumlandırma", "Naming (gerekirse) ve ses tonu", "Logotype + işaret + tipografi sistemi", "Renk paleti ve görsel sistem", "Uygulama örnekleri (kart, sosyal, sunum)", "Marka kılavuzu (PDF + Figma)"],
    timeline: "6-8 hafta",
    faqs: [
      { q: "Sadece logo yapıyor musunuz?", a: "Hayır. Marka sisteminin tamamını kuruyorum; tek başına logo işi almıyorum." },
      { q: "Naming desteği veriyor musunuz?", a: "Evet, gerekiyorsa. Domain ve marka tescil kontrolü dahil." },
      { q: "Marka kılavuzu hangi formatta?", a: "PDF + Figma kütüphanesi; bazı durumlarda canlı bir web sayfası olarak teslim." },
    ],
    seoTitle: "Marka Kimliği Ajansı",
    seoDescription: "Logo, tipografi, ses tonu, renk ve görsel sistemden oluşan marka kimliği tasarımı. Sıfırdan brand book teslim; İstanbul merkezli kreatif stüdyo.",
    keywords: ["marka kimliği ajansı", "marka tasarım ajansı", "logo tasarım", "logo tasarım ajansı", "kurumsal kimlik", "brand book", "marka kılavuzu", "ses tonu", "naming"],
    image: "/generated/services/marka-kimligi.jpg",
    heroImage: "/generated/service-hero/marka-kimligi.jpg",
    imagePrompt: "Abstract brand identity composition: minimal geometric monogram shapes, typographic fragments, embossed paper textures stacked in layers, deep matte black background, single warm gold rim light, editorial moodboard feel, no readable text, premium studio aesthetic.",
    heroImagePrompt: "Cinematic flat lay of a brand identity moodboard on a matte black surface: minimal abstract logo marks debossed on dark paper, type specimens, color swatches in muted earth tones, soft directional warm light, shallow depth of field, ultra detailed, no readable text.",
  },
  {
    n: "03",
    slug: "sosyal-medya-icerik",
    title: "Sosyal Medya & İçerik",
    body: "Hafta hafta planlama, çekim, kurgu ve topluluk yönetimi. Tek elden, tutarlı bir ses.",
    tags: ["Editorial", "Reels", "Community"],
    tagline: "Yayın değil, anlatı.",
    intro: "Sosyal medya bir gönderi takvimi değil, markanın günlük sesi. Aylık editörlük, çekim/kurgu ve topluluk yönetimi tek elden. Platforma özgü ama tutarlı bir hikâye.",
    deliverables: ["Aylık içerik stratejisi ve takvim", "Çekim, kurgu, motion grafikler", "Sosyal medya yönetimi (IG, TikTok, LinkedIn)", "Topluluk yönetimi ve moderasyon", "Aylık performans raporu", "Hashtag, format ve trend analizi"],
    timeline: "Aylık · 6 ay min.",
    faqs: [
      { q: "Çekim kimde?", a: "Planlama, çekim, kurgu ve yayın bende. Set, oyuncu veya özel lokasyon gerektiren işlerde uzun süredir çalıştığım prodüksiyon partnerleriyle ilerliyorum; bunu baştan söylüyorum." },
      { q: "Minimum süre var mı?", a: "Sosyal medya yönetiminde minimum 6 ay; markanın sesini oturtmak için bu süre gerekli." },
      { q: "Kaç gönderi içeriyor?", a: "Pakete göre. Standart pakette IG için 12-16 post, 8-12 reel ve günlük story üretimi." },
    ],
    seoTitle: "Sosyal Medya Ajansı & İçerik Üretimi",
    seoDescription: "Instagram, TikTok ve LinkedIn için sosyal medya yönetimi, içerik üretimi ve topluluk yönetimi. Aylık strateji, çekim ve reels üretimi tek elden.",
    keywords: ["sosyal medya ajansı", "sosyal medya yönetimi", "instagram ajans", "tiktok ajansı", "içerik ajansı", "içerik üretimi", "reels üretimi", "topluluk yönetimi"],
    image: "/generated/services/sosyal-medya-icerik.jpg",
    heroImage: "/generated/service-hero/sosyal-medya-icerik.jpg",
    imagePrompt: "Abstract dark composition representing social content: floating vertical phone-shaped glass panels in deep black space, blurred glowing reels frames, soft motion trails, warm amber accent glow, minimal cinematic look, no text, no logos.",
    heroImagePrompt: "Cinematic top-down editorial flat lay on a matte black desk: a smartphone face-up showing a blurred vertical video grid, scattered storyboard sketch cards, sticky notes, a leather notebook, a coffee cup with steam, headphones, a small clip-on lavalier mic, all arranged casually, warm amber side light, deep blacks, soft volumetric haze, shallow depth of field, ultra detailed, premium editorial agency mood, no readable text, no logos.",
  },
  {
    n: "04",
    slug: "dijital-reklam",
    title: "Dijital Reklam",
    body: "Meta, Google ve TikTok'ta veri odaklı kampanyalar. CAC ve LTV üzerinden ölçüyoruz; boş metrik yok.",
    tags: ["Paid social", "SEM", "Attribution"],
    tagline: "Görünürlük değil, getiri.",
    intro: "Performans pazarlama, ölçülebilir reklam demek. Her kampanyanın bir KPI'sı, her kuruşun bir hesabı var. Beğeniden değil, kazandığın müşteriden ölçüyorum. Kendi uygulamalarımın Apple Search Ads kampanyalarını da aynı mantıkla yönetiyorum.",
    deliverables: ["Kanal stratejisi (Meta, Google, TikTok)", "Reklam görseli ve video üretimi", "Hedefleme, segment ve A/B testler", "Attribution kurulumu (GA4, server-side)", "Aylık ölçeklendirme planı", "Haftalık ve aylık raporlar"],
    timeline: "Aylık · 3 ay min.",
    faqs: [
      { q: "Minimum reklam bütçesi var mı?", a: "Genellikle aylık ₺100.000 reklam bütçesinin altında verimli ölçeklemiyoruz. Şart değil ama tavsiye." },
      { q: "Reklam içeriği üretimi dahil mi?", a: "Evet. Statik görsel ve video reklam dahil; karmaşık prodüksiyon ek pakette." },
      { q: "Hangi raporu alıyorum?", a: "Haftalık özet (Slack) ve aylık derinlemesine dashboard (Looker Studio)." },
    ],
    seoTitle: "Dijital Reklam & Performans Pazarlama Ajansı",
    seoDescription: "Meta, Google Ads ve TikTok'ta veri odaklı performans pazarlama. CAC, LTV ve attribution kurulumuyla ölçülebilir dijital reklam kampanyaları.",
    keywords: ["dijital reklam ajansı", "performans pazarlama ajansı", "meta reklam ajansı", "google ads ajansı", "tiktok reklam", "facebook reklam", "performans ajans", "ppc ajans", "GA4 attribution"],
    image: "/generated/services/dijital-reklam.jpg",
    heroImage: "/generated/service-hero/dijital-reklam.jpg",
    imagePrompt: "Abstract performance marketing visualization: minimalist data chart lines and bar shapes glowing softly, ascending curves, subtle grid, deep matte black background, warm gold accent highlights on peaks, premium analytical aesthetic, no readable numbers, no text.",
    heroImagePrompt: "Cinematic dark editorial: abstract floating dashboards and ascending line graphs as translucent holographic panels in deep black space, warm amber glow on rising curves, soft volumetric light, ultra detailed, premium agency look, no readable text or numbers.",
  },
  {
    n: "05",
    slug: "motion-icerik",
    title: "Motion & İçerik Üretimi",
    body: "Fotoğraf, video ve motion grafik. Markanın hikâyesini hareketle anlatan, platforma özel çıktılar.",
    tags: ["Reklam filmi", "3D / motion", "Stop motion"],
    tagline: "Hareketli, kalıcı içerikler.",
    intro: "Tek konseptli reklam filminden 3D motion'a; markanın hikâyesini ekrana taşıyorum. Konsept, storyboard, kurgu ve motion bende. Set kurulumu gerektiren çekimlerde ve ağır 3D işlerde partner stüdyolarla çalışıyorum.",
    deliverables: ["Konsept ve storyboard", "Çekim (lokasyon + stüdyo)", "Post-prodüksiyon ve renk yönetimi", "2D / 3D motion grafik", "Müzik ve seslendirme", "Platforma özgü formatlar"],
    timeline: "3-8 hafta",
    faqs: [
      { q: "Stop motion ya da 3D yapıyor musunuz?", a: "Evet, ikisi de mümkün. Basit ve orta ölçekli işleri kendim yapıyorum; karmaşık 3D ve büyük prodüksiyonlarda partner stüdyoyla ilerliyoruz." },
      { q: "Sadece kurgu desteği veriyor musunuz?", a: "Evet. Mevcut çekimlerin varsa sadece post-prodüksiyon paketi mümkün." },
      { q: "Müzik telif sorunu olur mu?", a: "Hayır. Kütüphaneden lisanslı veya özel beste; ikisi de mümkün." },
    ],
    seoTitle: "Motion Grafik & Video Prodüksiyon Ajansı",
    seoDescription: "Reklam filmi, 3D motion grafik, stop motion ve video içerik üretimi. Konsept, kurgu ve post-prodüksiyon tek elden; renk yönetimi ve seslendirme dahil.",
    keywords: ["motion grafik ajansı", "video prodüksiyon ajansı", "reklam filmi yapım", "3d motion grafik", "stop motion ajansı", "video çekim ajansı", "post prodüksiyon", "animasyon ajansı"],
    image: "/generated/services/motion-icerik.jpg",
    heroImage: "/generated/service-hero/motion-icerik.jpg",
    imagePrompt: "Abstract motion graphic visual: long exposure light streaks, flowing 3D ribbons in deep matte black space, warm amber and soft white glow, cinematic depth, premium motion studio aesthetic, no text, no logos.",
    heroImagePrompt: "Cinematic film production scene at night: silhouette of a film camera on a dolly, soft warm key light, atmospheric haze, deep black background, premium agency editorial mood, ultra detailed, shallow depth of field, no text.",
  },
  {
    n: "06",
    slug: "mobil-uygulama-gelistirme",
    title: "Mobil Uygulama Geliştirme",
    body: "iOS ve Android için native ve cross-platform uygulamalar. Tasarımdan store yayınına kadar uçtan uca.",
    tags: ["iOS", "Android", "React Native"],
    tagline: "App Store'dan kullanıcıya.",
    intro: "Markaya özel mobil uygulama, sadece bir mobil sürüm değil. UX, performans ve store optimizasyonunu birlikte tasarlıyorum. Native (Swift, Kotlin) veya cross-platform (React Native, Flutter); ihtiyaca göre seçiyorum. App Store'da yayında olan altı uygulamamı da aynı süreçle çıkardım: tasarımından koduna, paywall'ından mağaza sayfasına kadar.",
    deliverables: ["UX akışı ve prototip", "UI tasarım sistemi (Figma)", "Geliştirme (iOS / Android / cross-platform)", "Backend ve API entegrasyonu", "App Store ve Play Store yayını", "Lansman sonrası 3 ay teknik destek ve hata düzeltme"],
    timeline: "8-16 hafta",
    faqs: [
      { q: "Native mi cross-platform mu?", a: "Performans-kritik (oyun, AR, ağır animasyon) veya platforma özel yetenek gerektiren projelerde native. Çoğu üretkenlik ve içerik uygulaması için React Native daha hızlı ve uygun maliyetli." },
      { q: "Store yayınını siz mi yapıyorsunuz?", a: "Evet. App Store Connect ve Google Play Console kurulumu, metadata, screenshot ve review süreci dahil. Bu süreci kendi uygulamalarımda defalarca yürüttüm, reddedilme sebeplerini de biliyorum." },
      { q: "Mevcut web uygulamamı mobile mi taşıyorsunuz?", a: "Mümkün ama nadiren önerilir. Mobil farklı bir kullanım modeli; sıfırdan UX kurgusu çoğu zaman daha iyi sonuç veriyor." },
    ],
    seoTitle: "Mobil Uygulama Geliştirme Ajansı",
    seoDescription: "iOS, Android ve React Native ile mobil uygulama geliştirme. UX'ten App Store ve Play Store yayınına uçtan uca; İstanbul merkezli geliştirme ajansı.",
    keywords: ["mobil uygulama geliştirme ajansı", "mobil uygulama ajansı", "ios uygulama geliştirme", "android uygulama geliştirme", "react native ajans", "flutter ajans", "app geliştirme", "uygulama yaptırma"],
    image: "/generated/services/mobil-uygulama-gelistirme.jpg",
    heroImage: "/generated/service-hero/mobil-uygulama-gelistirme.jpg",
    imagePrompt: "Abstract mobile app visualization: floating translucent phone-shaped panels in deep black space, faint UI elements glowing inside, soft warm amber light, minimal premium 3D render, no readable text, no logos.",
    heroImagePrompt: "Cinematic dark editorial: a single sleek smartphone silhouette held up against a deep black background, glowing app interface barely visible, warm amber rim light, soft volumetric haze, premium agency mood, ultra detailed, shallow depth of field, no readable text.",
  },
];

export const NAV = [
  { label: "Ürünler", href: "/#urunler" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Süreç", href: "/#surec" },
  { label: "Insights", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];
