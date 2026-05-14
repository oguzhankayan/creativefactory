"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Creative Factory'den projelerimiz için 360 derece hizmet alabiliyoruz. Bizi hiçbir zaman yarı yolda bırakmadılar.",
    author: "Özgür Ahmet Köse",
    role: "Founder · Brand Story Agency",
    avatar: "/ozgurahmet.jpeg",
  },
  {
    id: 2,
    quote:
      "Sürücü kursumuz ve anaokulumuzun tüm reklam projelerinde ve dijital süreçlerinde kendileriyle çalışmak bizim için çok büyük bir mutluluk.",
    author: "Fatih Maşalacı",
    role: "Founder · Maşalacı Sürücü Kursu",
    avatar: "/fatihmasalaci.png",
  },
  {
    id: 3,
    quote:
      "Kişisel markamın oluşmasında ve dijital dünyaya adım attığım ilk süreçte kendileriyle çalıştık. Çok güzel noktalara geldik.",
    author: "Nurper Özcan",
    role: "Founder · Fratelli Cheese",
    avatar: "/nurperozcan.jpg",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote);
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote);
      setDisplayedRole(testimonials[index].role);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center py-16" style={{ gap: "clamp(40px, 5vw, 64px)" }}>
      {/* Quote Container */}
      <div className="relative px-10">
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4px",
            top: "-32px",
            fontSize: "96px",
            lineHeight: 1,
            color: "color-mix(in oklab, var(--fg) 5%, transparent)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </span>

        <p
          className={cn(
            "text-2xl md:text-3xl font-light text-center max-w-2xl transition-all duration-400 ease-out",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100"
          )}
          style={{
            color: "var(--fg)",
            lineHeight: 1.45,
            letterSpacing: "-0.005em",
          }}
        >
          {displayedQuote}
        </p>

        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4px",
            bottom: "-44px",
            fontSize: "96px",
            lineHeight: 1,
            color: "color-mix(in oklab, var(--fg) 5%, transparent)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          &rdquo;
        </span>
      </div>

      <div className="flex flex-col items-center" style={{ gap: "clamp(20px, 2.4vw, 32px)" }}>
        {/* Role text */}
        <p
          className={cn(
            "transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}
          style={{
            fontSize: "11px",
            color: "var(--fg-muted)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 500,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {displayedRole}
        </p>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index && !isActive;
            const showName = isActive || isHovered;

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isActive
                    ? "var(--fg)"
                    : isHovered
                      ? "color-mix(in oklab, var(--fg) 8%, transparent)"
                      : "transparent",
                  border: isActive
                    ? "1px solid transparent"
                    : "1px solid color-mix(in oklab, var(--fg) 12%, transparent)",
                  paddingTop: showName ? "6px" : "3px",
                  paddingBottom: showName ? "6px" : "3px",
                  paddingLeft: showName ? "6px" : "3px",
                  paddingRight: showName ? "14px" : "3px",
                  transition:
                    "background 400ms cubic-bezier(0.2,0.7,0.2,1), border-color 400ms cubic-bezier(0.2,0.7,0.2,1), padding 400ms cubic-bezier(0.2,0.7,0.2,1)",
                }}
                className="relative flex items-center gap-0 rounded-full cursor-pointer"
                aria-label={`${testimonial.author}, ${testimonial.role}`}
                aria-pressed={isActive}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    loading="lazy"
                    decoding="async"
                    width={36}
                    height={36}
                    className={cn(
                      "rounded-full object-cover",
                      "transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
                      !isActive && "hover:scale-105"
                    )}
                    style={{ width: "36px", height: "36px" }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: showName ? "1fr" : "0fr",
                    opacity: showName ? 1 : 0,
                    marginLeft: showName ? "10px" : "0",
                    transition:
                      "grid-template-columns 400ms cubic-bezier(0.2,0.7,0.2,1), opacity 400ms cubic-bezier(0.2,0.7,0.2,1), margin-left 400ms cubic-bezier(0.2,0.7,0.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <span
                      style={{
                        color: isActive ? "var(--bg)" : "var(--fg)",
                        whiteSpace: "nowrap",
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.005em",
                        transition: "color 300ms",
                      }}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
