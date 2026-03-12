"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      
      {/* Soft Violet Glow */}
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-2%", "2%", "-2%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-violet-600/10 rounded-full blur-3xl opacity-50"
      />

      {/* Soft Blue Glow */}
      <motion.div
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["2%", "-2%", "2%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[900px] max-h-[900px] bg-blue-600/10 rounded-full blur-3xl opacity-40"
      />

      {/* Soft Indigo Glow */}
      <motion.div
        animate={{
          x: ["-3%", "3%", "-3%"],
          y: ["5%", "-5%", "5%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-indigo-600/10 rounded-full blur-[150px] opacity-40 mix-blend-screen"
      />
      
      {/* Noise Texture Overlay to prevent color banding */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
