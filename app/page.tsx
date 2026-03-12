import Navbar from "@/components/Navbar";
import HeroSystemPanel from "@/components/HeroSystemPanel";
import NeuralFeatures from "@/components/NeuralFeatures";
import WorkflowSystem from "@/components/WorkflowSystem";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] selection:bg-violet-500/30">
      <BackgroundGlow />
      <ParticleBackground />
      <Navbar />
      
      <div className="relative z-10">
        <HeroSystemPanel />
        
        {/* Decorative separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent max-w-4xl mx-auto my-6" />
        
        <NeuralFeatures />
        
        {/* Glow orb separator */}
        <div className="relative w-full h-16 flex justify-center items-center my-6">
           <div className="absolute w-full h-[1px] bg-white/5" />
           <div className="w-64 h-64 bg-violet-600/10 blur-[60px] rounded-full absolute" />
        </div>

        <WorkflowSystem />

        {/* Glow orb separator */}
        <div className="relative w-full h-16 flex justify-center items-center my-6">
           <div className="absolute w-full h-[1px] bg-white/5" />
           <div className="w-64 h-64 bg-cyan-600/10 blur-[60px] rounded-full absolute" />
        </div>

        <Testimonials />
        <div className="relative w-full h-16 flex justify-center items-center my-6">
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
