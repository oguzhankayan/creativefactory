"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardGlow from "./CardGlow";
import SplitText from "./SplitText";

const services = [
  {
    title: "Web Tasarım & Geliştirme",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri. İlk izlenim için ikinci şansınız yok. Markanızı dijitalde en güçlü şekilde temsil ediyoruz.",
    dotColor: "bg-accent-orange",
    hoverBorder: "hover:border-accent-orange/40",
  },
  {
    title: "Marka Kimliği",
    description:
      "Logo, kurumsal kimlik, marka dili ve görsel sistem. Sizi rakiplerinizden ayıran, akılda kalan bir marka kimliği oluşturuyoruz.",
    dotColor: "bg-accent-blue",
    hoverBorder: "hover:border-accent-blue/40",
  },
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "Strateji, içerik üretimi ve topluluk yönetimi. Markanızın sosyal medyada tutarlı ve etkili bir varlık göstermesini sağlıyoruz.",
    dotColor: "bg-accent-green",
    hoverBorder: "hover:border-accent-green/40",
  },
  {
    title: "Dijital Reklam",
    description:
      "Google, Meta ve TikTok reklamlarında veri odaklı kampanyalar. Bütçenizden maksimum geri dönüş almak için optimize ediyoruz.",
    dotColor: "bg-accent-yellow",
    hoverBorder: "hover:border-accent-yellow/40",
  },
  {
    title: "İçerik Üretimi",
    description:
      "Fotoğraf, video, motion graphic ve grafik tasarım. Markanızın hikayesini görsel olarak en etkili şekilde anlatıyoruz.",
    dotColor: "bg-accent-orange",
    hoverBorder: "hover:border-accent-orange/40",
  },
  {
    title: "Strateji & Danışmanlık",
    description:
      "Pazar analizi, rakip araştırması ve büyüme stratejileri. Doğru hamleyi doğru zamanda yapmanız için yol haritası çiziyoruz.",
    dotColor: "bg-accent-blue",
    hoverBorder: "hover:border-accent-blue/40",
  },
];

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // 3D perspective: card rotates from tilted to flat
  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // Map dot color to glow color
  const glowColorMap: Record<string, string> = {
    "bg-accent-orange": "rgba(255, 107, 53, 0.10)",
    "bg-accent-blue": "rgba(67, 97, 238, 0.10)",
    "bg-accent-green": "rgba(6, 214, 160, 0.10)",
    "bg-accent-yellow": "rgba(255, 207, 58, 0.10)",
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        opacity,
        y,
        transformPerspective: 800,
        transformOrigin: "bottom center",
      }}
      role="listitem"
      className="motion-reduce:!transform-none motion-reduce:!opacity-100"
    >
      <CardGlow glowColor={glowColorMap[service.dotColor] || glowColorMap["bg-accent-orange"]}>
        <div
          className={`rounded-2xl border border-white/[0.08] bg-bg-dark-subtle p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 md:p-9 ${service.hoverBorder}`}
        >
          <div className={`h-3 w-3 rounded-full ${service.dotColor}`} />
          <h3 className="mt-5 font-heading text-[18px] font-bold text-text-on-dark md:text-[22px]">
            {service.title}
          </h3>
          <p className="mt-3 font-body text-[16px] leading-[1.65] text-white/75">
            {service.description}
          </p>
        </div>
      </CardGlow>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="bg-bg-dark py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-orange">
            HİZMETLERİMİZ
          </p>
          <h2 className="mt-4 font-heading text-[32px] font-bold leading-[1.15] text-text-on-dark sm:text-[40px] md:text-[48px]">
            <SplitText>İşletmenizin Büyüme Ortağı</SplitText>
          </h2>
          <p className="mt-4 max-w-[500px] font-body text-[16px] leading-[1.6] text-white/75 md:text-[20px]">
            Fikir aşamasından uygulamaya, strateji geliştirmeden ölçümlemeye
            kadar yanınızdayız.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          role="list"
          className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
