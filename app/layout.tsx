import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Factory | Kreatif Ajans — Web Tasarım, Marka Kimliği, Dijital Strateji",
  description:
    "Creative Factory, işletmelere web tasarım, marka kimliği, sosyal medya yönetimi ve dijital reklam hizmetleri sunan İstanbul merkezli kreatif ajanstır.",
  keywords: "kreatif ajans, web tasarım, marka kimliği, dijital reklam, sosyal medya, İstanbul",
  openGraph: {
    title: "Creative Factory | Kreatif Ajans",
    description: "Sadece tasarlamıyoruz. Marka inşa ediyoruz.",
    type: "website",
    locale: "tr_TR",
    url: "https://creativefactory.com.tr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
