"use client";

import Link from "next/link";
import { Zap, ArrowRight, BrainCircuit, Lightbulb, PencilLine, CalendarDays, Activity, Cpu } from "lucide-react";
import { motion } from "framer-motion";

// Helper components for the System Diagram
const FloatingCard = ({ 
  icon, 
  title, 
  delay, 
  x, 
  y 
}: { 
  icon: React.ReactNode, 
  title: string, 
  delay: number,
  x: string,
  y: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.05 }}
      style={{ top: y, left: x }}
      className="absolute -translate-x-1/2 -translate-y-1/2 glass-card p-4 flex items-center gap-3 backdrop-blur-md bg-slate-900/40 border-slate-700/50 shadow-xl cursor-default z-20 w-48"
    >
      <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
        {icon}
      </div>
      <span className="text-sm font-semibold text-white truncate">{title}</span>
    </motion.div>
  );
};

const AnimatedConnectionLine = ({
  startX,
  startY,
  endX,
  endY,
  delay
}: {
  startX: string;
  startY: string;
  endX: string;
  endY: string;
  delay: number;
}) => {
  // We use percentages for start/end points, so we draw an SVG line inside an absolute overlay
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
       {/* Static background dashed line */}
       <line 
         x1={startX} 
         y1={startY} 
         x2={endX} 
         y2={endY} 
         stroke="rgba(255,255,255,0.1)" 
         strokeWidth="2" 
         strokeDasharray="4 4"
       />
       {/* Animated solid line that draws in */}
       <motion.line 
         x1={startX} 
         y1={startY} 
         x2={endX} 
         y2={endY} 
         stroke="url(#gradient-line)" 
         strokeWidth="2"
         initial={{ pathLength: 0, opacity: 0 }}
         animate={{ pathLength: 1, opacity: 1 }}
         transition={{ delay, duration: 1.5, ease: "easeInOut" }}
       />
       {/* Animated Pulse (circle moving along the line) */}
       {/* The pulse animates its cx/cy from start to end */}
       <motion.circle 
         r="4" 
         fill="#06b6d4" 
         filter="blur(1px)"
         initial={{ cx: endX, cy: endY, opacity: 0 }}
         animate={{ cx: startX, cy: startY, opacity: [0, 1, 1, 0] }}
         transition={{ 
           delay: delay + 1.5, // start after line draws
           duration: 3, 
           repeat: Infinity,
           ease: "linear"
         }}
       />
       
       <defs>
         <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
           <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2"/>
         </linearGradient>
       </defs>
    </svg>
  );
};


function SystemDiagram() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background soft glow behind diagram */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" 
      />

      {/* SVG Connecting Lines (drawn underneath nodes) */}
      <div className="absolute inset-0">
        {/* Core is at 50%, 50% */}
        {/* Connection to Idea Engine (top left) */}
        <AnimatedConnectionLine startX="50%" startY="50%" endX="20%" endY="20%" delay={0.2} />
        {/* Connection to Script Gen (bottom left) */}
        <AnimatedConnectionLine startX="50%" startY="50%" endX="15%" endY="75%" delay={0.4} />
        {/* Connection to Calendar (top right) */}
        <AnimatedConnectionLine startX="50%" startY="50%" endX="80%" endY="20%" delay={0.6} />
        {/* Connection to Automation (bottom right) */}
        <AnimatedConnectionLine startX="50%" startY="50%" endX="85%" endY="75%" delay={0.8} />
        {/* Connection to Analytics (far right center) */}
        <AnimatedConnectionLine startX="50%" startY="50%" endX="95%" endY="50%" delay={1.0} />
      </div>

      {/* Central CreatorBit Node */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full animate-pulse" />
          <div className="relative p-6 glass-card border-violet-500/30 flex flex-col items-center justify-center gap-3 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] ring-1 ring-white/10 m-auto">
            <div className="p-4 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-white/10 shadow-inner">
               <BrainCircuit className="w-10 h-10 text-violet-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white tracking-tight">CreatorBit</h3>
              <p className="text-xs text-violet-300 font-medium uppercase tracking-widest mt-1">Core System</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outer Module Nodes */}
      <FloatingCard 
        icon={<Lightbulb className="w-5 h-5 text-cyan-400" />} 
        title="Idea Engine" 
        delay={0.3} x="20%" y="20%" 
      />
      <FloatingCard 
        icon={<PencilLine className="w-5 h-5 text-rose-400" />} 
        title="Script Gen" 
        delay={0.5} x="15%" y="75%" 
      />
      <FloatingCard 
        icon={<CalendarDays className="w-5 h-5 text-amber-400" />} 
        title="Calendar" 
        delay={0.7} x="80%" y="20%" 
      />
      <FloatingCard 
        icon={<Cpu className="w-5 h-5 text-emerald-400" />} 
        title="Automation" 
        delay={0.9} x="85%" y="75%" 
      />
      <FloatingCard 
        icon={<Activity className="w-5 h-5 text-violet-400" />} 
        title="Analytics" 
        delay={1.1} x="95%" y="50%" 
      />

    </div>
  );
}


// --- Main Hero Component ---

export default function HeroSystemPanel() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030014]">
      
      {/* SaaS Background Overlay (Dark gradient & subtle grid) */}
      <div className="absolute inset-0 neural-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)] z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center pt-24 pb-12">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-5/12 text-left z-20 flex flex-col justify-center pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-slate-300 text-sm font-medium mb-8 w-fit shadow-sm bg-white/5"
          >
            <Zap className="w-4 h-4 text-violet-400" />
            <span>The Connected Studio for Creators</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI Brain</span><br />
            for Content<br />
            Creation
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-normal"
          >
            Generate ideas, write scripts, plan content, and grow faster &mdash; all connected through one intelligent system.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/sign-up" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-300 shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass text-slate-300 font-medium hover:text-white hover:bg-white/10 transition-colors duration-300 border border-white/10 flex items-center justify-center text-center"
            >
              View Demo
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Framer Motion System Diagram */}
        <div className="w-full lg:w-7/12 relative z-10 mt-16 lg:mt-0">
           <SystemDiagram />
        </div>
      </div>
      
      {/* Bottom fade gradient to blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
