import { ArrowRight, Lightbulb, PencilLine, CalendarDays, Rocket, Activity } from "lucide-react";

export default function WorkflowSystem() {
  const workflowSteps = [
    { name: "Idea", icon: <Lightbulb className="w-6 h-6" />, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
    { name: "Script", icon: <PencilLine className="w-6 h-6" />, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" },
    { name: "Schedule", icon: <CalendarDays className="w-6 h-6" />, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
    { name: "Publish", icon: <Rocket className="w-6 h-6" />, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
    { name: "Analyze", icon: <Activity className="w-6 h-6" />, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" }
  ];

  return (
    <section id="workflow" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400 neon-text">Creator Pipeline</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A frictionless, connected workflow from inception to post-analysis.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-4 md:gap-0">
          {/* Connecting Line Backdrop (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-amber-500/20 -translate-y-1/2 z-0" />
          
          {/* Animated pulsing line */}
          <div className="hidden md:block absolute top-[calc(50%-1px)] left-0 h-[2px] w-24 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] -translate-y-1/2 z-0 animate-[moveRight_3s_ease-in-out_infinite]" />

          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center relative z-10 w-full md:w-auto">
              {/* Node */}
              <div className="flex flex-col items-center group">
                <div className={`w-20 h-20 rounded-full glass flex items-center justify-center ${step.bg} ${step.border} border-2 shadow-lg transition-transform duration-300 group-hover:scale-110 mb-4`}>
                  <div className={`${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                <span className="text-white font-medium tracking-wide">{step.name}</span>
              </div>

              {/* Arrow Connector (Mobile/Vertical) */}
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="md:hidden w-6 h-6 text-slate-600 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom keyframe for the glowing line animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes moveRight {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}} />
    </section>
  );
}
