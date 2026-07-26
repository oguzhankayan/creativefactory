// Client work. Every entry names the client, because a work example without a
// name is not a reference. Quotes are the clients' own words, already on the
// site as testimonials. Nothing here claims a metric that has not been measured.

export type Work = {
  slug: string;
  client: string;
  sector: string;
  scope: string[];
  /** One line for the card. */
  summary: string;
  /** Longer writeup for /isler. */
  body: string[];
  quote?: { text: string; author: string; role: string; avatar: string };
  liveUrl?: string;
  liveLabel?: string;
};

export const WORKS: Work[] = [
  {
    slug: "etra-ambulans",
    client: "Etra Ambulans",
    sector: "Sağlık · Acil hizmet",
    scope: ["Web tasarım", "Geliştirme", "İçerik mimarisi"],
    summary:
      "7/24 çalışan bir ambulans servisinin sitesi. Panikle gelen insanı bilgiye değil, telefona götürür.",
    body: [
      "Bu siteye gelen insan gezinmiyor. Bir yakını için ambulans arıyor ve elindeki tek şey telefon. Bilgi mimarisi bu gerçeğin üstüne kuruldu: çağrı butonu her ekranda sabit, kurumsal ve kariyer sayfaları arkada.",
      "Dört hizmet hattı ayrı ayrı anlatıldı: acil yardım ambulansı, doktorlu acil yardım, planlı hasta nakli ve etkinlik sağlık çözümleri. Her biri \"hangi durumda bunu ararsın\" cümlesiyle açılıyor, hizmet adıyla değil.",
      "Ana sayfada üç adımlık bir söz var: dinleriz, planlarız, bilgilendiririz. Acil hizmette satılan şey hız değil, ne olacağını bilmek.",
    ],
    liveUrl: "https://etraambulans.com",
    liveLabel: "etraambulans.com",
  },
  {
    slug: "masalaci",
    client: "Maşalacı Sürücü Kursu ve Anaokulu",
    sector: "Eğitim",
    scope: ["Reklam projeleri", "Dijital süreç yönetimi", "Kayıt dönemi kampanyaları"],
    summary:
      "İki kurum, tek marka ailesi. Reklam ve dijital işleri kayıt sezonlarının ritmine göre yürüyor.",
    body: [
      "Sürücü kursu ve anaokulu aynı ailenin iki ayrı işi, iki ayrı hedef kitlesi. Ehliyet alacak genç ile çocuğunu okula yazdıracak veli aynı dili konuşmuyor. İki ayrı ses tonu, tek marka disiplini.",
      "Bu işin takvimini kayıt dönemleri belirliyor. Kampanya planı sezona göre kuruluyor, yıl boyunca eşit dağıtılmıyor. Kayıt penceresi açıldığında hazır olmak, kapandıktan sonra yayın yapmaktan daha değerli.",
    ],
    quote: {
      text: "Sürücü kursumuz ve anaokulumuzun tüm reklam projelerinde ve dijital süreçlerinde kendileriyle çalışmak bizim için çok büyük bir mutluluk.",
      author: "Fatih Maşalacı",
      role: "Kurucu · Maşalacı Sürücü Kursu",
      avatar: "/fatihmasalaci.png",
    },
  },
  {
    slug: "brand-story-agency",
    client: "Brand Story Agency",
    sector: "Reklam ajansı · Beyaz etiket",
    scope: ["Beyaz etiket kreatif üretim", "Kapasite desteği"],
    summary:
      "Ajans-ajans çalışma. İş onların markası altında çıkıyor, benim adım görünmüyor.",
    body: [
      "Ajansların kendi müşterileri için ürettiği işlerde kapasite desteği veriyorum. Kreatif üretim benden çıkıyor, sunum ve müşteri ilişkisi ajansta kalıyor. İsim görünmüyor, bu işin şartı.",
      "Bir ajans için doğru taşeron, müşterisini elinden almayacağını bildiği kişidir. Tek kişilik olmak burada dezavantaj değil: kimseyle rekabet etmiyorum, kapasite satıyorum.",
    ],
    quote: {
      text: "Creative Factory'den projelerimiz için 360 derece hizmet alabiliyoruz. Bizi hiçbir zaman yarı yolda bırakmadılar.",
      author: "Özgür Ahmet Köse",
      role: "Kurucu · Brand Story Agency",
      avatar: "/ozgurahmet.jpeg",
    },
  },
  {
    slug: "fratelli-cheese",
    client: "Fratelli Cheese",
    sector: "Gıda · Kişisel marka",
    scope: ["Kişisel marka kurulumu", "Dijital lansman"],
    summary:
      "Sıfırdan bir kişisel marka ve aynı anda atılan ilk dijital adım.",
    body: [
      "Kurucunun kişisel markası ile işin markası aynı anda kuruldu. Küçük gıda markalarında ikisi zaten ayrılmıyor: insanlar ürünü değil, arkasındaki kişiyi tanıyor.",
      "İlk dijital adımın tamamı bu süreçte atıldı. Kimlik, ses tonu ve ilk kanalların kurulumu tek pakette ilerledi.",
    ],
    quote: {
      text: "Kişisel markamın oluşmasında ve dijital dünyaya adım attığım ilk süreçte kendileriyle çalıştık. Çok güzel noktalara geldik.",
      author: "Nurper Özcan",
      role: "Kurucu · Fratelli Cheese",
      avatar: "/nurperozcan.jpg",
    },
  },
];
