"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Sizi Arayalım",
    emoji: "✅",
    description:
      "İşletmenizin ihtiyaçlarına özel en uygun paketi seç ya da özel ihtiyaçlarını belirle",
    glow: "from-accent-orange/20 to-accent-orange/0",
    border: "border-accent-orange/30",
    accent: "text-accent-orange",
  },
  {
    number: 2,
    title: "Toplantı Planla",
    emoji: "📅",
    description:
      "Dijital pazarlama uzmanı ile sectiğin paket ve işletmene özel bir toplantıya gerçekleştir",
    glow: "from-accent-blue/20 to-accent-blue/0",
    border: "border-accent-blue/30",
    accent: "text-accent-blue",
  },
  {
    number: 3,
    title: "Büyümeye Başla",
    emoji: "🚀",
    description:
      "Uzmanlar tarafından işletmen için detaylı oluşturulacak strateji ile büyüme yolculuğuna ilk adımnı at",
    glow: "from-accent-green/20 to-accent-green/0",
    border: "border-accent-green/30",
    accent: "text-accent-green",
  },
];

// SVG path for connecting curved arrows
const connectorPaths = [
  "M 50 0 C 80 30, 120 50, 80 90 C 50 120, 20 100, 50 140",
  "M 50 0 C 20 30, -10 60, 30 90 C 60 120, 80 100, 50 140",
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="surec" className="bg-[var(--bg-main)] py-20 md:py-32">
      <div ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" as const, stiffness: 100, damping: 15 }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Süreç Nasıl İlerliyor?
          </h2>
        </motion.div>

        <div className="relative flex flex-col items-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative w-full">
              <StepCard step={step} index={index} />
              {index < steps.length - 1 && (
                <AnimatedConnector index={index} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -5 : 5, scale: 0.85 }}
      animate={isInView ? { opacity: 1, x: 0, rotate: index % 2 === 0 ? -1 : 1, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        type: "spring" as const,
        stiffness: 60,
        damping: 14,
      }}
      whileHover={{ scale: 1.03, rotate: 0 }}
      className={`relative overflow-hidden rounded-2xl border ${step.border} bg-surface-dark p-6 shadow-2xl md:p-8`}
    >
      {/* Glow gradient */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${step.glow}`} />

      {/* Neon border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{ boxShadow: `inset 0 0 30px rgba(255,107,53,0.1)` }}
      />

      <div className="relative z-10 flex items-start gap-4">
        <span className={`font-heading text-4xl font-extrabold ${step.accent} md:text-5xl`}>
          {step.number}
        </span>
        <div>
          <h3 className="flex items-center gap-2 font-heading text-xl font-extrabold text-white md:text-2xl">
            {step.title}
            <span className="text-lg">{step.emoji}</span>
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-white/60">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedConnector({ index }: { index: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const pathD = index % 2 === 0
    ? "M 50 0 C 90 20, 100 40, 70 60 C 40 80, 20 90, 50 110"
    : "M 50 0 C 10 20, 0 40, 30 60 C 60 80, 80 90, 50 110";

  return (
    <div className="flex justify-center py-1">
      <svg
        ref={ref}
        width="100"
        height="110"
        viewBox="0 0 100 110"
        fill="none"
        className="text-accent-orange"
      >
        <motion.path
          d={pathD}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Arrow head */}
        <motion.circle
          cx="50"
          cy="108"
          r="4"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}
