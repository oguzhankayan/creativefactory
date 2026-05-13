"use client";

import Reveal from "./Reveal";
import { Testimonials, type Testimonial } from "./ui/unique-testimonial";

const DATA: Testimonial[] = [
  {
    id: 1,
    quote: "Sıfırdan brand sistemi kurduk, lansmanda hazırız. Tek elden uçtan uca.",
    author: "Aylin Karaca",
    role: "Marka Direktörü · Iconica",
    avatar:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Web tarafı hem hızlı hem ölçeklenebilir çıktı. Üç ay süren işi altı haftada bitirdiler.",
    author: "Burak Demir",
    role: "CTO · Akasya Token",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Sosyal medya tonu nihayet markamıza benziyor. Topluluk kendini anlatıyor şimdi.",
    author: "Ezgi Yıldız",
    role: "Pazarlama · Köpüklü",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testi" id="referanslar" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-head section-head--center">
        <Reveal as="div">
          <span className="kicker">Referanslar — 03 ses</span>
        </Reveal>
        <Reveal as="h2" delay={100} className="section-h section-h--center">
          Müşterilerimiz <span className="ink">ne diyor.</span>
        </Reveal>
      </div>
      <div style={{ padding: "0 var(--gutter) 120px" }}>
        <Testimonials testimonials={DATA} />
      </div>
    </section>
  );
}
