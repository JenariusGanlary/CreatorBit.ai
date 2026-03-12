"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Layered Gradient Glow - visual climax effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/25 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/15 blur-[100px] rounded-full" />
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 neon-text">Creator System</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop struggling with disjointed tools. Integrate your entire workflow into one intelligent AI brain.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link 
                href="/sign-up" 
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-slate-950 font-bold transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group"
              >
                Start For Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link 
                href="#pricing" 
                className="w-full sm:w-auto px-10 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20 text-center inline-block"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
