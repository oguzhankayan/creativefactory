"use client";

import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  kicker?: string;
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPage({ kicker = "Yasal", title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main id="main" className="legal">
        <div className="legal__topbar">
          <Link href="/" className="legal__back">
            <span aria-hidden="true">←</span>
            <span>Ana sayfa</span>
          </Link>
          <span className="legal__crumbs">
            <span className="dim">Belge</span>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </span>
        </div>

        <header className="legal__hero">
          <span className="kicker">{kicker}</span>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__updated">Son güncelleme: {updated}</p>
        </header>

        <article className="legal__body">{children}</article>
      </main>
      <Footer />
    </>
  );
}
