import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, Landmark } from 'lucide-react';
import Brand from './Brand';

const Hero = () => {
  return (
    <section id="top" className="hero-radial relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full float-slow pointer-events-none"
           style={{background: 'radial-gradient(circle, rgba(4,146,151,0.20), transparent 65%)'}} />
      <div className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full float-slower pointer-events-none"
           style={{background: 'radial-gradient(circle, rgba(2,47,113,0.16), transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-16 lg:pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#049297]/25 bg-white/80 px-4 py-1.5 text-xs font-medium text-[#022F71] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#049297] pulse-dot" />
              <span className="hero-bullet hero-bullet-1">Trust</span>
              <span className="text-[#049297]">&bull;</span>
              <span className="hero-bullet hero-bullet-2">Technology</span>
              <span className="text-[#049297]">&bull;</span>
              <span className="hero-bullet hero-bullet-3">Reach</span>
            </div>

            <h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#022F71]"
              style={{ textIndent: '-0.045em' }}
            >
              Your platform has reach. <br />
              <Brand /> helps you monetise better.
            </h1>

            <p className="mt-6 text-lg text-[#22405e] max-w-2xl leading-relaxed">
              Offer lending, wellness, healthcare and insurance* products through a single gateway,
              white-label platform&mdash;without managing separate partnerships, integrations and
              operational workflows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta" className="btn-primary rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                Partner with RevaSure <ArrowRight size={16} />
              </a>
              <a href="#markets" className="btn-outline-brand rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                Explore Opportunities
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroVisual = () => {
  // Order: Lending (top), Wellness (right), Insurance (bottom), Healthcare (left)
  const nodes = [
    { icon: Landmark, label: 'Lending', color: '#022F71' },
    { icon: HeartPulse, label: 'Wellness', color: '#049297' },
    { icon: ShieldCheck, label: 'Insurance*', color: '#558CA1' },
    { icon: Sparkles, label: 'Healthcare', color: '#049297' },
  ];

  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Decorative rings */}
      <div className="absolute inset-[6%] rounded-full border border-[#022F71]/10 orbit-spin" />
      <div className="absolute inset-[16%] rounded-full border border-[#049297]/15 orbit-spin-rev" />
      <div className="absolute inset-[28%] rounded-full border border-[#A0C8D6]/40 orbit-spin" />

      {/* Center hub */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative w-[34%] h-[34%] sm:w-[36%] sm:h-[36%] lg:w-[38%] lg:h-[38%] rounded-3xl flex items-center justify-center text-white shadow-2xl glow-ring pointer-events-auto"
          style={{
            background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)',
          }}
        >
          <div className="text-center px-3">
            <div className="text-[13px] sm:text-[14px] md:text-base font-bold tracking-tight">RevaSure</div>
            <div className="mt-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium leading-snug opacity-95">
              One Platform.<br />Infinite Possibilities.
            </div>
          </div>
          <div className="absolute -inset-1 rounded-3xl border border-white/20" />
        </div>
      </div>

      {/* Satellites */}
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const r = 42;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] rounded-2xl bg-white border border-[#022F71]/10 shadow-lg flex flex-col items-center justify-center gap-1 card-hover">
              <Icon size={20} style={{ color: n.color, strokeWidth: 1.6 }} className="icon-lift" />
              <span className="text-[10px] sm:text-[11px] font-medium text-[#022F71] leading-none">{n.label}</span>
            </div>
          </div>
        );
      })}

      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const r = 42;
          const startR = 20; // just outside the center hub edge
          const x1 = 50 + Math.cos(angle) * startR;
          const y1 = 50 + Math.sin(angle) * startR;
          const x2 = 50 + Math.cos(angle) * r;
          const y2 = 50 + Math.sin(angle) * r;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#049297"
              strokeOpacity="0.35"
              strokeWidth="0.4"
              strokeDasharray="1.5 1.5"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Hero;
