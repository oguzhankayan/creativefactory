import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppFab from "@/components/WhatsAppFab";

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const SITE_URL = "https://creativefactory.tr";
const SITE_TITLE = "Creative Factory · İstanbul Kreatif Ajansı";
const SITE_DESC =
  "İstanbul merkezli bağımsız kreatif ajans. Web tasarım, marka kimliği, sosyal medya, dijital reklam, motion grafik ve mobil uygulama geliştirme tek elden.";
const SITE_KEYWORDS = [
  "kreatif ajans",
  "kreatif ajans istanbul",
  "dijital ajans istanbul",
  "marka kimliği ajansı",
  "web tasarım ajansı",
  "sosyal medya ajansı",
  "dijital reklam ajansı",
  "performans pazarlama ajansı",
  "motion grafik ajansı",
  "mobil uygulama geliştirme ajansı",
  "marka tasarım stüdyosu",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Creative Factory",
  },
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Creative Factory",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Creative Factory" }],
  creator: "Creative Factory",
  category: "creative agency",
  verification: {
    google: "4XnuJttbo5RB7NfxOz77U8ti28XxtSAxQfo1ShWYSRk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={hanken.variable}>
      <body>
        <a href="#main" className="skip-link">Ana içeriğe atla</a>
        {children}
        <WhatsAppFab />
        <CookieConsent />
      </body>
    </html>
  );
}
