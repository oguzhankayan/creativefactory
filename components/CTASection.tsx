"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function CTASection() {
  return (
    <section className="bg-accent-orange py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading text-[36px] font-extrabold leading-[1.15] text-white sm:text-[42px] md:text-[48px]">
            Projenizi Konuşalım
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-body text-[16px] leading-[1.6] text-white/85 md:text-[18px]">
            İşletmenize özel çözümler geliştirmek için ilk adımı atın. Ücretsiz
            keşif görüşmesi ile başlayalım.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/90XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-bg-dark px-8 py-4 font-body text-[16px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-orange"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href="mailto:info@creativefactory.com.tr"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-body text-[16px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-orange"
            >
              <Mail size={20} />
              E-posta Gönderin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
