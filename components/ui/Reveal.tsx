"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 24 : 0,
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
