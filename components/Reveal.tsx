"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  fullHeight?: boolean;
}

export default function Reveal({ children, width = "fit-content", delay = 0, fullHeight = false }: RevealProps) {
  return (
    <div style={{ width, position: "relative", height: fullHeight ? "100%" : "auto" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        style={{ height: fullHeight ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
