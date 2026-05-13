import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Factory — Marka inşa ederiz.",
  description:
    "İstanbul merkezli bağımsız kreatif stüdyo. Web, kimlik, içerik ve performans pazarlaması.",
  openGraph: {
    title: "Creative Factory — Marka inşa ederiz.",
    description: "İstanbul merkezli bağımsız kreatif stüdyo.",
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
    <html lang="tr" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
