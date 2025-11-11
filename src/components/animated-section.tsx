"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationType?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight";
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  animationType = "fadeUp",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const getAnimationClasses = () => {
    const baseTransition = "transition-all duration-700 ease-out";

    if (!isVisible) {
      switch (animationType) {
        case "fadeUp":
          return `${baseTransition} opacity-0 translate-y-8`;
        case "fadeIn":
          return `${baseTransition} opacity-0`;
        case "scale":
          return `${baseTransition} opacity-0 scale-95`;
        case "slideLeft":
          return `${baseTransition} opacity-0 -translate-x-8`;
        case "slideRight":
          return `${baseTransition} opacity-0 translate-x-8`;
        default:
          return `${baseTransition} opacity-0 translate-y-8`;
      }
    }

    switch (animationType) {
      case "fadeUp":
        return `${baseTransition} opacity-100 translate-y-0`;
      case "fadeIn":
        return `${baseTransition} opacity-100`;
      case "scale":
        return `${baseTransition} opacity-100 scale-100`;
      case "slideLeft":
        return `${baseTransition} opacity-100 translate-x-0`;
      case "slideRight":
        return `${baseTransition} opacity-100 translate-x-0`;
      default:
        return `${baseTransition} opacity-100 translate-y-0`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
