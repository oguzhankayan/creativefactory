"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Share2, TrendingUp, Video, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Tasarım & Geliştirme",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri. İlk izlenim için ikinci şansınız yok. Markanızı dijitalde en güçlü şekilde temsil eden siteler inşa ediyoruz.",
    color: "border-accent-orange",
    hoverBg: "group-hover:bg-accent-orange/5",
  },
  {
    icon: Palette,
    title: "Marka Kimliği",
    description:
      "Logo, kurumsal kimlik, marka dili ve görsel sistem. Sizi rakiplerinizden ayıran, akılda kalan bir marka kimliği oluşturuyoruz.",
    color: "border-accent-blue",
    hoverBg: "group-hover:bg-accent-blue/5",
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description:
      "Strateji, içerik üretimi ve topluluk yönetimi. Markanızın sosyal medyada tutarlı ve etkili bir varlık göstermesini sağlıyoruz.",
    color: "border-accent-green",
    hoverBg: "group-hover:bg-accent-green/5",
  },
  {
    icon: TrendingUp,
    title: "Dijital Reklam",
    description:
      "Google, Meta ve TikTok reklamlarında veri odaklı kampanyalar. Bütçenizden maksimum geri dönüş almak için optimize ediyoruz.",
    color: "border-accent-yellow",
    hoverBg: "group-hover:bg-accent-yellow/5",
  },
  {
    icon: Video,
    title: "İçerik Üretimi",
    description:
      "Fotoğraf, video, motion graphic ve grafik tasarım. Markanızın hikayesini görsel olarak en etkili şekilde anlatıyoruz.",
    color: "border-accent-orange",
    hoverBg: "group-hover:bg-accent-orange/5",
  },
  {
    icon: Lightbulb,
    title: "Strateji & Danışmanlık",
    description:
      "Pazar analizi, rakip araştırması ve büyüme stratejileri. Doğru hamleyi doğru zamanda yapmanız için yol haritası çiziyoruz.",
    color: "border-accent-blue",
    hoverBg: "group-hover:bg-accent-blue/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, type: "spring" as const, stiffness: 120 },
  },
};

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="bg-[var(--bg-main)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            İşletmenizin Büyüme Ortağı
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-text-secondary md:text-xl">
            Fikir aşamasından uygulamaya, strateji geliştirmeden ölçümlemeye kadar
            yanınızdayız.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group cursor-default rounded-xl border-l-4 ${service.color} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8`}
              >
                <div className={`rounded-lg p-3 transition-colors ${service.hoverBg} inline-block`}>
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
