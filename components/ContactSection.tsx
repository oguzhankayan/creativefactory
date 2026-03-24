"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, AtSign } from "lucide-react";
import SplitText from "./SplitText";
import { ease } from "@/lib/motion";

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

const fields = [
  { name: "name", type: "text", label: "Adınız", required: true },
  { name: "email", type: "email", label: "E-posta adresiniz", required: true },
  { name: "phone", type: "tel", label: "Telefon numaranız", required: false },
];

export default function ContactSection() {
  return (
    <section id="iletisim" className="bg-bg-primary py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        <h2 className="mb-12 font-heading text-[32px] font-bold leading-[1.15] text-text-primary sm:text-[40px] md:mb-16 md:text-[48px]">
          <SplitText>İletişime Geçin</SplitText>
        </h2>

        <div className="grid gap-[60px] md:grid-cols-2">
          {/* Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            action="https://formspree.io/f/xyzformid"
            method="POST"
            className="space-y-5"
          >
            {fields.map((field) => (
              <motion.div key={field.name} variants={staggerChild}>
                <label htmlFor={field.name} className="mb-1.5 block font-body text-[14px] font-medium text-text-primary">
                  {field.label}
                  {field.required && <span className="ml-1 text-accent-orange" aria-hidden="true">*</span>}
                </label>
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.label}
                  className="w-full rounded-xl border border-border bg-white px-5 py-4 font-body text-[16px] text-text-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-text-tertiary focus-visible:border-accent-orange focus-visible:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                />
              </motion.div>
            ))}
            <motion.div variants={staggerChild}>
              <label htmlFor="message" className="mb-1.5 block font-body text-[14px] font-medium text-text-primary">
                Mesajınız
                <span className="ml-1 text-accent-orange" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Projenizden bahsedin…"
                className="min-h-[140px] w-full resize-none rounded-xl border border-border bg-white px-5 py-4 font-body text-[16px] text-text-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-text-tertiary focus-visible:border-accent-orange focus-visible:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
              />
            </motion.div>
            <motion.div variants={staggerChild}>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent-orange px-6 py-4 font-body text-[16px] font-semibold text-white transition-[transform,filter] duration-200 hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
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
                className="rounded-sm font-body text-[16px] font-medium text-text-primary transition-colors duration-200 hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
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
                className="rounded-sm font-body text-[16px] font-medium text-text-primary transition-colors duration-200 hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
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
