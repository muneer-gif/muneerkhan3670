import React, { useEffect, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../mock';
import { ChevronRight, ArrowUpRight, X } from 'lucide-react';
import Reveal from './Reveal';
import Brand from './Brand';
import { withBrand } from '../utils/withBrand';

const LG_BREAKPOINT = 1024; // Tailwind lg breakpoint

const Architecture = () => {
  const [active, setActive] = useState(2);
  const [openStep, setOpenStep] = useState(null); // Mobile: full-screen modal step
  const step = ARCHITECTURE_STEPS.find((s) => s.id === active) || ARCHITECTURE_STEPS[0];
  const StepIcon = LucideIcons[step.icon] || LucideIcons.Circle;

  // ESC to close mobile modal + body scroll lock
  useEffect(() => {
    if (!openStep) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenStep(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [openStep]);

  // Click handler: desktop → set active step; mobile → open modal
  const handleStepClick = (s) => {
    if (typeof window !== 'undefined' && window.innerWidth < LG_BREAKPOINT) {
      setOpenStep(s);
    } else {
      setActive(s.id);
    }
  };

  const modalStep = openStep;
  const ModalIcon = modalStep ? (LucideIcons[modalStep.icon] || LucideIcons.Circle) : null;

  return (
    <section id="architecture" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Solution Architecture</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            How <Brand /> <span className="text-gradient-brand">connects the flow</span>
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
            From your existing platform to a coordinated product ecosystem &mdash; in five clear steps.
          </p>
        </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Steps rail */}
          <Reveal variant="left" delay={80} className="lg:col-span-5">
          <div className="space-y-3">
            {ARCHITECTURE_STEPS.map((s) => {
              const Icon = LucideIcons[s.icon] || LucideIcons.Circle;
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => handleStepClick(s)}
                  className={`group w-full text-left rounded-2xl border p-5 transition-all flex items-center gap-4 bg-[#F7FAFC] border-[#022F71]/10 text-[#022F71] hover:border-[#049297] ${
                    isActive
                      ? 'lg:bg-[#022F71] lg:text-white lg:border-[#022F71] lg:shadow-xl lg:shadow-[#022F71]/10'
                      : ''
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-[#022F71]/10 ${
                    isActive ? 'lg:bg-white/15 lg:border-transparent' : ''
                  }`}>
                    <Icon size={20} strokeWidth={1.6} className={`text-[#049297] ${isActive ? 'lg:text-white' : ''}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-[11px] uppercase tracking-widest font-semibold text-[#049297] ${isActive ? 'lg:text-white/90' : ''}`}>Step {s.id}</div>
                    <div className="font-semibold">{s.title}</div>
                  </div>

                  {/* Mobile: animated ArrowUpRight chip (same as Product tiles) */}
                  <span className="arrow-nudge inline-flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-[#022F71]/10 group-hover:bg-[#022F71]/20 transition-colors">
                    <ArrowUpRight size={20} strokeWidth={2.5} className="text-[#022F71]" />
                  </span>

                  {/* Desktop: chevron only */}
                  <ChevronRight size={18} className={`hidden lg:block text-[#049297] ${isActive ? 'lg:text-white' : ''}`} />
                </button>
              );
            })}
          </div>
          </Reveal>

          {/* Detail panel — desktop only */}
          <Reveal variant="right" delay={160} className="hidden lg:block lg:col-span-7">
          <div>
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
                <p className="mt-6 text-[#22405e] leading-relaxed">{withBrand(step.body)}</p>

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
          </Reveal>
        </div>
      </div>

      {/* Mobile modal — matches the Products tile modal styling */}
      {modalStep && (
        <div
          className="fixed inset-0 z-[60] bg-[#022F71]/50 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto lg:hidden"
          onClick={() => setOpenStep(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-[#022F71]/10 my-4 sm:my-6 max-h-[calc(100vh-2rem)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating close button */}
            <button
              onClick={() => setOpenStep(null)}
              aria-label="Close details"
              className="absolute -top-3 -right-3 sm:top-3 sm:right-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[#022F71]/20 flex items-center justify-center text-[#022F71] hover:bg-[#022F71] hover:text-white hover:border-[#022F71] transition-colors"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-5 sm:p-8 pr-6 sm:pr-10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                     style={{background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)'}}>
                  {ModalIcon && <ModalIcon size={26} strokeWidth={1.6} />}
                </div>
                <div className="pr-8">
                  <div className="text-xs uppercase tracking-widest text-[#049297] font-semibold">Step {modalStep.id}</div>
                  <div className="text-2xl font-semibold text-[#022F71]">{modalStep.title}</div>
                </div>
              </div>

              <p className="mt-5 text-[#22405e] leading-relaxed">{withBrand(modalStep.body)}</p>

              {modalStep.items.length > 0 && (
                <div className="mt-5 grid gap-2.5">
                  {modalStep.items.map((it) => (
                    <div key={it} className="rounded-xl bg-[#F7FAFC] border border-[#022F71]/10 px-4 py-3 text-sm text-[#022F71] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#049297] flex-shrink-0" />
                      {it}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Architecture;
