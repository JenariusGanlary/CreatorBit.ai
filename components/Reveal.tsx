"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  fullHeight?: boolean;
}

export default function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  fullHeight = false,
}: RevealProps) {
  const transition = useMemo(
    () => ({
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    }),
    [delay]
  );

  return (
    <motion.div
      style={{
        width,
        height: fullHeight ? "100%" : "auto",
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}