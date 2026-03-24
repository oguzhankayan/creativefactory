"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, AtSign, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@creativefactory.com.tr",
    href: "mailto:info@creativefactory.com.tr",
    color: "bg-accent-orange/10 text-accent-orange",
    glow: "group-hover:shadow-accent-orange/20",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "Yakında eklenecek",
    href: undefined,
    color: "bg-accent-blue/10 text-accent-blue",
    glow: "group-hover:shadow-accent-blue/20",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@creativefactory.tr",
    href: "https://instagram.com/creativefactory.tr",
    color: "bg-accent-green/10 text-accent-green",
    glow: "group-hover:shadow-accent-green/20",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "İstanbul, Türkiye",
    href: undefined,
    color: "bg-accent-yellow/10 text-accent-yellow",
    glow: "group-hover:shadow-accent-yellow/20",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="iletisim" className="relative bg-[var(--bg-main)] py-20 md:py-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb-slow absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent-orange/5 blur-[100px]" />
        <div className="glow-orb absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-accent-blue/5 blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, type: "spring" as const, stiffness: 100, damping: 15 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent-green">
            İletişim
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            İletişime Geçin
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, type: "spring" as const, stiffness: 60 }}
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5"
          >
            {[
              { id: "name", label: "İsim", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { id: "email", label: "E-posta", type: "email", placeholder: "ornek@email.com", required: true },
              { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 (5XX) XXX XX XX", required: false },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <label htmlFor={field.id} className="mb-1.5 block font-body text-sm font-medium text-primary">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  className="w-full rounded-xl border-2 border-gray-200/80 bg-white px-4 py-3.5 font-body text-primary shadow-sm outline-none transition-all focus:border-accent-orange focus:shadow-lg focus:shadow-accent-orange/5"
                  placeholder={field.placeholder}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-primary">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border-2 border-gray-200/80 bg-white px-4 py-3.5 font-body text-primary shadow-sm outline-none transition-all focus:border-accent-orange focus:shadow-lg focus:shadow-accent-orange/5"
                placeholder="Projeniz hakkında kısaca bilgi verin..."
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading text-base font-bold text-white shadow-xl shadow-primary/10 transition-all hover:shadow-2xl sm:w-auto sm:px-12"
            >
              Gönder
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.form>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" as const, stiffness: 60 }}
            className="flex flex-col justify-center gap-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Tag = info.href ? "a" : "div";
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 30, rotate: 2 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 80 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <Tag
                    {...(info.href ? { href: info.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all duration-300 ${info.glow} hover:shadow-xl`}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${info.color} transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-wider text-text-secondary">{info.label}</p>
                      <p className="font-heading text-base font-bold text-primary">{info.value}</p>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
