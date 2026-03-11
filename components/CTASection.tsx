import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 bottom-0 right-0 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 neon-text">Creator System</span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Stop struggling with disjointed tools. Integrate your entire workflow into one intelligent AI brain.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/sign-up" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
          >
            Start For Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors duration-300 text-center"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
