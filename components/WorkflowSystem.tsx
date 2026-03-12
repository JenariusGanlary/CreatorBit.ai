"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, PencilLine, CalendarDays, Rocket, Activity, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function WorkflowSystem() {
  const workflowSteps = [
    { 
      title: "Generate Ideas", 
      description: "AI-powered brainstorming and trend discovery.",
      icon: <Lightbulb className="w-6 h-6" />, 
      color: "text-cyan-400",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.25)]",
      border: "border-slate-800/60 hover:border-cyan-500/40",
      bg: "bg-cyan-500/10",
    },
    { 
      title: "Write Scripts", 
      description: "Turn raw ideas into structured scripts instantly.",
      icon: <PencilLine className="w-6 h-6" />, 
      color: "text-pink-400",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.25)]",
      border: "border-slate-800/60 hover:border-pink-500/40",
      bg: "bg-pink-500/10",
    },
    { 
      title: "Plan Schedule", 
      description: "Organize your publishing calendar visually.",
      icon: <CalendarDays className="w-6 h-6" />, 
      color: "text-violet-400",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.25)]",
      border: "border-slate-800/60 hover:border-violet-500/40",
      bg: "bg-violet-500/10",
    },
    { 
      title: "Publish Content", 
      description: "Distribute your content across platforms.",
      icon: <Rocket className="w-6 h-6" />, 
      color: "text-emerald-400",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.25)]",
      border: "border-slate-800/60 hover:border-emerald-500/40",
      bg: "bg-emerald-500/10",
    },
    { 
      title: "Analyze Performance", 
      description: "Understand engagement and optimize future content.",
      icon: <Activity className="w-6 h-6" />, 
      color: "text-amber-400",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.25)]",
      border: "border-slate-800/60 hover:border-amber-500/40",
      bg: "bg-amber-500/10",
    }
  ];

  return (
    <section id="workflow" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Creator Workflow</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From idea generation to performance insights, CreatorBit powers every stage of your content system.
            </p>
          </Reveal>
        </div>

        {/* Horizontal Workflow Diagram */}
        <div className="relative group/workflow mt-16">
          
          {/* Animated background connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-slate-800 z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-violet-500/70 to-transparent"
              initial={{ left: "-30%" }}
              whileInView={{ left: "130%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 relative z-10 w-full items-stretch justify-between">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative flex-1 group w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
                  <Reveal delay={index * 0.1}>
                    <motion.div 
                      whileHover={{ y: -6 }}
                      className={`
                        h-full flex flex-col items-center text-center p-6 
                        bg-slate-900/40 backdrop-blur-xl
                        border transition-all duration-300
                        rounded-2xl relative overflow-hidden
                        ${step.border} ${step.glow}
                      `}
                    >
                      {/* Hover Glow Background inside card */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Step Number Top Left */}
                      <div className="absolute top-4 left-4 text-slate-600 font-mono text-xs font-semibold group-hover:text-slate-400 transition-colors">
                        {index + 1}
                      </div>

                      {/* Icon container */}
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-4
                        ${step.bg} ${step.color} border border-white/5
                        shadow-inner transition-transform duration-300 group-hover:scale-110
                        relative z-10
                      `}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-white font-medium text-lg mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  </Reveal>
                </div>

                {/* Arrow Mobile/Tablet */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex lg:hidden justify-center py-2 w-full">
                    <ArrowRight className="w-5 h-5 text-slate-700 rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
