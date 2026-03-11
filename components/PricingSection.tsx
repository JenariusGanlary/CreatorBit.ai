import { Check, Zap } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic access for new creators",
      features: [
        "10 Ideas / month",
        "3 Scripts / month",
        "Basic scheduling",
        "Standard support"
      ],
      buttonText: "Start Free",
      popular: false,
      color: "border-slate-700/50"
    },
    {
      name: "Creator",
      price: "$29",
      period: "/mo",
      description: "Everything you need to grow",
      features: [
        "Unlimited Ideas",
        "50 Scripts / month",
        "Advanced Analytics",
        "Cross-platform posting",
        "Priority support"
      ],
      buttonText: "Get Creator",
      popular: true,
      color: "border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
    },
    {
      name: "Creator Pro",
      price: "$99",
      period: "/mo",
      description: "For agencies and top teams",
      features: [
        "Everything in Creator",
        "Unlimited Scripts",
        "Custom AI modeling",
        "Team collaboration",
        "API Access"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "border-cyan-500/30"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 neon-text">Output</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Invest in your digital brain. Plans that grow with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative glass-card p-8 flex flex-col ${plan.color} ${plan.popular ? 'scale-105 z-10' : 'hover:scale-105'} transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400">{plan.period}</span>}
              </div>

              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/sign-up" 
                className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
