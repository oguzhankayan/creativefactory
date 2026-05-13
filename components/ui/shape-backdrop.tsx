"use client";

import { ElegantShape } from "./shape-landing-hero";

type Variant = "hero" | "section";

export default function ShapeBackdrop({ variant = "section" }: { variant?: Variant }) {
  if (variant === "hero") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8ff3d]/[0.04] via-transparent to-white/[0.03] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <ElegantShape delay={0.3} width={520} height={130} rotate={14} gradient="from-[#c8ff3d]/[0.10]" className="left-[-14%] md:left-[-10%] top-[8%] md:top-[12%]" />
          <ElegantShape delay={0.5} width={520} height={130} rotate={-14} gradient="from-white/[0.08]" className="right-[-14%] md:right-[-10%] top-[8%] md:top-[12%]" />
          <ElegantShape delay={0.45} width={380} height={95} rotate={-18} gradient="from-[#c8ff3d]/[0.10]" className="right-[-8%] md:right-[-4%] bottom-[10%] md:bottom-[14%]" />
          <ElegantShape delay={0.55} width={380} height={95} rotate={18} gradient="from-violet-400/[0.08]" className="left-[-8%] md:left-[-4%] bottom-[10%] md:bottom-[14%]" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8ff3d]/[0.025] via-transparent to-white/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.2} width={420} height={100} rotate={16} gradient="from-[#c8ff3d]/[0.08]" className="left-[-12%] md:left-[-8%] top-[10%] md:top-[14%]" />
        <ElegantShape delay={0.35} width={420} height={100} rotate={-16} gradient="from-white/[0.06]" className="right-[-12%] md:right-[-8%] bottom-[10%] md:bottom-[14%]" />
        <ElegantShape delay={0.5} width={280} height={70} rotate={-22} gradient="from-violet-400/[0.06]" className="right-[-6%] md:right-[2%] top-[5%] md:top-[8%]" />
      </div>
    </>
  );
}
