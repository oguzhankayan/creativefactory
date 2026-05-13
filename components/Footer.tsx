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
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
        </nav>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Creative Factory · Bomonti, İstanbul</span>
        <span className="footer__legal">
          <a href="#">KVKK</a>
          <a href="#">Çerez</a>
          <a href="#">Kullanım</a>
        </span>
        <a href="#top" className="footer__up">
          Yukarı ↑
        </a>
      </div>
    </footer>
  );
}
