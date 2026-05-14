import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Each post body is rendered inside <article className="prose-cf">,
 * so use plain HTML semantic tags here (h2, p, ul, ol, blockquote).
 */

const Tldr = ({ children }: { children: ReactNode }) => (
  <aside className="prose-cf__tldr" aria-label="TL;DR">
    <span className="prose-cf__tldr-label">TL;DR</span>
    <div>{children}</div>
  </aside>
);

const POST_BODIES: Record<string, ReactNode> = {
  "marka-kimligi-yatirimi-playbook-2026": (
    <>
      <Tldr>
        <p>
          Türkiye'de ciddi bir marka kimliği yatırımı 2026 itibarıyla{" "}
          <strong>250.000₺ – 1.500.000₺</strong> bandında yapılıyor. Asıl maliyet
          logo değil; strateji, ses tonu, tipografi sistemi ve uygulama
          örneklerini içeren tutarlı bir karar dizisi. Doğru yapıldığında 5-8
          yıl ömürlü; yanlış yapıldığında bir yılda yeniden açılması gerekiyor.
        </p>
      </Tldr>

      <h2>Marka kimliği bir maliyet değil, karar dizisidir</h2>
      <p>
        Pek çok şirket sahibi marka kimliği harcamasını &quot;logo + bir kaç
        görsel&quot; olarak düşünür. Oysa bir marka kimliği, şirketin önündeki
        5-8 yıl boyunca alacağı yüzlerce küçük kararı tek bir çerçeveye oturtan
        bir sistemdir. Tipografi seçimi, ses tonu, fotoğraf yönü, ürün
        ambalajı, sosyal medya paylaşımı, sunum şablonu, e-posta imzası — her
        biri ayrı ayrı düşünüldüğünde tutarsızlaşır, tek bir karar dizisinde
        kuruldukları zaman birbirini güçlendirir.
      </p>
      <p>
        Bu yüzden &quot;ne kadara mal olur?&quot; sorusunun kısa cevabı yoktur.
        Doğru soru şudur:{" "}
        <em>
          önümüzdeki beş yılda alacağım yüzlerce küçük kararı bir kerede satın
          alıyorum; bunun bedeli ne kadar?
        </em>
      </p>

      <h2>2026 bütçe aralıkları (Türkiye)</h2>
      <p>
        Aşağıdaki aralıklar İstanbul merkezli bağımsız stüdyolar ve butik
        ajansların 2026 fiyat noktasına dayanır. Multinasyonal ajanslar bu
        rakamların 2-3 katını talep edebilir; freelance ekip kurguları ise alt
        sınırı kırabilir ama uzun ömürlü bir sistem teslimi nadirdir.
      </p>
      <ul>
        <li>
          <strong>Hafif paket (250-400.000₺):</strong> Logotype, tipografi, 1
          renk paleti, 1 sayfalık kullanım rehberi. Yeni kurulan girişimler,
          tek ürün markaları için yeterli.
        </li>
        <li>
          <strong>Standart paket (450-800.000₺):</strong> Strateji + naming
          (gerekirse) + logo + tipografi sistemi + renk + uygulama örnekleri
          (kart, sosyal, sunum) + brand book PDF.
        </li>
        <li>
          <strong>Tam sistem (900.000₺-1.5M₺):</strong> Yukarıdakilerin tümü +
          fotoğraf yönü + illüstrasyon sistemi + motion kuralları + canlı bir
          Figma kütüphanesi + ekip eğitimi. Çok kanalı bir markanın günlük
          operasyonunu sürdürebilmesi için gerekenler.
        </li>
      </ul>

      <h2>Asıl yatırım nereye gidiyor?</h2>
      <p>
        Tipik bir &quot;tam sistem&quot; bütçesinin dağılımı şöyledir:
      </p>
      <ul>
        <li>Strateji + araştırma + naming kararları → <strong>%25</strong></li>
        <li>Görsel sistem + logotype + tipografi → <strong>%30</strong></li>
        <li>Uygulama örnekleri (sosyal, sunum, kart, ambalaj) → <strong>%25</strong></li>
        <li>Brand book + dokümantasyon + ekip eğitimi → <strong>%20</strong></li>
      </ul>
      <p>
        Bütçenin %25'ini araştırma ve stratejiye ayırmayan bir proje, sonradan
        &quot;güzel ama bize ait değil&quot; geri bildirimini neredeyse kesin
        olarak alır. Strateji, görselden önce gelir.
      </p>

      <h2>Takvim: 6-10 hafta arası, daha az değil</h2>
      <p>
        Üç haftada teslim edilen marka kimliği, üç hafta kullanılır. Sistem
        düzgün oturmadığı için ilk uygulamada çatlaklar görünmeye başlar.
        Sağlıklı bir süreç şöyledir:
      </p>
      <ol>
        <li><strong>Hafta 1-2:</strong> Brief, araştırma, rakip analizi, içsel atölye</li>
        <li><strong>Hafta 3-4:</strong> Strateji ve konumlandırma onayı</li>
        <li><strong>Hafta 5-7:</strong> Logo, tipografi, renk, görsel sistem</li>
        <li><strong>Hafta 8-9:</strong> Uygulama örnekleri ve brand book</li>
        <li><strong>Hafta 10:</strong> Ekip eğitimi ve teslim</li>
      </ol>

      <h2>Sık yapılan üç hata</h2>
      <p>
        <strong>1) Logo'yu önce, stratejiyi sonra yapmak.</strong> Logo,
        konumlandırma kararının görsel kısaltmasıdır. Konum belli değilse logo
        sürekli değişir; her revizyonda zaman ve para yanar.
      </p>
      <p>
        <strong>2) Brand book'u sadece PDF olarak teslim almak.</strong> PDF
        kütüphanede kalır; ekibin günlük kullandığı şey Figma kütüphanesidir.
        Brand book mutlaka canlı bir Figma library ile birlikte teslim
        edilmelidir.
      </p>
      <p>
        <strong>3) Ekip eğitimini atlamak.</strong> Markayı uygulayacak olan
        ekip, kuralları en az tasarımcı kadar bilmek zorunda. 2 saatlik bir
        eğitim oturumu, sonraki üç yılı kurtarır.
      </p>

      <h2>Ne zaman yenilemeli?</h2>
      <p>
        Marka kimliğini yenileme zamanı geldiğine dair en güçlü üç sinyal:
        (a) Şirket vizyonu son üç yılda kayda değer biçimde değiştiyse,
        (b) Mevcut sistem dijital kanallarda (sosyal, mobil, video) iyi
        çalışmıyorsa, (c) Ekip kararsızlıkla karşılaştığında brand book'a
        bakmıyorsa. Bu üç sinyalden ikisi varsa, yenileme yatırımı geri öder.
      </p>

      <p className="prose-cf__cta-line">
        Bu konuda 30 dakikalık keşif görüşmesi için{" "}
        <Link href="/hizmetler/marka-kimligi">marka kimliği hizmet sayfamıza</Link>{" "}
        veya{" "}
        <Link href="/#iletisim">iletişim bölümüne</Link> bakabilirsiniz.
      </p>
    </>
  ),

  "kurumsal-web-sitesi-yenileme-karar-cercevesi": (
    <>
      <Tldr>
        <p>
          Mevcut siteyi yenilemek mi, sıfırdan kurmak mı? Karar 7 başlığa
          dayanır: SEO devri, içerik mimarisi, CMS, hız, e-ticaret, entegrasyon
          ve bakım. Çoğu kurumsal projede sıfırdan kurmak,{" "}
          <strong>yenilemekten daha hızlı ve daha ucuz</strong>{" "}
          bitiyor — şaşırtıcı ama gerçek.
        </p>
      </Tldr>

      <h2>Birinci soru: gerçekten yenileme mi gerekli?</h2>
      <p>
        Bir kurumsal site &quot;eski göründüğü&quot; için değil, iş hedefini
        karşılamadığı için yenilenir. Yenileme kararını verirken üç soruya
        dürüst cevap vermek gerekir:
      </p>
      <ul>
        <li>Site şu an aylık kaç kalifiye lead getiriyor? Hedef ne kadar?</li>
        <li>Müşteri yolculuğunda site nerede tıkanıyor? (Analytics + heatmap)</li>
        <li>Ekip içerik güncellemesini ne kadar hızlı yapabiliyor?</li>
      </ul>
      <p>
        Cevaplar net değilse, yenilemeden önce küçük bir analitik kurulum
        + 2 haftalık kullanıcı testi, yenileme bütçesinin yönünü değiştirir.
      </p>

      <h2>Platform seçimi: Next.js mi, Webflow mu, Shopify mu?</h2>
      <p>
        Genel kural değil ama pratik bir kılavuz:
      </p>
      <ul>
        <li>
          <strong>Next.js (custom):</strong> Karmaşık iş akışı, çok sayıda
          dinamik veri kaynağı, headless CMS, performans-kritik proje. Geliştirme
          esnek, bakım iç ekip veya partner gerektirir.
        </li>
        <li>
          <strong>Webflow:</strong> Marka odaklı, içerik ekibi yoğun, animasyon
          beklentisi yüksek projeler. Ekip kendi başına editleyebilir, geliştirici
          bağımlılığı düşük.
        </li>
        <li>
          <strong>Shopify:</strong> E-ticaret birinci hedefse. Stok, ödeme, kargo
          entegrasyonları, app ekosistemi.
        </li>
      </ul>
      <p>
        Karma çözümler de yaygın: Pazarlama sayfaları Webflow'da, dinamik
        ürün/uygulama Next.js'de.{" "}
        <Link href="/hizmetler/web-tasarim-gelistirme">Web tasarım & geliştirme</Link>{" "}
        sayfamızda detaylı bakıyoruz.
      </p>

      <h2>SEO devri en sık yapılan hata</h2>
      <p>
        Yeni site lansmandan sonra organik trafiğin %40-70 düşmesi tipik bir
        senaryodur — <em>SEO devri planlanmadığı zaman</em>. Devir
        planında bulunması gereken minimum kontroller:
      </p>
      <ol>
        <li>Eski URL → yeni URL 301 yönlendirme haritası</li>
        <li>Meta title/description, H1 yapısının korunması veya iyileştirilmesi</li>
        <li>Sitemap.xml + robots.txt yeniden gönderimi</li>
        <li>Yapılandırılmış veri (JSON-LD) entegrasyonu</li>
        <li>Lansman sonrası 4 hafta günlük Search Console takibi</li>
      </ol>

      <h2>Headless CMS gerçekten gerekli mi?</h2>
      <p>
        Headless CMS (Sanity, Contentful, Storyblok) marka için iki büyük
        kazanım sağlar: <strong>içerik ile sunumun ayrılması</strong> ve{" "}
        <strong>çok kanallı dağıtım</strong> (web, mobil, ekran). Ama her marka
        bunu yarın kullanmıyor. Headless CMS'i şu durumlarda öneriyoruz:
      </p>
      <ul>
        <li>Yılda 200'den fazla içerik güncellemesi yapılıyorsa</li>
        <li>Mobil uygulama veya başka kanallar planlanıyorsa</li>
        <li>Birden fazla editör/yazar var ve onay akışı gerekiyorsa</li>
      </ul>
      <p>
        Bu üçü yoksa, Webflow CMS veya basit bir Markdown akışı çoğu zaman
        daha hızlı sonuç verir.
      </p>

      <h2>Performans — bir tasarım kararıdır</h2>
      <p>
        Core Web Vitals (LCP, INP, CLS) artık ranking sinyali. Lansmandaki
        kayıpların büyük kısmı performans regresyonundan kaynaklanır.
        Hedef değerler:
      </p>
      <ul>
        <li>LCP &lt; 2.5s</li>
        <li>INP &lt; 200ms</li>
        <li>CLS &lt; 0.1</li>
        <li>Mobile Lighthouse skoru &gt; 90</li>
      </ul>
      <p>
        Tasarımcının görsel başına ayırdığı kilobayt, geliştiricinin
        kullandığı font sayısı, üçüncü taraf scriptlerin yüklenme stratejisi —
        hepsi performans kararıdır.
      </p>

      <h2>Takvim: 4-10 hafta, kapsama göre</h2>
      <p>
        Tek sayfalık landing 4-5 hafta, kurumsal site (8-15 sayfa) 6-8 hafta,
        e-ticaret (Shopify + tema) 8-10 hafta, headless mimarili özel proje
        10-14 hafta. Bu süreler her hafta canlı demo + müşteri geri bildirimi
        içerir.
      </p>

      <h2>Lansman sonrası: ilk 90 gün kritik</h2>
      <p>
        Lansman bitiş değil, başlangıçtır. İlk 90 günde yapılması gerekenler:
      </p>
      <ul>
        <li>Haftalık analytics raporu, dönüşüm hunilerinin gözlemi</li>
        <li>A/B testleriyle CTA, başlık, form alanlarının optimizasyonu</li>
        <li>İlk bug bildirimleri için hızlı yanıt hattı</li>
        <li>İçerik takvimine bağlı düzenli yayın</li>
      </ul>

      <p className="prose-cf__cta-line">
        Mevcut sitenizi değerlendirmemizi ister misiniz?{" "}
        <Link href="/hizmetler/web-tasarim-gelistirme">Web tasarım & geliştirme</Link>{" "}
        sayfamızdan veya{" "}
        <Link href="/#iletisim">iletişim bölümünden</Link> ulaşın; 30 dakikalık
        ücretsiz keşif görüşmesi yapıyoruz.
      </p>
    </>
  ),

  "sosyal-medya-ajansi-mi-ici-ekip-mi": (
    <>
      <Tldr>
        <p>
          Aylık 60.000₺ altı bütçede ajans, 120.000₺ üstünde iç ekip + danışman
          modeli, arada hibrit yapılar daha verimli.{" "}
          <strong>Toplam maliyet</strong>{" "}
          (maaş + ekipman + yazılım + dış prodüksiyon + yönetim zamanı), ajans
          ücretinin neredeyse her zaman üzerinde çıkar.
        </p>
      </Tldr>

      <h2>Gerçek maliyet karşılaştırması</h2>
      <p>
        İç ekip maliyetini sadece maaş üzerinden hesaplamak en yaygın hata.
        Türkiye'de orta seviye bir sosyal medya uzmanının gerçek aylık
        maliyeti (maaş + SGK + yan haklar + ekipman amortismanı):{" "}
        <strong>~55-75.000₺</strong>. Tek bir uzman ile aktif bir markayı
        sürdürmek mümkün değil; minimum kurgu: 1 uzman + 1 içerik üretici +
        yarı zamanlı tasarım/kurgu. Toplam: aylık 130-180.000₺ taban.
      </p>
      <p>
        Bir ajansın orta segment paketi aynı kapsam için 60-110.000₺/ay
        bandında. Aradaki fark <em>esneklikten</em> kaynaklanıyor: ajans
        yükü tek bir markaya değil, portföyüne yayıyor.
      </p>

      <h2>Karar matrisi: 5 kriter</h2>
      <p>
        Aşağıdaki beş soruya verdiğiniz cevap, modelinizi belirler:
      </p>
      <ol>
        <li>
          <strong>İçerik hacmi:</strong> Aylık 30+ post + 12+ reels + günlük
          story üretiyor musunuz? Hacim büyüdükçe iç ekip avantajlı.
        </li>
        <li>
          <strong>Marka sesinin karmaşıklığı:</strong> Ses tonu nüanslıysa ve
          sektör bilgisi gerekiyorsa (B2B fintech, sağlık, hukuk) iç ekip /
          uzun süreli ajans daha güvenli.
        </li>
        <li>
          <strong>Hız beklentisi:</strong> Trend'e 24 saatte cevap vermek
          istiyorsanız iç ekibin reaksiyon süresi daha kısa. Ajansla bunu
          sağlamak için &quot;hızlı şerit&quot; sözleşmesi şart.
        </li>
        <li>
          <strong>Bütçe öngörülebilirliği:</strong> Aylık sabit fatura
          istiyorsanız ajans modeli daha temiz; iç ekip değişken maliyetler
          getirir (ek prodüksiyon, freelancer).
        </li>
        <li>
          <strong>Yönetim kapasitesi:</strong> İç ekibi yönetecek bir kıdemli
          kişi var mı? Yoksa &quot;daha ucuz&quot; iç ekip, bir yıl içinde
          ajanstan pahalı olur.
        </li>
      </ol>

      <h2>Hibrit model — en az takdir edilen seçenek</h2>
      <p>
        Pratiğin gösterdiği şudur: en başarılı kurguların yarısından çoğu
        hibrit. Şöyle çalışır:
      </p>
      <ul>
        <li>
          <strong>İç ekipte:</strong> 1 sosyal medya editörü (marka sesi
          sahibi), 1 community manager (yorum/DM)
        </li>
        <li>
          <strong>Ajansta:</strong> Aylık strateji, çekim/kurgu, motion
          grafikler, performans reklam, raporlama
        </li>
      </ul>
      <p>
        Bu kurgu marka sesini koruyor (içerideki editör), prodüksiyon kalitesini
        sürdürüyor (ajansın seti) ve toplam maliyeti aylık 90-130.000₺
        bandında tutuyor.
      </p>

      <h2>Ajans seçerken bakılacak beş şey</h2>
      <ol>
        <li>
          Portföyünde <em>sizin sektörünüze yakın</em> 2-3 marka var mı?
        </li>
        <li>
          Çekim/kurgu iç ekipte mi yoksa her seferinde dışarıdan mı geliyor?
        </li>
        <li>
          Aylık raporu ölçtüğü metrik {`"`}beğeni/takipçi{`"`} mi, yoksa{" "}
          {`"`}attribution, save oranı, dönüşüm{`"`} mu?
        </li>
        <li>
          Topluluk yönetimi dahil mi yoksa ek paket mi?
        </li>
        <li>
          Minimum sözleşme süresi 6 ay mı (sağlıklı) yoksa 1 ay mı (riskli)?
        </li>
      </ol>

      <h2>İç ekip kurarken üç tuzak</h2>
      <p>
        <strong>1) Tek uzmana yüklemek.</strong> Sosyal medya iki kişilik bir
        iştir minimum: editorial + prodüksiyon. Tek uzman 6 ayda tükenir.
      </p>
      <p>
        <strong>2) Ekipmana yatırım yapmamak.</strong> Kamera, ışık, ses, kurgu
        yazılımı için aylık 8-12.000₺ amortisman düşmek gerekir; bu bütçe
        ayrılmadığında üretim duraklar.
      </p>
      <p>
        <strong>3) Yönetici atamamak.</strong> Sosyal medya ekibi raporlayacağı
        bir kıdemliyi (CMO, marka direktörü) ister. Yoksa kararlar gecikir,
        zaman algısı kaybolur.
      </p>

      <p className="prose-cf__cta-line">
        Modelinizi birlikte değerlendirmek isterseniz{" "}
        <Link href="/hizmetler/sosyal-medya-icerik">sosyal medya & içerik</Link>{" "}
        sayfamıza veya{" "}
        <Link href="/#iletisim">iletişim bölümüne</Link> bakabilirsiniz.
      </p>
    </>
  ),

  "cac-ltv-performans-pazarlama-rehberi": (
    <>
      <Tldr>
        <p>
          CAC ve LTV iki tane sayıdan ibaret değil; bir{" "}
          <strong>karar makinesi</strong>. CAC &lt; LTV ×{" "}
          <em>0.33</em> hedefi pazarlamanın sağlık göstergesidir.
          Attribution yanlış kurulduğunda her şey çöker — Türkiye'de en sık
          gördüğümüz sorun GA4 + Meta ile reklam platformu arasındaki yanlı
          atıflama.
        </p>
      </Tldr>

      <h2>İki kavram, üç formül</h2>
      <p>
        <strong>CAC (Customer Acquisition Cost):</strong>{" "}
        Belirli bir dönemde yeni müşteri başına harcanan toplam pazarlama ve
        satış maliyeti.
      </p>
      <p>
        <code>CAC = (Toplam Pazarlama + Satış Gideri) / Yeni Müşteri Sayısı</code>
      </p>
      <p>
        <strong>LTV (Lifetime Value):</strong>{" "}
        Bir müşterinin yaşam boyu marka için yarattığı net brüt kâr.
      </p>
      <p>
        <code>
          LTV = (Ortalama Sipariş Tutarı × Satın Alma Sıklığı × Müşteri Ömrü) ×
          Brüt Marj
        </code>
      </p>
      <p>
        <strong>Sağlık oranı:</strong>{" "}
        <code>LTV / CAC &gt; 3</code> hedef. 3'ün altı sıkıntı, 1'in altı
        yangın.
      </p>

      <h2>Türkiye için 2026 benchmark aralıkları</h2>
      <p>
        Aşağıdaki rakamlar ortalamadır; sektör ve marka olgunluğuna göre
        ±%40 değişebilir. Yine de tartışmayı başlatacak bir referans noktası.
      </p>
      <ul>
        <li>
          <strong>D2C e-ticaret (giyim, kozmetik):</strong> CAC 350-900₺, LTV
          1.500-4.000₺
        </li>
        <li>
          <strong>Subscription / SaaS B2C:</strong> CAC 250-600₺, LTV
          2.000-6.500₺
        </li>
        <li>
          <strong>B2B yazılım (KOBİ):</strong> CAC 8.000-25.000₺, LTV
          80.000-250.000₺
        </li>
        <li>
          <strong>Lokal hizmet (restoran, kuaför, klinik):</strong> CAC
          80-220₺, LTV 1.200-4.500₺
        </li>
      </ul>

      <h2>Attribution: en pahalı boşluk</h2>
      <p>
        Reklam platformları (Meta, Google, TikTok) varsayılan olarak
        atıflamalarını <em>kendi lehlerine</em> yapıyor. Üç platform birden
        aynı satışı &quot;benim&quot; diye sayabilir. Bu yüzden tek doğru
        kaynak şirketinizin GA4'ü veya — ideal olarak — server-side bir
        attribution kurgusu.
      </p>
      <p>
        Minimum kurulum kontrol listesi:
      </p>
      <ol>
        <li>GA4'te enhanced measurement + dönüşüm event'ları</li>
        <li>Meta CAPI (Conversions API) — server-side</li>
        <li>Google Ads enhanced conversions</li>
        <li>UTM parametrelerinin sıkı disiplinle kullanılması</li>
        <li>Aylık olarak GA4 ↔ platform raporlarının çapraz kontrolü</li>
      </ol>

      <h2>Kanal mix kararı</h2>
      <p>
        Pratiğin gösterdiği şudur: tek kanala bağlı reklam stratejisi en
        kırılgan yapıdır. Sağlıklı bir kurgu:
      </p>
      <ul>
        <li>
          <strong>%40-55:</strong> Performans/conversion ağırlıklı kanal (Meta
          veya Google Ads)
        </li>
        <li>
          <strong>%20-30:</strong> Discovery/intent ikinci kanal (TikTok, YouTube
          Shorts, Google Display)
        </li>
        <li>
          <strong>%15-25:</strong> Marka / üst huni (sponsor içerik, OOH,
          podcast)
        </li>
      </ul>
      <p>
        Mix oranı dönemsel hedefe göre değişir: yeni lansmanlarda marka payı
        artar, olgun ürünlerde performans payı.
      </p>

      <h2>İlk 90 günde ne yapılır?</h2>
      <ol>
        <li>
          Mevcut CAC ve LTV'yi temel hat olarak ölç (hesap yoksa tahmin yap;
          önemli olan sayıya başlamak)
        </li>
        <li>Attribution kurulumunu tamamla (CAPI, GA4, UTM)</li>
        <li>Yaratıcı varyantları çok çeşitli tut: 1 mesaj, 6+ kreatif</li>
        <li>Haftalık 3-5 saatlik kreatif testi (görsel, hook, başlık)</li>
        <li>Aylık &quot;sağlık oranı&quot; raporu: LTV/CAC, CAC trend, geri ödeme süresi</li>
      </ol>

      <h2>Sık yapılan üç pahalı hata</h2>
      <p>
        <strong>1) Sadece son tıklamaya bakmak.</strong> Marka kanallarının
        katkısını görmez, son kliği alan platforma fazla bütçe akar.
      </p>
      <p>
        <strong>2) Kreatif testini ihmal etmek.</strong> Reklam yorgunluğu
        2-3 haftada gelir. Sürekli yeni kreatif olmadan CPM artar, CAC patlar.
      </p>
      <p>
        <strong>3) Kohort analizi yapmamak.</strong> LTV'nin gerçek değeri
        cohort bazında ölçülmeden anlaşılmaz. Aylık edinim kohortunun 6 ay
        sonraki davranışı tek doğru veri.
      </p>

      <p className="prose-cf__cta-line">
        Mevcut attribution kurulumunuzu birlikte gözden geçirelim mi?{" "}
        <Link href="/hizmetler/dijital-reklam">Dijital reklam hizmet sayfamıza</Link>{" "}
        veya doğrudan{" "}
        <Link href="/#iletisim">iletişim bölümüne</Link> bakın.
      </p>
    </>
  ),

  "mobil-uygulama-mi-mobile-web-mi": (
    <>
      <Tldr>
        <p>
          Mobil uygulamayı haklı çıkaran şey güzel görünmek değil,{" "}
          <strong>kullanım sıklığı + donanım gereksinimi + push iletişimi</strong>.
          Sekiz sorudan dördüne &quot;evet&quot; diyemiyorsanız, mobile web /
          PWA çoğu zaman daha hızlı geri öder.
        </p>
      </Tldr>

      <h2>Sekiz soruluk karar çerçevesi</h2>
      <p>
        Aşağıdaki sorulara &quot;net evet&quot; cevabınız varsa, native mobil
        uygulama mantıklı:
      </p>
      <ol>
        <li>Kullanıcı uygulamayı haftada en az 3 kez açacak mı?</li>
        <li>Push notification dönüşüm yaratacak mı? (e-ticaret hatırlatma, hizmet randevu, oyun retansiyonu)</li>
        <li>Kamera, GPS, biometric, NFC gibi donanım yetenekleri zorunlu mu?</li>
        <li>Offline çalışma kritik mi? (saha hizmeti, lojistik)</li>
        <li>Performans-kritik animasyon veya AR/VR var mı?</li>
        <li>Tekrar eden satın alma var mı? (subscription, sipariş)</li>
        <li>Müşteri-personel etkileşimi olacak mı? (sohbet, sipariş takibi)</li>
        <li>Uygulama mağazasında bulunabilir olmak iş hedefine değer katıyor mu?</li>
      </ol>
      <p>
        4'ten az &quot;evet&quot; varsa, mobile web / PWA muhtemelen daha
        verimli çözüm.
      </p>

      <h2>Native, cross-platform veya PWA?</h2>
      <ul>
        <li>
          <strong>Native (Swift, Kotlin):</strong> Maksimum performans,
          platform-spesifik özellikler. Maliyet en yüksek; iki ayrı kod tabanı.
        </li>
        <li>
          <strong>Cross-platform (React Native, Flutter):</strong> Tek kod
          tabanı, %85-95 paylaşım. Çoğu içerik/üretkenlik uygulaması için
          yeterli.
        </li>
        <li>
          <strong>PWA (Progressive Web App):</strong> Mobile web'in app gibi
          davranan hâli. Push (kısıtlı iOS desteği), offline cache, ana ekrana
          ekleme. Mağaza yok.
        </li>
      </ul>

      <h2>Maliyet aralıkları (2026 Türkiye)</h2>
      <ul>
        <li>
          <strong>MVP (1 platform, 6-10 ekran):</strong> 400.000-900.000₺
        </li>
        <li>
          <strong>Standart (cross-platform, 12-20 ekran, backend dahil):</strong> 900.000-2.2M₺
        </li>
        <li>
          <strong>Karmaşık (native, AR / oyun / video):</strong> 2.2M₺ ve üzeri
        </li>
        <li>
          <strong>PWA:</strong> Genelde web sitesi bütçesinin %15-25'i ek
        </li>
      </ul>

      <h2>Store ekonomisi: yüzde 30 kuralı</h2>
      <p>
        Hem App Store hem Google Play, in-app satın alma ve subscription'da
        ortalama %30 komisyon alır (küçük geliştiriciler için ilk yıl %15).
        Bu kesinti, marketing CAC'inizi ve birim ekonomilerinizi doğrudan
        etkiler. Dijital ürün satıyorsanız hesabınıza katmak zorundasınız.
      </p>

      <h2>Yayın süreci ve sürpriz maliyetler</h2>
      <p>
        Uygulamayı yazmak işin yarısı. Diğer yarısı:
      </p>
      <ul>
        <li>App Store Connect + Google Play Console hesabı (yıllık 99 USD + tek seferlik 25 USD)</li>
        <li>Privacy Policy, App Privacy ekranı, KVKK uyumu</li>
        <li>Screenshot, video önizleme, lokalizasyon</li>
        <li>Review süreci (red gelirse ek 1-3 hafta)</li>
        <li>Lansman sonrası crash monitoring + analytics</li>
      </ul>

      <h2>Lansman sonrası retansiyon</h2>
      <p>
        Bir uygulamayı yapmak değil, ayda 2-3 kez kullanılmasını sağlamak iş.
        Tipik retansiyon yumru noktaları:
      </p>
      <ul>
        <li>Onboarding: Gün 1 retansiyon</li>
        <li>İlk push: Gün 3-7 retansiyon</li>
        <li>Birinci değer anı: Gün 14 retansiyon</li>
        <li>Birinci satın alma / dönüşüm: Gün 30</li>
      </ul>
      <p>
        Her aşamada A/B test + analytics + push iletişimi devrede olmalı.
        Aksi takdirde edinim CAC'i geri dönmez.
      </p>

      <h2>Hangi yaklaşım sizin için?</h2>
      <p>
        Pratik bir karar haritası:
      </p>
      <ul>
        <li>
          <strong>İçerik tüketimi (blog, haber, e-ticaret katalog):</strong>{" "}
          Mobile web / PWA yeterli
        </li>
        <li>
          <strong>Tekrar eden işlem (banka, ulaşım, sipariş):</strong> Native /
          cross-platform
        </li>
        <li>
          <strong>Sosyal etkileşim (mesajlaşma, oyun, fitness):</strong> Native
        </li>
        <li>
          <strong>Saha personeli iç araç:</strong> Cross-platform veya PWA
        </li>
      </ul>

      <p className="prose-cf__cta-line">
        Projenizin doğru yaklaşımını birlikte değerlendirelim mi?{" "}
        <Link href="/hizmetler/mobil-uygulama-gelistirme">Mobil uygulama geliştirme</Link>{" "}
        sayfamıza veya{" "}
        <Link href="/#iletisim">iletişim bölümüne</Link> ulaşın.
      </p>
    </>
  ),
};

export function getPostBody(slug: string): ReactNode | null {
  return POST_BODIES[slug] ?? null;
}
