import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı · Creative Factory",
  description: "Aradığın sayfa taşınmış, kaldırılmış veya adresi yanlış yazılmış olabilir.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="nf">
        <div className="nf__inner">
          <span className="kicker">404 · Sayfa bulunamadı</span>
          <h1 className="nf__num" aria-hidden="true">404</h1>
          <h2 className="nf__title">Bu sayfayı kaybettik.</h2>
          <p className="nf__sub">
            Aradığın sayfa taşınmış, kaldırılmış veya adres yanlış yazılmış olabilir. Aşağıdan
            devam et.
          </p>

          <div className="nf__cta">
            <Link href="/" className="bigbtn">
              <span className="bigbtn__label">Ana sayfa</span>
              <span className="bigbtn__arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/#iletisim" className="ghostlink">
              Konuşalım
            </Link>
          </div>

          <section className="nf__quick" aria-labelledby="nf-quick-h">
            <h3 id="nf-quick-h" className="nf__quick-h">
              <span className="kicker">Hızlı bağlantılar</span>
            </h3>
            <ul className="nf__quick-list">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="nf__quick-link">
                    <span className="nf__quick-n">{s.n}</span>
                    <span className="nf__quick-title">{s.title}</span>
                    <span className="nf__quick-arrow" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
