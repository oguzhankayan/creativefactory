"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";

const portfolioItems = [
  { name: "Qualiko", sector: "GIDA & FMCG", bg: "bg-card-green" },
  { name: "ICONICA", sector: "SAĞLIK", bg: "bg-card-blue" },
  { name: "Köpüklü", sector: "YİYECEK & İÇECEK", bg: "bg-card-orange" },
  { name: "SCOPS", sector: "LIFESTYLE", bg: "bg-card-purple" },
  { name: "Akasya Token", sector: "FİNTECH", bg: "bg-card-yellow" },
  { name: "Müzedenal", sector: "KÜLTÜR", bg: "bg-card-pink" },
  { name: "Eurosport", sector: "SPOR & MEDYA", bg: "bg-card-blue" },
  { name: "Timberwolves", sector: "SPOR & ANİMASYON", bg: "bg-card-green" },
];

const CARD_WIDTH_DESKTOP = 340;
const CARD_WIDTH_MOBILE = 280;
const GAP = 24;

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const update = () => {
      setCardWidth(window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxDrag = -(portfolioItems.length * (cardWidth + GAP) - (containerRef.current?.offsetWidth || 800));

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentX = x.get();
    const index = Math.round(-currentX / (cardWidth + GAP));
    const clamped = Math.max(0, Math.min(index, portfolioItems.length - 1));
    setActiveIndex(clamped);
  };

  return (
    <section id="portfolio" className="bg-bg-primary py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-text-tertiary">
            PORTFOLİO
          </p>
          <h2 className="mt-4 font-heading text-[32px] font-bold leading-[1.15] text-text-primary sm:text-[40px] md:text-[48px]">
            Ürettiğimiz İşler
          </h2>
          <p className="mt-4 font-body text-[16px] leading-[1.6] text-text-secondary md:text-[20px]">
            Farklı sektörlerden markalara hayat verdik.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="mt-12 overflow-hidden pl-5 md:mt-16 md:pl-10 lg:pl-[calc((100vw-1200px)/2+80px)]">
        <motion.div
          style={{ x: springX }}
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          onDragEnd={handleDragEnd}
          className="flex cursor-grab gap-6 active:cursor-grabbing"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease }}
              className="shrink-0"
              style={{ width: cardWidth }}
            >
              <div
                className={`flex h-[340px] flex-col items-center justify-center rounded-[20px] ${item.bg} transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl md:h-[400px]`}
              >
                <span className="font-heading text-[24px] font-bold text-text-primary md:text-[28px]">
                  {item.name}
                </span>
                <span className="mt-3 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  {item.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dot indicators */}
        <div className="mt-8 flex gap-1" aria-label="Portfolio gezinme">
          {portfolioItems.map((item, i) => (
            <button
              key={i}
              aria-label={`${item.name} projesine git`}
              onClick={() => {
                setActiveIndex(i);
                x.set(-(i * (cardWidth + GAP)));
              }}
              className="group flex h-11 w-11 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  i === activeIndex ? "bg-accent-orange" : "bg-border group-hover:bg-text-tertiary"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
