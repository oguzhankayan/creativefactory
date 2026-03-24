"use client";

import { motion } from "framer-motion";
import { Mail, Phone, AtSign, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="iletisim" className="bg-[var(--bg-main)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            İletişime Geçin
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-primary">
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-body text-primary outline-none transition-colors focus:border-accent-orange"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-body text-sm font-medium text-primary">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-body text-primary outline-none transition-colors focus:border-accent-orange"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-medium text-primary">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-body text-primary outline-none transition-colors focus:border-accent-orange"
                placeholder="+90 (5XX) XXX XX XX"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-primary">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-body text-primary outline-none transition-colors focus:border-accent-orange"
                placeholder="Projeniz hakkında kısaca bilgi verin..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-accent-orange px-6 py-3.5 font-heading text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-orange/25 sm:w-auto sm:px-10"
            >
              Gönder
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10">
                <Mail className="h-5 w-5 text-accent-orange" />
              </div>
              <div>
                <p className="font-body text-sm text-text-secondary">E-posta</p>
                <a
                  href="mailto:info@creativefactory.com.tr"
                  className="font-heading text-base font-semibold text-primary hover:text-accent-orange"
                >
                  info@creativefactory.com.tr
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10">
                <Phone className="h-5 w-5 text-accent-blue" />
              </div>
              <div>
                <p className="font-body text-sm text-text-secondary">Telefon</p>
                <span className="font-heading text-base font-semibold text-primary">
                  Yakında eklenecek
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10">
                <AtSign className="h-5 w-5 text-accent-green" />
              </div>
              <div>
                <p className="font-body text-sm text-text-secondary">Instagram</p>
                <a
                  href="https://instagram.com/creativefactory.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-base font-semibold text-primary hover:text-accent-orange"
                >
                  @creativefactory.tr
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-yellow/10">
                <MapPin className="h-5 w-5 text-accent-yellow" />
              </div>
              <div>
                <p className="font-body text-sm text-text-secondary">Konum</p>
                <span className="font-heading text-base font-semibold text-primary">
                  İstanbul, Türkiye
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
