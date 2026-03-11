import Link from "next/link";
import { Brain, Sparkles, Zap, Cpu, CalendarClock, Code2 } from "lucide-react";

export default function HeroBrain() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 neural-grid opacity-30 mask-image-b" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-violet-500/30 text-violet-300 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span>The world's first AI Operating System for Creators</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 neon-text">AI Brain</span> for<br />
          Content Creation
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Generate ideas, write scripts, plan content, and grow faster &mdash; all connected through one intelligent system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link 
            href="/sign-up" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2"
          >
            Get Started Free
            <Zap className="w-4 h-4" />
          </Link>
          <Link 
            href="#demo" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors duration-300"
          >
            View Demo
          </Link>
        </div>
      </div>

      {/* AI Brain Visual */}
      <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1] mt-10">
        {/* Connection Lines Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* Diagonal Lines converging to center */}
             <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-violet-500 animate-[pulse_3s_ease-in-out_infinite]" />
             <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-cyan-500 animate-[pulse_4s_ease-in-out_infinite]" />
             <line x1="20" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-rose-500 animate-[pulse_3.5s_ease-in-out_infinite]" />
             <line x1="80" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-violet-500 animate-[pulse_2.5s_ease-in-out_infinite]" />
           </svg>
        </div>

        {/* The Brain (Center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full" />
            <div className="absolute inset-4 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full blur-xl animate-pulse" />
            <div className="relative glass border-violet-500/50 rounded-full p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              <Brain className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>

        {/* Floating Nodes */}
        <div className="absolute top-[10%] left-[15%] hidden md:flex flex-col items-center gap-2 animate-[bounce_4s_ease-in-out_infinite]">
          <div className="glass p-4 rounded-2xl border-cyan-500/30">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="text-xs font-mono text-cyan-400/80">Idea Engine</span>
        </div>

        <div className="absolute top-[10%] right-[15%] hidden md:flex flex-col items-center gap-2 animate-[bounce_5s_ease-in-out_infinite_reverse]">
          <div className="glass p-4 rounded-2xl border-rose-500/30">
            <Code2 className="w-6 h-6 text-rose-400" />
          </div>
          <span className="text-xs font-mono text-rose-400/80">Script Gen</span>
        </div>

        <div className="absolute bottom-[20%] left-[20%] hidden md:flex flex-col items-center gap-2 animate-[bounce_6s_ease-in-out_infinite]">
          <div className="glass p-4 rounded-2xl border-violet-500/30">
            <CalendarClock className="w-6 h-6 text-violet-400" />
          </div>
          <span className="text-xs font-mono text-violet-400/80">Calendar</span>
        </div>

        <div className="absolute bottom-[20%] right-[20%] hidden md:flex flex-col items-center gap-2 animate-[bounce_4.5s_ease-in-out_infinite_reverse]">
          <div className="glass p-4 rounded-2xl border-emerald-500/30">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-xs font-mono text-emerald-400/80">Automation</span>
        </div>
      </div>
    </section>
  );
}
