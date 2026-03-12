"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CreatorBit replaced 5 tools in my workflow.",
      name: "Alex Carter",
      role: "YouTube Creator • 120K Subscribers",
      avatarBg: "bg-cyan-500",
      delay: 0,
    },
    {
      quote: "The workflow system feels like a command center for my content.",
      name: "Maya Rodriguez",
      role: "TikTok Creator • 800K Followers",
      avatarBg: "bg-pink-500",
      delay: 0.1,
    },
    {
      quote: "I used to jump between tools. Now everything lives in CreatorBit.",
      name: "Daniel Kim",
      role: "Content Strategist",
      avatarBg: "bg-violet-500",
      delay: 0.2,
    }
  ];

  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Creator Loved, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Creator Built</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
              See how creators are transforming their workflow with CreatorBit.
            </p>
          </Reveal>

          {/* Stat Row */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10K+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ideas Generated</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2K+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Scripts Created</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Creators Waiting</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-16">
          {testimonials.map((t, index) => (
            <Reveal key={index} delay={t.delay} width="100%">
              <motion.div 
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col justify-between p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-3xl transition-all duration-300 group-hover:bg-slate-800/60 group-hover:border-slate-700 group-hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] overflow-hidden relative">
                  
                  {/* Subtle top glow inside card */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Quote Mark */}
                    <div className="text-5xl text-violet-500/20 font-serif leading-none mb-4 group-hover:text-violet-500/40 transition-colors">
                      &quot;
                    </div>
                    <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-8 group-hover:text-white transition-colors">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6">
                    {/* Placeholder Avatar */}
                    <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-white shadow-inner shrink-0`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{t.name}</h4>
                      <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
