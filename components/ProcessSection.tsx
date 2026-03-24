"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Keşif",
    description:
      "İşletmenizi, sektörünüzü ve hedeflerinizi anlıyoruz. Rakip analizi ve pazar araştırmasıyla başlıyoruz.",
    color: "text-accent-orange",
    bgColor: "text-accent-orange/10",
  },
  {
    number: "02",
    title: "Strateji",
    description:
      "Veriler ışığında size özel bir yol haritası çıkarıyoruz. Ne yapacağımızı, neden yapacağımızı netleştiriyoruz.",
    color: "text-accent-blue",
    bgColor: "text-accent-blue/10",
  },
  {
    number: "03",
    title: "Uygulama",
    description:
      "Tasarım, geliştirme ve içerik üretimini hayata geçiriyoruz. Süreci şeffaf şekilde sizinle paylaşıyoruz.",
    color: "text-accent-yellow",
    bgColor: "text-accent-yellow/10",
  },
  {
    number: "04",
    title: "Büyüme",
    description:
      "Lansman sonrası ölçümleme, optimizasyon ve sürekli iyileştirme. İşimiz teslimle bitmiyor, asıl orada başlıyor.",
    color: "text-accent-green",
    bgColor: "text-accent-green/10",
  },
];

export default function ProcessSection() {
  return (
    <section id="surec" className="bg-surface-dark py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-white/60 md:text-xl">
            Her projede aynı disiplinle, size özel bir yol haritası çıkarıyoruz.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="relative"
            >
              <span
                className={`block font-heading text-8xl font-extrabold ${step.color} opacity-20 md:text-9xl`}
              >
                {step.number}
              </span>
              <div className="-mt-6 md:-mt-8">
                <h3 className={`font-heading text-2xl font-bold ${step.color}`}>
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
