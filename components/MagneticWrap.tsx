"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticWrapProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticWrap({
  children,
  strength = 0.3,
  className = "",
}: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isTouchDevice && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !enabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      data-magnetic
    >
      {children}
    </motion.div>
  );
}
