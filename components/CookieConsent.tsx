"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cf-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accept" | "reject") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Çerez tercihi">
      <p className="cookie__text">
        Siteyi geliştirmek için temel çerezler kullanıyoruz. Detaylar için{" "}
        <a href="/cerez-politikasi">Çerez Politikası</a>.
      </p>
      <div className="cookie__actions">
        <button type="button" className="cookie__btn cookie__btn--ghost" onClick={() => decide("reject")}>
          Reddet
        </button>
        <button type="button" className="cookie__btn cookie__btn--solid" onClick={() => decide("accept")}>
          Kabul et
        </button>
      </div>
    </div>
  );
}
