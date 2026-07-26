import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KVKK",
  description: "Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalPage
      kicker="Yasal"
      title="KVKK Aydınlatma Metni"
      updated="14 Mayıs 2026"
    >
      <h2>1. Veri Sorumlusu</h2>
      <p>
        Creative Factory (&quot;biz&quot;, &quot;şirket&quot;), 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla, bu metinde belirtilen amaçlarla
        kişisel verilerinizi işlemektedir.
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <p>İletişim formu veya doğrudan iletişim yoluyla aşağıdaki veriler işlenebilir:</p>
      <ul>
        <li>Kimlik: Ad ve soyad</li>
        <li>İletişim: E-posta adresi, telefon numarası</li>
        <li>Müşteri işlem: Talep konusu, proje detayları, mesaj içeriği</li>
        <li>İşlem güvenliği: IP adresi, oturum verileri (yalnızca site güvenliği için)</li>
      </ul>

      <h2>3. İşleme Amacı</h2>
      <ul>
        <li>İletişim taleplerine yanıt vermek ve teklif sürecini yürütmek</li>
        <li>Hizmet sözleşmesi kurulması ve ifası</li>
        <li>Müşteri memnuniyeti ölçümü ve geri bildirim</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2>4. Hukuki Sebep</h2>
      <p>
        Kişisel verileriniz KVKK madde 5/2 uyarınca (a) sözleşmenin kurulması veya ifası,
        (b) hukuki yükümlülük, (c) ilgili kişinin temel hak ve özgürlüklerine zarar
        vermemek kaydıyla meşru menfaat ve (d) ilgili kişinin açık rızası hukuki
        sebeplerine dayanılarak işlenmektedir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Kişisel verileriniz; hizmet sağladığımız altyapı sağlayıcılarına (form gönderimi,
        e-posta, barındırma) güvenlik standartlarına uygun şekilde aktarılabilir. Yurt
        dışı aktarım yalnızca açık rıza veya KVKK madde 9 istisnaları kapsamında yapılır.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Veriler, işleme amacının gerektirdiği süre boyunca, en fazla aktif müşteri
        ilişkisinin sona ermesinden itibaren 10 yıl süreyle saklanır. Süre sonunda
        silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>KVKK madde 11 uyarınca aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Eksik veya yanlış işlenmiş veriler için düzeltme isteme</li>
        <li>Silme veya yok etme talep etme</li>
        <li>Otomatik sistemlerle yapılan analizlere itiraz etme</li>
        <li>Kanuna aykırı işleme sonucu zarara uğrarsanız tazminat talep etme</li>
      </ul>

      <h2>8. İletişim</h2>
      <p>
        Haklarınızı kullanmak için: <a href="mailto:hi@creativefactory.tr">hi@creativefactory.tr</a>{" "}
        adresinden bize ulaşabilirsiniz. Talepler 30 gün içinde ücretsiz olarak yanıtlanır.
      </p>
    </LegalPage>
  );
}
