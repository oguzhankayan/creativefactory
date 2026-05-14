"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function AboutLampHero() {
  return (
    <LampContainer className="about__lamp">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="about__lamp-title"
      >
        <span style={{ color: "var(--fg-strong)" }}>Marka inşa eden</span>
        <br />
        <span style={{ color: "var(--accent)" }}>bağımsız bir stüdyo.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
        className="about__lamp-lede"
      >
        İstanbul merkezli, multidisipliner bir kreatif ekibiz. Web tasarımdan performans
        pazarlamasına, marka kimliğinden mobil uygulama geliştirmeye; bir markanın büyümesi için
        gereken her şeyi tek çatı altında üretiyoruz.
      </motion.p>
    </LampContainer>
  );
}
