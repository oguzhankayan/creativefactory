import { AtSign } from "lucide-react";

const footerLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark px-5 pb-10 pt-[120px] md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left */}
          <div>
            <span className="font-heading text-[18px] font-bold text-white">
              Creative Factory
            </span>
            <p className="mt-2 font-body text-[14px] text-white/65">
              İstanbul&apos;dan markalara değer katıyoruz.
            </p>
          </div>

          {/* Center */}
          <nav className="flex items-center gap-6" aria-label="Alt menü">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] font-medium text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <a
            href="https://instagram.com/creativefactory.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded-sm"
            aria-label="Instagram"
          >
            <AtSign size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/[0.08] pt-6">
          <p className="font-body text-[13px] text-white/65">
            &copy; 2026 Creative Factory. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
