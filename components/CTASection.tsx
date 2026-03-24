"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [48, 0]);

  return (
    <section ref={ref} className="px-4 py-4 sm:px-6 lg:px-0 lg:py-0">
      <motion.div
        style={{ scale, borderRadius }}
        className="relative overflow-hidden bg-accent-orange py-20 md:py-32 lg:rounded-none"
      >
        {/* Animated background elements */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-[80px]"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-black/10 blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-yellow/20 blur-[60px]"
          />
        </div>

        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h60v60H0z' fill='none' stroke='white' stroke-width='0.5'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" as const, stiffness: 80 }}
          >
            <motion.h2
              className="font-heading text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" as const, stiffness: 60 }}
            >
              PROJENİZİ
              <br />
              KONUŞALIM
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mt-6 max-w-xl font-body text-lg text-white/80 md:text-xl"
            >
              İşletmenize özel çözümler geliştirmek için ilk adımı atın.
              Ücretsiz keşif görüşmesi ile başlayalım.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/90XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-white shadow-2xl shadow-black/30 transition-shadow hover:shadow-3xl sm:text-lg"
              >
                <MessageCircle size={22} />
                WhatsApp&apos;tan Yazın
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:info@creativefactory.com.tr"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-heading text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:text-lg"
              >
                <Mail size={22} />
                E-posta Gönderin
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
