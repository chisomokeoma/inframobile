"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationType?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight";
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  animationType = "fadeUp",
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const getAnimationClasses = () => {
    const baseTransition = "transition-all duration-500 ease-out";

    if (!isVisible) {
      switch (animationType) {
        case "fadeUp":
          return `${baseTransition} opacity-0 translate-y-6`;
        case "fadeIn":
          return `${baseTransition} opacity-0`;
        case "scale":
          return `${baseTransition} opacity-0 scale-90`;
        case "slideLeft":
          return `${baseTransition} opacity-0 -translate-x-6`;
        case "slideRight":
          return `${baseTransition} opacity-0 translate-x-6`;
        default:
          return `${baseTransition} opacity-0 translate-y-6`;
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
