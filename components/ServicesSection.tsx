"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Palette, Share2, TrendingUp, Video, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "UI/UX & Web Sitesi",
    description:
      "İlk izlenim için asla ikinci bir şansınız olmaz. Web siteniz, potansiyel müşterilerinizin sizi keşfettiği ilk durak. Görünüşte etkileyici, kullanımda kusursuz, mobilde mükemmel ve arama motorlarında görünür web siteleri.",
    bg: "bg-accent-green/10",
    border: "border-accent-green/20",
    accent: "bg-accent-green",
    rotation: "md:-rotate-1",
  },
  {
    icon: TrendingUp,
    title: "Performans Pazarlama",
    description:
      "Google, Meta ve TikTok Reklam harcamalarınızın gerçek getiriye dönüşmesini sağlayan veri odaklı stratejiler. Tahminler yerine somut sonuçlar, vaatler yerine ölçülebilir başarı sunuyoruz.",
    bg: "bg-accent-yellow/15",
    border: "border-accent-yellow/20",
    accent: "bg-accent-yellow",
    rotation: "md:rotate-1",
  },
  {
    icon: Palette,
    title: "Marka Kimliği",
    description:
      "Logo, kurumsal kimlik, marka dili ve görsel sistem. Sizi rakiplerinizden ayıran, akılda kalan, tutarlı ve güçlü bir marka kimliği oluşturuyoruz.",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    accent: "bg-accent-blue",
    rotation: "md:-rotate-2",
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description:
      "Strateji, içerik üretimi ve topluluk yönetimi. Markanızın sosyal medyada tutarlı ve etkili bir varlık göstermesini sağlıyoruz.",
    bg: "bg-accent-orange/10",
    border: "border-accent-orange/20",
    accent: "bg-accent-orange",
    rotation: "md:rotate-2",
  },
  {
    icon: Video,
    title: "İçerik Üretimi",
    description:
      "Fotoğraf, video, motion graphic ve grafik tasarım. Markanızın hikayesini görsel olarak en etkili şekilde anlatıyoruz.",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    accent: "bg-purple-500",
    rotation: "md:-rotate-1",
  },
  {
    icon: Lightbulb,
    title: "Strateji & Danışmanlık",
    description:
      "Pazar analizi, rakip araştırması ve büyüme stratejileri. Doğru hamleyi doğru zamanda yapmanız için yol haritası çiziyoruz.",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    accent: "bg-rose-500",
    rotation: "md:rotate-1",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="hizmetler" ref={containerRef} className="relative bg-[var(--bg-main)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title with scroll reveal */}
        <SectionHeading scrollProgress={scrollYProgress} />

        {/* Service cards - stacked/scattered layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ scrollProgress }: { scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  const headingWords = "Yolculuğunuzun her adımında yanınızdayız.".split(" ");

  return (
    <div ref={ref} className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent-orange"
      >
        Hizmetlerimiz
      </motion.p>
      <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl md:text-6xl">
        {headingWords.map((word, i) => {
          const start = i / headingWords.length;
          const end = (i + 1) / headingWords.length;
          return (
            <ScrollWord key={i} progress={scrollYProgress} start={start} end={end}>
              {word}
            </ScrollWord>
          );
        })}
      </h2>
    </div>
  );
}

function ScrollWord({
  children,
  progress,
  start,
  end,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span style={{ opacity, y }} className="mr-[0.3em] inline-block">
      {children}
    </motion.span>
  );
}

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -3 : 3, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        type: "spring" as const,
        stiffness: 70,
        damping: 14,
      }}
      whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
      className={`group relative overflow-hidden rounded-2xl ${service.bg} border ${service.border} p-6 transition-shadow duration-500 hover:shadow-2xl md:p-8 ${service.rotation}`}
    >
      {/* Accent dot */}
      <div className={`absolute right-4 top-4 h-3 w-3 rounded-full ${service.accent} opacity-60`} />

      <div className="relative z-10">
        <h3 className="font-heading text-xl font-extrabold text-primary sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
          {service.description}
        </p>
      </div>

      {/* Hover glow */}
      <div className={`pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full ${service.accent} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20`} />
    </motion.div>
  );
}
