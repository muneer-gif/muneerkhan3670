import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../mock';
import { ChevronRight } from 'lucide-react';

const Architecture = () => {
  const [active, setActive] = useState(2);
  const step = ARCHITECTURE_STEPS.find((s) => s.id === active) || ARCHITECTURE_STEPS[0];
  const StepIcon = LucideIcons[step.icon] || LucideIcons.Circle;

  return (
    <section id="architecture" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Solution Architecture</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            How RevaSure <span className="text-gradient-brand">connects the flow</span>
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
            From your existing platform to a coordinated product ecosystem — in five clear steps.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Steps rail */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_STEPS.map((s) => {
              const Icon = LucideIcons[s.icon] || LucideIcons.Circle;
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all flex items-center gap-4 ${
                    isActive
                      ? 'bg-[#022F71] text-white border-[#022F71] shadow-xl shadow-[#022F71]/10'
                      : 'bg-[#F7FAFC] border-[#022F71]/10 text-[#022F71] hover:border-[#049297]'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-white/15' : 'bg-white border border-[#022F71]/10'
                  }`}>
                    <Icon size={20} strokeWidth={1.6} className={isActive ? 'text-white' : 'text-[#049297]'} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-[11px] uppercase tracking-widest ${isActive ? 'text-white/70' : 'text-[#558CA1]'}`}>Step {s.id}</div>
                    <div className="font-semibold">{s.title}</div>
                  </div>
                  <ChevronRight size={18} className={isActive ? 'text-white' : 'text-[#558CA1]'} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#022F71]/10 p-8 lg:p-10 h-full relative overflow-hidden bg-[#F7FAFC]">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full" style={{background: 'radial-gradient(circle, rgba(4,146,151,0.10), transparent 70%)'}} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                       style={{background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)'}}>
                    <StepIcon size={26} strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#049297]">Step {step.id}</div>
                    <div className="text-2xl md:text-3xl font-semibold text-[#022F71]">{step.title}</div>
                  </div>
                </div>
                <p className="mt-6 text-[#22405e] leading-relaxed">{step.body}</p>

                {step.items.length > 0 && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                    {step.items.map((it) => (
                      <div key={it} className="rounded-xl bg-white border border-[#022F71]/10 px-4 py-3 text-sm text-[#022F71] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#049297]" />
                        {it}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
