import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Creative Factory web sitesi ve hizmetleri için kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Yasal"
      title="Kullanım Koşulları"
      updated="14 Mayıs 2026"
    >
      <h2>1. Taraflar ve Kabul</h2>
      <p>
        Bu kullanım koşulları, Creative Factory (&quot;şirket&quot;) tarafından işletilen{" "}
        <strong>creativefactory.tr</strong> web sitesinin kullanımını düzenler. Siteyi
        ziyaret ederek bu koşulları kabul etmiş sayılırsınız.
      </p>

      <h2>2. Hizmetlerin Kapsamı</h2>
      <p>
        Site; Creative Factory hizmetleri hakkında bilgi vermek, iletişim kurmak ve
        teklif almak amacıyla yayımlanır. Hizmet sözleşmeleri ayrı bir doküman ile
        kurulur; site içeriği bağlayıcı bir teklif değildir.
      </p>

      <h2>3. Fikri Mülkiyet</h2>
      <p>
        Site içeriği (metin, görsel, tasarım, kod) Creative Factory&apos;ye aittir. İzin
        alınmaksızın çoğaltılamaz, dağıtılamaz veya türev çalışmalara konu edilemez.
        Müşteri projeleri kapsamında üretilen çıktıların telif hakkı, ilgili hizmet
        sözleşmesinde belirtilir.
      </p>

      <h2>4. Kullanıcı Yükümlülükleri</h2>
      <ul>
        <li>Siteyi yürürlükteki mevzuata aykırı amaçlarla kullanmamak</li>
        <li>İletişim formunda doğru bilgi vermek</li>
        <li>Site güvenliğini tehlikeye atacak girişimlerden kaçınmak</li>
        <li>Üçüncü kişilerin haklarını ihlal etmemek</li>
      </ul>

      <h2>5. Bağlantılar</h2>
      <p>
        Site, üçüncü taraf web sitelerine bağlantılar içerebilir (Instagram, e-posta vb.).
        Bu sitelerin içeriklerinden ve gizlilik uygulamalarından Creative Factory sorumlu
        değildir.
      </p>

      <h2>6. Sorumluluk Sınırı</h2>
      <p>
        Site içeriği &quot;olduğu gibi&quot; sunulur. Bilgilerin güncelliği ve doğruluğu için
        makul çaba gösterilse de Creative Factory; siteyi kullanımdan doğan doğrudan
        veya dolaylı zararlardan sorumlu tutulamaz.
      </p>

      <h2>7. Değişiklikler</h2>
      <p>
        Creative Factory; bu koşulları önceden bildirim yapmaksızın değiştirme hakkını
        saklı tutar. Güncel sürüm bu sayfada yayımlanır.
      </p>

      <h2>8. Uygulanacak Hukuk</h2>
      <p>
        Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Doğacak uyuşmazlıklarda
        İstanbul mahkemeleri ve icra daireleri yetkilidir.
      </p>

      <h2>9. İletişim</h2>
      <p>
        Sorular için: <a href="mailto:hi@creativefactory.tr">hi@creativefactory.tr</a>
      </p>
    </LegalPage>
  );
}
