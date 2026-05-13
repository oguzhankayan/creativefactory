"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

type HeroGeometricProps = {
  badge?: string;
  children?: ReactNode;
};

/**
 * Creative Factory brand uyarlaması:
 * - Background koyu lacivert (matches --bg #13161c)
 * - Shape paleti: lime aksan + nötr tonlar (rainbow yerine markaya sadık)
 * - Children olarak hero içeriği (başlık, copy, CTA'lar) dışarıdan veriliyor
 * - badge undefined ise badge render edilmez
 */
export function HeroGeometric({ badge, children }: HeroGeometricProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#13161c]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8ff3d]/[0.04] via-transparent to-white/[0.03] blur-3xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#c8ff3d]/[0.14]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-white/[0.10]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-400/[0.10]"
          className="left-[5%] md:left-[10%] bottom-[8%] md:bottom-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#c8ff3d]/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-white/[0.08]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-5 md:px-10 pt-28 md:pt-32 pb-24">
        <div className="mx-auto w-full max-w-[1080px] text-center">
          {badge ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10 md:mb-14"
            >
              <Circle className="h-2 w-2 fill-[#c8ff3d] text-[#c8ff3d]" />
              <span className="text-[12px] uppercase tracking-[0.14em] text-white/60">{badge}</span>
            </motion.div>
          ) : null}

          {children}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-[#13161c]/80" />
    </section>
  );
}
