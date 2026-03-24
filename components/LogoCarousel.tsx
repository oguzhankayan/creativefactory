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

export default function LogoCarousel() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white py-14">
      {/* Subtle gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary/50"
      >
        Birlikte çalıştığımız markalar
      </motion.p>

      {/* Row 1 */}
      <div className="relative overflow-hidden">
        <div className="marquee-track-slow">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-16 px-8">
              {logos.map((logo) => (
                <motion.div
                  key={`${setIndex}-${logo}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-14 items-center justify-center rounded-xl px-6 transition-all hover:bg-gray-50"
                >
                  <span className="whitespace-nowrap font-heading text-xl font-extrabold text-primary/20 transition-colors hover:text-primary/50 sm:text-2xl">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="relative mt-4 overflow-hidden">
        <div className="marquee-track-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-16 px-8">
              {[...logos].reverse().map((logo) => (
                <motion.div
                  key={`${setIndex}-${logo}-r`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-14 items-center justify-center rounded-xl px-6 transition-all hover:bg-gray-50"
                >
                  <span className="whitespace-nowrap font-heading text-xl font-extrabold text-primary/20 transition-colors hover:text-primary/50 sm:text-2xl">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
