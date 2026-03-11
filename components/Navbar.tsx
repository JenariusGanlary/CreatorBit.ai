import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors duration-500" />
            <BrainCircuit className="w-8 h-8 text-violet-400 relative z-10" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white flex items-center">
            Creator<span className="text-violet-400">Bit</span>
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#features" className="hover:text-white transition-colors duration-200">
            Features
          </Link>
          <Link href="#workflow" className="hover:text-white transition-colors duration-200">
            Workflow
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors duration-200">
            Pricing
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
            Sign In
          </Link>
          <Link 
            href="/sign-up" 
            className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
