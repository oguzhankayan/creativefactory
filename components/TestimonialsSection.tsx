"use client";

import Reveal from "./Reveal";
import { Testimonials } from "./ui/unique-testimonial";

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
        <Testimonials />
      </div>
    </section>
  );
}
