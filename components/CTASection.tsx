"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-accent-orange py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            PROJENİZİ KONUŞALIM
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/90 md:text-xl">
            İşletmenize özel çözümler geliştirmek için ilk adımı atın. Ücretsiz
            keşif görüşmesi ile başlayalım.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/90XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-white transition-all hover:scale-105 hover:shadow-xl sm:text-lg"
            >
              <MessageCircle size={22} />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href="mailto:info@creativefactory.com.tr"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-heading text-base font-bold text-white transition-all hover:bg-white hover:text-accent-orange sm:text-lg"
            >
              <Mail size={22} />
              E-posta Gönderin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
