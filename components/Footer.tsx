import Link from "next/link";
import { BrainCircuit, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <BrainCircuit className="w-6 h-6 text-violet-400" />
            <span className="font-bold text-lg tracking-tight text-white">
              Creator<span className="text-violet-400">Bit</span>
            </span>
          </Link>
          <p className="text-slate-500 text-sm max-w-sm">
            The AI Operating System designed to help creators generate, plan, and analyze content faster.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Product</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><Link href="#features" className="hover:text-violet-400 transition-colors">Features</Link></li>
            <li><Link href="#workflow" className="hover:text-violet-400 transition-colors">Workflow</Link></li>
            <li><Link href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</Link></li>
            <li><Link href="/docs" className="hover:text-violet-400 transition-colors">Documentation</Link></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Connect</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-400 mb-6">
             <li><Link href="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms" className="hover:text-violet-400 transition-colors">Terms of Service</Link></li>
          </ul>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between text-slate-600 text-xs">
        <p>&copy; {new Date().getFullYear()} CreatorBit. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built for the future of creation by GanlaryLabs.</p>
      </div>
    </footer>
  );
}
