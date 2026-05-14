"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.01 }
    );
    io.observe(el);
    const onScroll = () => {
      const rr = el.getBoundingClientRect();
      if (rr.top < window.innerHeight * 0.95 && rr.bottom > 0) {
        setShown(true);
        window.removeEventListener("scroll", onScroll);
        io.disconnect();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return [ref, shown] as const;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
};

export default function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
  style,
  ...rest
}: RevealProps) {
  const [ref, shown] = useReveal();
  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...(style as object) }}
      {...rest}
    >
      {children}
    </As>
  );
}
