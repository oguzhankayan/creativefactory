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
  cases: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    n: "01",
    slug: "web-tasarim-gelistirme",
    title: "Web Tasarım & Geliştirme",
    body: "Hızlı yüklenen, ölçeklenebilir, brand-first siteler. Headless CMS, e-ticaret ve mikro-etkileşimlere kadar uçtan uca.",
    tags: ["Next.js", "Webflow", "Shopify"],
    tagline: "Markanın dijital evi.",
    intro: "Her siteyi sıfırdan kurguluyoruz; şablon yok. Hız, erişilebilirlik ve SEO en baştan iş listesinde. Geliştirme tarafında Next.js, Webflow ya da Shopify — projeye göre.",
    deliverables: ["Bilgi mimarisi ve wireframe", "Tasarım sistemi (Figma)", "Geliştirme (Next.js / Webflow / Shopify)", "Headless CMS yapılandırması", "Lansman, eğitim ve dökümantasyon", "İlk 3 ay teknik destek"],
    timeline: "4–10 hafta",
    cases: ["Qualiko", "SCOPS", "Akasya Token"],
    faqs: [
      { q: "Hangi platformu seçiyorsunuz?", a: "İhtiyaca göre Next.js, Webflow veya Shopify; karma çözümler de mümkün. İlk görüşmede uygun olanı birlikte seçiyoruz." },
      { q: "Lansman sonrası bakım var mı?", a: "İlk 3 ay dahil. Sonrası için aylık paket veya saatlik destek; acil müdahale hattı ayrı." },
      { q: "Mevcut sitemi yenileyebilir misiniz?", a: "Çoğu durumda sıfırdan başlamak daha hızlı çıkıyor. Mevcut yapıya entegrasyon da mümkün; şartlara birlikte bakalım." },
    ],
  },
  {
    n: "02",
    slug: "marka-kimligi",
    title: "Marka Kimliği",
    body: "Logo değil; marka sistemi. Tipografi, ses tonu, kullanım örnekleri ve uzun ömürlü görsel dil — tek dosyada teslim.",
    tags: ["Logotype", "Ses tonu", "Brand book"],
    tagline: "Logodan çok daha fazlası.",
    intro: "Marka, bir logodan çok bir karar dizisi. Hangi kelimeyi seçtiğin, hangi rengi yan yana koyduğun, hangi tonu kullandığın — hepsi birbirine bağlı. Sıfırdan kuruyoruz, kullanım kılavuzunu yazıyoruz, ekibinin uygulayabileceği hale getiriyoruz.",
    deliverables: ["Stratejik konumlandırma", "Naming (gerekirse) ve ses tonu", "Logotype + işaret + tipografi sistemi", "Renk paleti ve görsel sistem", "Uygulama örnekleri (kart, sosyal, sunum)", "Marka kılavuzu (PDF + Figma)"],
    timeline: "6–8 hafta",
    cases: ["Iconica", "Köpüklü", "Müzedenal"],
    faqs: [
      { q: "Sadece logo yapıyor musunuz?", a: "Hayır. Marka sisteminin tamamını kuruyoruz; tek başına logo işi almıyoruz." },
      { q: "Naming desteği veriyor musunuz?", a: "Evet, gerekiyorsa — domain ve marka tescil kontrolü dahil." },
      { q: "Marka kılavuzu hangi formatta?", a: "PDF + Figma library + bazı durumlarda canlı bir web sayfası olarak teslim." },
    ],
  },
  {
    n: "03",
    slug: "sosyal-medya-icerik",
    title: "Sosyal Medya & İçerik",
    body: "Hafta hafta planlama, çekim, kurgu ve topluluk yönetimi. Yayın değil, anlatı kuruyoruz.",
    tags: ["Editorial", "Reels", "Community"],
    tagline: "Yayın değil, anlatı.",
    intro: "Sosyal medya bir gönderi takvimi değil; markanın günlük sesi. Aylık editörlük, çekim/kurgu ve topluluk yönetimi tek elden. Platforma özgü ama tutarlı bir hikâye.",
    deliverables: ["Aylık içerik stratejisi ve takvim", "Çekim, kurgu, motion grafikler", "Sosyal medya yönetimi (IG, TikTok, LinkedIn)", "Topluluk yönetimi ve moderasyon", "Aylık performans raporu", "Hashtag, format ve trend analizi"],
    timeline: "Aylık · 6 ay min.",
    cases: ["Köpüklü", "SCOPS", "Eurosport"],
    faqs: [
      { q: "Çekim ekibi sizde mi?", a: "Evet, kendi DOP ve set ekibimiz var. Ek lokasyon/oyuncu gerekirse partner ağımızdan çağırıyoruz." },
      { q: "Minimum süre var mı?", a: "Sosyal medya yönetiminde 6 ay min. — markanın sesini oturtmak için bu süre gerekli." },
      { q: "Kaç gönderi içeriyor?", a: "Pakete göre; standart pakette IG için 12-16 post + 8-12 reel + günlük story üretimi." },
    ],
  },
  {
    n: "04",
    slug: "dijital-reklam",
    title: "Dijital Reklam",
    body: "Meta, Google ve TikTok'ta veri odaklı kampanyalar. CAC ve LTV üzerinden, vanity metric'siz raporlama.",
    tags: ["Paid social", "SEM", "Attribution"],
    tagline: "Görünürlük değil, getiri.",
    intro: "Performans pazarlama = ölçülebilir reklam. Her kampanyanın bir KPI'ı, her kuruşun bir hesabı var. Like ve görüntülenmeden çok, kazandığın müşteriye bakıyoruz.",
    deliverables: ["Kanal stratejisi (Meta, Google, TikTok)", "Reklam yaratıcı üretimi", "Hedefleme, segment ve A/B testler", "Attribution kurulumu (GA4, server-side)", "Aylık scaling planı", "Haftalık ve aylık raporlar"],
    timeline: "Aylık · 3 ay min.",
    cases: ["Akasya Token", "Köpüklü", "Iconica"],
    faqs: [
      { q: "Minimum reklam bütçesi var mı?", a: "Genellikle aylık ₺100.000 reklam bütçesinin altında verimli ölçeklemiyoruz. Şart değil ama tavsiye." },
      { q: "Yaratıcı üretim dahil mi?", a: "Evet — statik görsel + video reklam. Karmaşık prodüksiyon ek paket." },
      { q: "Hangi raporu alıyorum?", a: "Haftalık özet (Slack) + aylık derinlemesine dashboard (Looker Studio)." },
    ],
  },
  {
    n: "05",
    slug: "motion-icerik",
    title: "Motion & İçerik Üretimi",
    body: "Fotoğraf, video ve motion grafik. Markanın hikâyesini hareketle anlatan, platforma özel çıktılar.",
    tags: ["Reklam filmi", "3D / motion", "Stop motion"],
    tagline: "Hareketli, kalıcı içerikler.",
    intro: "Tek tabaka reklam filminden 3D motion graphic'e kadar — markanın hikâyesini ekrana taşıyoruz. Kendi prodüksiyon ekibimiz, kendi post-production ekibimiz.",
    deliverables: ["Konsept ve storyboard", "Çekim (lokasyon + stüdyo)", "Post-production ve renk yönetimi", "2D / 3D motion graphic", "Müzik ve seslendirme", "Platforma özgü formatlar"],
    timeline: "3–8 hafta",
    cases: ["Eurosport", "Timberwolves", "Müzedenal"],
    faqs: [
      { q: "Stop motion ya da 3D yapıyor musunuz?", a: "Evet — ikisi de iç ekibimizde. Karmaşık 3D projelerde dış stüdyo desteği alıyoruz." },
      { q: "Sadece kurgu desteği veriyor musunuz?", a: "Evet, mevcut çekimleriniz varsa post-production-only paket var." },
      { q: "Müzik telif sorunu olur mu?", a: "Hayır — kütüphaneden lisanslı veya özel beste; ikisi de mümkün." },
    ],
  },
  {
    n: "06",
    slug: "strateji-danismanlik",
    title: "Strateji & Danışmanlık",
    body: "Pazar haritası, rakip analizi ve büyüme planı. Doğru hamleyi doğru zamanda yapmak için yol haritası.",
    tags: ["Positioning", "GTM", "Roadmap"],
    tagline: "Önce plan, sonra uygulama.",
    intro: "Tasarımdan önce kararlar. Pazar dinamiği, hedef kitle, rakip pozisyonu ve büyüme öncelikleri — net bir yol haritasına dönüştürüyoruz.",
    deliverables: ["Pazar ve rakip analizi", "Hedef kitle segmentasyonu", "Konumlandırma ve mesaj çerçevesi", "Go-to-market planı", "12 aylık roadmap", "Aylık danışmanlık (opsiyonel)"],
    timeline: "3–5 hafta",
    cases: ["Akasya Token", "Iconica", "Qualiko"],
    faqs: [
      { q: "Sadece strateji alabilir miyim?", a: "Evet — strateji stand-alone hizmet. Uygulama tarafında başka bir ajansla da gidebilirsiniz." },
      { q: "Workshop tarzı mı çalışıyorsunuz?", a: "Evet — sürecin bel kemiği iki yarım günlük strateji workshop'ı. Karar verici takım katılıyor." },
      { q: "Sürekli danışmanlık mümkün mü?", a: "Aylık 4-8 saatlik retainer pakete dönüştürülebiliyor. Lansman sonrası kararlar için ideal." },
    ],
  },
];

export const NAV = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Süreç", href: "#surec" },
  { label: "Stüdyo", href: "#studyo" },
];
