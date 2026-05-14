const NAV_EN = [
  { label: "Services", href: "/en#services" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export default function FooterEn() {
  return (
    <footer className="footer" id="studio">
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
        <nav className="footer__nav" aria-label="Footer menu">
          {NAV_EN.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <span className="footer__sep" aria-hidden="true">
            /
          </span>
          <a href="/" aria-label="Türkçe sürüm">TR</a>
          <a href="https://www.instagram.com/creativefactory.tr" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Creative Factory · Silivri, Istanbul</span>
        <span className="footer__legal">
          <a href="/kvkk">KVKK</a>
          <a href="/cerez-politikasi">Cookie policy</a>
          <a href="/kullanim-kosullari">Terms</a>
        </span>
        <a href="#top" className="footer__up">
          Top ↑
        </a>
      </div>
    </footer>
  );
}
