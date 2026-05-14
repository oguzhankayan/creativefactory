import { NAV } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="footer" id="studyo">
      <div className="footer__row">
        <a className="footer__brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
            <span className="brand-mark__dot" />
          </span>
          <span>
            Creative Factory<sup>©</sup>
          </span>
        </a>
        <nav className="footer__nav" aria-label="Alt menü">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <span className="footer__sep" aria-hidden="true">
            /
          </span>
          <a href="https://www.instagram.com/creativefactory.tr" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Creative Factory · Silivri, İstanbul</span>
        <span className="footer__legal">
          <a href="/kvkk">KVKK</a>
          <a href="/cerez-politikasi">Çerez politikası</a>
          <a href="/kullanim-kosullari">Kullanım koşulları</a>
        </span>
        <a href="#top" className="footer__up">
          Yukarı ↑
        </a>
      </div>
    </footer>
  );
}
