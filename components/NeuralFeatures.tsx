"use client";

import { Lightbulb, PencilLine, CalendarDays, Cpu, Activity, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

// --- Mockup UI Components (Abstract representations of the software) ---

const IdeaEngineMockup = () => (
  <div className="w-full h-full flex flex-col p-6 gap-4">
    <div className="flex items-center justify-between mb-2">
      <div className="h-6 w-32 bg-cyan-500/20 rounded-md" />
      <div className="h-6 w-20 bg-white/5 rounded-full" />
    </div>
    
    {[...Array(3)].map((_, i) => (
      <div key={i} className="w-full p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 bg-white/10 rounded" />
          <div className="h-3 w-1/2 bg-white/5 rounded" />
        </div>
        <div className="flex items-center gap-1 text-cyan-400 text-xs font-medium bg-cyan-500/10 px-2 py-1 rounded">
          <CheckCircle2 className="w-3 h-3" />
          <span>Match</span>
        </div>
      </div>
    ))}
  </div>
);

const ScriptGenMockup = () => (
  <div className="w-full h-full flex p-4 gap-4">
    {/* Sidebar */}
    <div className="hidden sm:flex flex-col w-1/3 space-y-3 pr-4 border-r border-white/10">
      <div className="h-4 w-full bg-white/10 rounded" />
      <div className="h-4 w-5/6 bg-rose-500/20 rounded" />
      <div className="h-4 w-4/6 bg-white/5 rounded" />
    </div>
    {/* Main Editor */}
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3">
        <div className="h-5 w-5 rounded bg-rose-500/20" />
        <div className="h-5 w-5 rounded bg-white/10" />
        <div className="h-5 w-5 rounded bg-white/10" />
      </div>
      <div className="space-y-3 pt-2">
        <div className="h-6 w-1/3 bg-rose-500/20 rounded-md mb-4" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-4/5 bg-white/10 rounded" />
        <div className="h-3 w-5/6 bg-white/10 rounded mt-4" />
        <div className="h-3 w-full bg-white/10 rounded" />
      </div>
    </div>
  </div>
);

const CalendarMockup = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <div className="h-6 w-24 bg-amber-500/20 rounded-md" />
      <div className="flex gap-2">
         <div className="h-6 w-6 rounded bg-white/10" />
         <div className="h-6 w-6 rounded bg-white/10" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 flex-1 mt-2">
      {[...Array(16)].map((_, i) => (
        <div 
          key={i} 
          className={`rounded-lg border border-white/5 p-2 ${
            i === 5 ? 'bg-amber-500/20 border-amber-500/30' : 
            i === 10 ? 'bg-violet-500/20 border-violet-500/30' : 'bg-white/5'
          }`}
        >
           <div className={`h-2 w-4 rounded mb-2 ${i === 5 || i === 10 ? 'bg-white/40' : 'bg-white/10'}`} />
           {(i === 5 || i === 10) && (
              <div className="h-6 w-full bg-white/10 rounded mt-1" />
           )}
        </div>
      ))}
    </div>
  </div>
);

const AutomationMockup = () => (
  <div className="w-full h-full p-6 flex items-center justify-center relative">
    {/* Simple node flow diagram */}
    <div className="flex items-center gap-4 w-full">
      <div className="w-16 h-16 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded bg-white/10" />
      </div>
      <div className="flex-1 h-1 bg-gradient-to-r from-violet-500/50 to-emerald-500/50 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
      </div>
      <div className="w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center z-10">
         <div className="w-8 h-8 rounded bg-white/10" />
      </div>
      <div className="flex-1 h-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50" />
      <div className="w-16 h-16 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center z-10">
         <div className="w-8 h-8 rounded bg-white/10" />
      </div>
    </div>
  </div>
);

const AnalyticsMockup = () => (
  <div className="w-full h-full p-6 flex flex-col gap-6">
    <div className="flex gap-4">
      <div className="flex-1 h-20 rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col justify-between">
         <div className="h-3 w-16 bg-white/10 rounded" />
         <div className="h-6 w-24 bg-violet-500/20 rounded" />
      </div>
      <div className="flex-1 h-20 rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col justify-between">
         <div className="h-3 w-16 bg-white/10 rounded" />
         <div className="h-6 w-24 bg-emerald-500/20 rounded" />
      </div>
    </div>
    
    <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/5 relative overflow-hidden flex items-end p-4 gap-2">
      {/* Abstract Bar Chart */}
      {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
        <div key={i} className="flex-1 bg-violet-500/30 rounded-t-sm" style={{ height: `${height}%` }}>
           <div className="w-full h-1 bg-violet-400 top-0 rounded-t-sm" />
        </div>
      ))}
    </div>
  </div>
);


// --- Feature Block Component ---

interface FeatureBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  mockup: React.ReactNode;
  align: "left" | "right";
  glowColor: string;
}

const FeatureBlock = ({ title, description, icon, mockup, align, glowColor }: FeatureBlockProps) => {
  const isLeft = align === "left";

  const textContent = (
    <div className="flex flex-col justify-center">
      <Reveal>
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-card border-white/10 mb-6 shadow-[0_0_30px_${glowColor}]`}>
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
          {description}
        </p>
      </Reveal>
    </div>
  );

  const previewContent = (
    <div className="flex items-center justify-center">
      <Reveal delay={0.1}>
        <div className="relative group">
          {/* Glow behind the card */}
          <div 
            className="absolute inset-0 blur-[80px] rounded-full opacity-30 pointer-events-none" 
            style={{ backgroundColor: glowColor.replace('rgba(', '').replace(')', '').split(',').slice(0,3).join(',') }} 
          />
          
          {/* Preview Card - consistent dimensions */}
          <div className="relative w-[420px] max-w-full h-[240px] rounded-xl border border-white/10 bg-white/[0.02] shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
            {/* Window Header Bar */}
            <div className="w-full h-8 border-b border-white/10 bg-white/5 flex items-center px-3 gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            {/* Card Content */}
            <div className="w-full h-[calc(100%-2rem)] overflow-hidden">
              {mockup}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center w-full">
      {isLeft ? (
        <>
          {textContent}
          {previewContent}
        </>
      ) : (
        <>
          {previewContent}
          {textContent}
        </>
      )}
    </div>
  );
};

// --- Main Section Component ---

export default function NeuralFeatures() {
  return (
    <section id="features" className="py-20 relative bg-[#030014] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">run your creator system</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-400">
              Stop jumping between 10 different apps. CreatorBit brings your entire workflow into one intelligent interface.
            </p>
          </Reveal>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="flex flex-col gap-16 md:gap-20">
          
          <FeatureBlock 
            title="Idea Engine"
            description="Never run out of inspiration. Our AI analyzes trends in your niche to generate high-performing content concepts that your audience will actually care about."
            icon={<Lightbulb className="w-7 h-7 text-cyan-400" />}
            mockup={<IdeaEngineMockup />}
            align="left"
            glowColor="rgba(6,182,212,0.3)" // Cyan
          />

          <FeatureBlock 
            title="Script Generator"
            description="Turn rough ideas into structured outlines and full video scripts in seconds. The editor is purpose-built for creators, formatting for A-roll, B-roll, and visual cues automatically."
            icon={<PencilLine className="w-7 h-7 text-rose-400" />}
            mockup={<ScriptGenMockup />}
            align="right"
            glowColor="rgba(244,63,94,0.3)" // Rose
          />

          <FeatureBlock 
            title="Content Calendar"
            description="Visualize your entire publishing pipeline. Drag and drop content across platforms, set deadlines, and let the system handle scheduling automatically."
            icon={<CalendarDays className="w-7 h-7 text-amber-400" />}
            mockup={<CalendarMockup />}
            align="left"
            glowColor="rgba(245,158,11,0.3)" // Amber
          />

          <FeatureBlock 
            title="Automation Pipeline"
            description="Set it and forget it. Build visual workflows that automatically post to YouTube, cross-publish to Shorts/Reels, update your Notion, and notify your Discord."
            icon={<Cpu className="w-7 h-7 text-emerald-400" />}
            mockup={<AutomationMockup />}
            align="right"
            glowColor="rgba(16,185,129,0.3)" // Emerald
          />

          <FeatureBlock 
            title="Unified Analytics"
            description="Understand growth across every platform in one dashboard. See exactly which videos drove subscribers, cross-reference revenue, and double down on what works."
            icon={<Activity className="w-7 h-7 text-violet-400" />}
            mockup={<AnalyticsMockup />}
            align="left"
            glowColor="rgba(139,92,246,0.3)" // Violet
          />

        </div>

      </div>
    </section>
  );
}
