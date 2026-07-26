"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The root layout can only declare one <html lang>, but /en serves English.
// This keeps the document language honest for screen readers and translation
// tools, and renders the skip link in the language of the page it sits on.
export default function LocaleSync() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "tr";
  }, [isEn]);

  return (
    <a href="#main" className="skip-link">
      {isEn ? "Skip to main content" : "Ana içeriğe atla"}
    </a>
  );
}
