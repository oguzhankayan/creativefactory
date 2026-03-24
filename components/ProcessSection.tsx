"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "./SplitText";

const steps = [
  {
    number: "01",
    title: "Keşif",
    description:
      "İşletmenizi, sektörünüzü ve hedeflerinizi anlıyoruz. Rakip analizi ve pazar araştırmasıyla başlıyoruz.",
    numberColor: "text-accent-orange",
    dotColor: "bg-accent-orange",
  },
  {
    number: "02",
    title: "Strateji",
    description:
      "Veriler ışığında size özel bir yol haritası çıkarıyoruz. Ne yapacağımızı, neden yapacağımızı netleştiriyoruz.",
    numberColor: "text-accent-blue",
    dotColor: "bg-accent-blue",
  },
  {
    number: "03",
    title: "Uygulama",
    description:
      "Tasarım, geliştirme ve içerik üretimini hayata geçiriyoruz. Süreci şeffaf şekilde sizinle paylaşıyoruz.",
    numberColor: "text-accent-yellow",
    dotColor: "bg-accent-yellow",
  },
  {
    number: "04",
    title: "Büyüme",
    description:
      "Lansman sonrası ölçümleme, optimizasyon ve sürekli iyileştirme. İşimiz teslimle bitmiyor, asıl orada başlıyor.",
    numberColor: "text-accent-green",
    dotColor: "bg-accent-green",
  },
];

import { ease } from "@/lib/motion";

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, x }}
      role="listitem"
      className="motion-reduce:!transform-none motion-reduce:!opacity-100"
    >
      {index > 0 && <div className="h-px w-full bg-white/[0.1]" />}
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
  );
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"],
  });

  // Timeline line draws from 0 to 100% as section scrolls
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="surec" ref={sectionRef} className="bg-bg-dark py-[120px]">
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
            <SplitText>Nasıl Çalışıyoruz?</SplitText>
          </h2>
        </motion.div>

        {/* Steps with timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Animated vertical timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 hidden w-px md:left-[31px] md:block">
            {/* Background track */}
            <div className="h-full w-full bg-white/[0.06]" />
            {/* Animated fill */}
            <motion.div
              className="absolute inset-0 origin-top bg-accent-orange motion-reduce:!scale-y-100"
              style={{ scaleY: lineScaleY }}
            />
          </div>

          {/* Step dots on timeline */}
          <div
            role="list"
            className="relative"
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
