import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../lib/motion";

type RevealTag = "div" | "span" | "li" | "ul" | "ol" | "p" | "section" | "article" | "header" | "footer";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** render as a specific element (default div) */
  as?: RevealTag;
  /** initial horizontal offset in px (reference uses -100) */
  x?: number;
  /** initial vertical offset in px */
  y?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className,
  as = "div",
  x = 0,
  y = 0,
  opacity = 0,
  delay = 0,
  duration = 0.9,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { x, y, opacity },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionComponent>
  );
}
