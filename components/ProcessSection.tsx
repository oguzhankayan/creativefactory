"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Keşif",
    description:
      "İşletmenizi, sektörünüzü ve hedeflerinizi anlıyoruz. Rakip analizi ve pazar araştırmasıyla başlıyoruz.",
    numberColor: "text-accent-orange",
  },
  {
    number: "02",
    title: "Strateji",
    description:
      "Veriler ışığında size özel bir yol haritası çıkarıyoruz. Ne yapacağımızı, neden yapacağımızı netleştiriyoruz.",
    numberColor: "text-accent-blue",
  },
  {
    number: "03",
    title: "Uygulama",
    description:
      "Tasarım, geliştirme ve içerik üretimini hayata geçiriyoruz. Süreci şeffaf şekilde sizinle paylaşıyoruz.",
    numberColor: "text-accent-yellow",
  },
  {
    number: "04",
    title: "Büyüme",
    description:
      "Lansman sonrası ölçümleme, optimizasyon ve sürekli iyileştirme. İşimiz teslimle bitmiyor, asıl orada başlıyor.",
    numberColor: "text-accent-green",
  },
];

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

export default function ProcessSection() {
  return (
    <section id="surec" className="bg-bg-dark py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-orange">
            SÜREÇ
          </p>
          <h2 className="mt-4 font-heading text-[32px] font-bold leading-[1.15] text-text-on-dark sm:text-[40px] md:text-[48px]">
            Nasıl Çalışıyoruz?
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          role="list"
          className="mt-12 flex flex-col md:mt-16"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={staggerChild} role="listitem">
              {index > 0 && (
                <div className="h-px w-full bg-white/[0.1]" />
              )}
              <div className="flex items-start gap-6 py-8 md:gap-10 md:py-10">
                <span
                  className={`shrink-0 font-heading text-[48px] font-extrabold leading-none opacity-30 md:text-[64px] ${step.numberColor}`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-[18px] font-bold text-text-on-dark md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] font-body text-[16px] leading-[1.65] text-white/75">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
