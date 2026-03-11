import Navbar from "@/components/Navbar";
import HeroSystemPanel from "@/components/HeroSystemPanel";
import NeuralFeatures from "@/components/NeuralFeatures";
import WorkflowSystem from "@/components/WorkflowSystem";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] selection:bg-violet-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <HeroSystemPanel />
        
        {/* Decorative separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent max-w-4xl mx-auto my-12" />
        
        <NeuralFeatures />
        <WorkflowSystem />
        
        {/* Glow orb separator */}
        <div className="relative w-full h-32 flex justify-center items-center my-12">
           <div className="absolute w-full h-[1px] bg-white/5" />
           <div className="w-64 h-64 bg-cyan-600/10 blur-[60px] rounded-full absolute" />
        </div>
        
        <PricingSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
