"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, AtSign } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function ContactSection() {
  return (
    <section id="iletisim" className="bg-bg-primary py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 font-heading text-[32px] font-bold leading-[1.15] text-text-primary sm:text-[40px] md:mb-16 md:text-[48px]"
        >
          İletişime Geçin
        </motion.h2>

        <div className="grid gap-[60px] md:grid-cols-2">
          {/* Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5"
          >
            {[
              { name: "name", type: "text", placeholder: "Adınız", label: "Adınız" },
              { name: "email", type: "email", placeholder: "E-posta adresiniz", label: "E-posta adresiniz" },
              { name: "phone", type: "tel", placeholder: "Telefon numaranız", label: "Telefon numaranız" },
            ].map((field) => (
              <motion.div key={field.name} variants={staggerChild}>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.name !== "phone"}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                  className="w-full rounded-xl border border-border bg-white px-5 py-4 font-body text-[16px] text-text-primary outline-none transition-all duration-200 placeholder:text-text-tertiary focus-visible:border-accent-orange focus-visible:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                />
              </motion.div>
            ))}
            <motion.div variants={staggerChild}>
              <textarea
                name="message"
                required
                placeholder="Projenizden bahsedin…"
                aria-label="Projenizden bahsedin"
                className="min-h-[140px] w-full resize-none rounded-xl border border-border bg-white px-5 py-4 font-body text-[16px] text-text-primary outline-none transition-all duration-200 placeholder:text-text-tertiary focus-visible:border-accent-orange focus-visible:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
              />
            </motion.div>
            <motion.div variants={staggerChild}>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent-orange px-6 py-4 font-body text-[16px] font-semibold text-white transition-all duration-200 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
              >
                Gönder
              </button>
            </motion.div>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="flex items-center gap-4">
              <Mail size={20} className="shrink-0 text-accent-orange" />
              <a
                href="mailto:info@creativefactory.com.tr"
                className="font-body text-[16px] font-medium text-text-primary transition-colors duration-200 hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 rounded-sm"
              >
                info@creativefactory.com.tr
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={20} className="shrink-0 text-accent-orange" />
              <span className="font-body text-[16px] font-medium text-text-primary">
                İstanbul, Türkiye
              </span>
            </div>
            <div className="flex items-center gap-4">
              <AtSign size={20} className="shrink-0 text-accent-orange" />
              <a
                href="https://instagram.com/creativefactory.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[16px] font-medium text-text-primary transition-colors duration-200 hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 rounded-sm"
              >
                @creativefactory.tr
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
