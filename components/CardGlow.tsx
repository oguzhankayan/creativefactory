"use client";

import { useRef, useCallback, type ReactNode } from "react";

interface CardGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function CardGlow({
  children,
  className = "",
  glowColor = "rgba(255, 107, 53, 0.12)",
}: CardGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--glow-x", `${x}px`);
      ref.current.style.setProperty("--glow-y", `${y}px`);
      ref.current.style.setProperty("--glow-opacity", "1");
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty("--glow-opacity", "0");
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--glow-opacity": "0",
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      {/* Glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[var(--glow-opacity)] transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
