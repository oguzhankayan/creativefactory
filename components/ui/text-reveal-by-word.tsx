"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn(className)}
      style={{ position: "relative", zIndex: 0, height: "200vh" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <p
          style={{
            maxWidth: "1100px",
            textAlign: "center",
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: "clamp(24px, 3.6vw, 48px)",
            letterSpacing: "-0.02em",
          }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{
        opacity,
        display: "inline-block",
        marginRight: "0.32em",
        color: "#ffffff",
      }}
    >
      {children}
    </motion.span>
  );
};

export { TextRevealByWord };
