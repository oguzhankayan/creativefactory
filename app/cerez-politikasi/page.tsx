import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

const SITE_URL = "https://creativefactory.tr";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Creative Factory web sitesinde kullanılan çerezler, türleri, amaçları ve tercihlerinizi nasıl yönetebileceğinize dair bilgi.",
  alternates: { canonical: `${SITE_URL}/cerez-politikasi` },
  openGraph: {
    title: "Çerez Politikası · Creative Factory",
    description: "Web sitesinde kullanılan çerezler ve tercih yönetimi.",
    url: `${SITE_URL}/cerez-politikasi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Creative Factory",
  },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage
      kicker="Yasal"
      title="Çerez Politikası"
      updated="14 Mayıs 2026"
    >
      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerez (cookie), bir web sitesini ziyaret ettiğinizde tarayıcınızda
        saklanan küçük bir metin dosyasıdır. Sitenin temel işlevlerini
        sürdürmesini, tercihlerinizi hatırlamasını ve ziyaretçi davranışı
        hakkında anonim ölçüm yapılmasını sağlar.
      </p>

      <h2>2. Hangi Çerezleri Kullanıyoruz?</h2>
      <p>
        Creative Factory web sitesinde aşağıdaki çerez türleri kullanılabilir:
      </p>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için
          gereklidir. Örneğin çerez tercihinizi hatırlamak amacıyla
          tarayıcınızda{" "}
          <code>cf-cookie-consent</code> anahtarıyla yerel bir kayıt tutulur.
          Bu çerez kişisel veri içermez.
        </li>
        <li>
          <strong>Performans / istatistik çerezleri:</strong> Site
          kullanımını anonim olarak ölçmek için kullanılır (sayfa görüntüleme,
          oturum süresi). Bu çerezler yalnızca açık onay verdiğinizde
          yüklenir.
        </li>
        <li>
          <strong>Üçüncü taraf çerezleri:</strong> İletişim formu, harita,
          video gömme veya analitik servis sağlayıcıları kendi çerezlerini
          yerleştirebilir. Bu sağlayıcıların kendi politikaları geçerlidir.
        </li>
      </ul>

      <h2>3. Çerez Tercihi</h2>
      <p>
        Siteye ilk girişinizde alt köşede bir çerez bildirimi gösterilir.
        &quot;Kabul et&quot; veya &quot;Reddet&quot; seçeneğiyle tercihinizi
        belirleyebilirsiniz. Tercihiniz tarayıcınızın yerel deposunda
        saklanır; yalnızca sizin cihazınızda tutulur.
      </p>
      <p>
        Tercihinizi sıfırlamak için tarayıcı geçmişinizden{" "}
        <em>creativefactory.tr</em> alan adına ait verileri temizleyebilirsiniz.
      </p>

      <h2>4. Tarayıcıdan Yönetim</h2>
      <p>
        Çerezleri tarayıcı ayarlarınızdan da yönetebilirsiniz. Zorunlu
        çerezleri engellemek sitenin bazı işlevlerinin çalışmasını
        engelleyebilir. Ana tarayıcılar için yönlendirmeler:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/tr/kb/cerezler-bilgi-saklayan-dosyalar" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Apple Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/tr-tr/microsoft-edge" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>5. Kişisel Veri ile İlişki</h2>
      <p>
        Çerezler yoluyla işlenen veriler kişisel veri niteliği taşıyorsa,
        bu işleme 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) kapsamında yürütülür. Detaylı bilgi için{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a> sayfamıza bakabilirsiniz.
      </p>

      <h2>6. Güncellemeler</h2>
      <p>
        Bu politika, yasal düzenlemeler veya site işlevindeki değişiklikler
        nedeniyle güncellenebilir. Güncel sürüm her zaman bu sayfada
        yayımlanır.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Çerez kullanımıyla ilgili soru ve talepleriniz için:{" "}
        <a href="mailto:hi@creativefactory.tr">hi@creativefactory.tr</a>
      </p>
    </LegalPage>
  );
}
