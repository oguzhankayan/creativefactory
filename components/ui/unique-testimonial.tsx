"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "This changed everything for me.",
    author: "Sarah Chen",
    role: "Designer at Figma",
    avatar:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Simply brilliant. Nothing else compares.",
    author: "Marcus Johnson",
    role: "Engineer at Vercel",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "The attention to detail is unmatched.",
    author: "Elena Rodriguez",
    role: "Founder at Craft",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop",
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
    <div className="flex flex-col items-center gap-10 py-16">
      {/* Quote Container */}
      <div className="relative px-8">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          &ldquo;
        </span>

        <p
          className={cn(
            "text-2xl md:text-3xl font-light text-white text-center max-w-xl leading-relaxed transition-all duration-400 ease-out",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100"
          )}
        >
          {displayedQuote}
        </p>

        <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          &rdquo;
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* Role text */}
        <p
          className={cn(
            "text-xs text-white/55 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}
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
                    ? "#ffffff"
                    : isHovered
                      ? "rgba(255,255,255,0.10)"
                      : "transparent",
                  boxShadow: isActive ? "0 10px 25px -5px rgba(0,0,0,0.3)" : "none",
                  transition:
                    "background 500ms cubic-bezier(0.4,0,0.2,1), box-shadow 500ms cubic-bezier(0.4,0,0.2,1), padding 500ms cubic-bezier(0.4,0,0.2,1)",
                }}
                className={cn(
                  "relative flex items-center gap-0 rounded-full cursor-pointer",
                  showName ? "pr-4 pl-2 py-2" : "p-0.5"
                )}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    style={isActive ? { boxShadow: "0 0 0 2px rgba(19,22,28,0.25)" } : undefined}
                    className={cn(
                      "w-8 h-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      !isActive && "hover:scale-105"
                    )}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: showName ? "1fr" : "0fr",
                    opacity: showName ? 1 : 0,
                    marginLeft: showName ? "0.625rem" : "0",
                    transition:
                      "grid-template-columns 500ms cubic-bezier(0.4,0,0.2,1), opacity 500ms cubic-bezier(0.4,0,0.2,1), margin-left 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <span
                      style={{
                        color: isActive ? "#13161c" : "#ffffff",
                        whiteSpace: "nowrap",
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: 500,
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
