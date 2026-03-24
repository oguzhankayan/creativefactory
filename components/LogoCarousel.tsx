"use client";

import { motion } from "framer-motion";

const logos = [
  "Qualiko",
  "ICONICA",
  "Köpüklü",
  "SCOPS",
  "Akasya Token",
  "Müzedenal",
  "Eurosport",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function LogoCarousel() {
  return (
    <section className="bg-bg-primary px-5 py-[120px] md:px-10" aria-label="Birlikte calistigimiz markalar">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 text-center font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-text-tertiary"
        >
          BİRLİKTE ÇALIŞTIĞIMIZ MARKALAR
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap items-center justify-center gap-x-[60px] gap-y-[40px]"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="whitespace-nowrap font-heading text-[18px] font-semibold text-text-tertiary opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
