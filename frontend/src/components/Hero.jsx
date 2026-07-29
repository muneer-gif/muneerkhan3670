import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, Landmark } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="hero-radial relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#049297]/25 bg-white/70 px-4 py-1.5 text-xs font-medium text-[#022F71] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#049297] pulse-dot" />
              Trust <span className="text-[#049297]">•</span> Technology <span className="text-[#049297]">•</span> Healthcare <span className="text-[#049297]">•</span> Reach
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#022F71]">
              Your platform has reach. <br />
              <span className="text-gradient-brand">RevaSure</span> helps it serve more needs.
            </h1>

            <p className="mt-6 text-lg text-[#22405e] max-w-2xl leading-relaxed">
              Offer lending, wellness, healthcare and insurance products through one unified,
              white-label platform — without managing separate partnerships, integrations and
              operational workflows for every category.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#cta" className="btn-primary rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                Partner with RevaSure <ArrowRight size={16} />
              </a>
              <a href="#markets" className="btn-outline-brand rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                Explore market opportunities
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {[
                { k: '₹139+ L Cr', v: 'Combined market reach' },
                { k: '7', v: 'Product categories' },
                { k: '1 API', v: 'Or white-label UI' },
                { k: '2047', v: 'Insurance for All' },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-white/70 border border-[#022F71]/10 p-4 backdrop-blur">
                  <div className="text-xl font-semibold text-[#022F71]">{s.k}</div>
                  <div className="text-xs text-[#22405e]/80 mt-1">{s.v}</div>
                </div>
              ))}
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
  const nodes = [
    { icon: Landmark, label: 'Lending', color: '#022F71' },
    { icon: HeartPulse, label: 'Wellness', color: '#049297' },
    { icon: Sparkles, label: 'Healthcare', color: '#049297' },
    { icon: ShieldCheck, label: 'Insurance', color: '#558CA1' },
  ];
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      {/* rings */}
      <div className="absolute inset-0 rounded-full border border-[#022F71]/10" />
      <div className="absolute inset-6 rounded-full border border-[#049297]/15" />
      <div className="absolute inset-14 rounded-full border border-[#A0C8D6]/40" />

      {/* center hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40 rounded-3xl flex items-center justify-center text-white shadow-2xl"
             style={{background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)'}}>
          <div className="text-center px-4">
            <div className="text-xs uppercase tracking-[0.2em] opacity-80">RevaSure</div>
            <div className="mt-1 text-lg font-semibold leading-tight">One Platform.<br/>Infinite Reach.</div>
          </div>
          <div className="absolute -inset-1 rounded-3xl border border-white/20" />
        </div>
      </div>

      {/* nodes */}
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const r = 44; // % of container
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white border border-[#022F71]/10 shadow-lg flex flex-col items-center justify-center gap-1 card-hover">
              <Icon size={22} style={{ color: n.color, strokeWidth: 1.6 }} />
              <span className="text-[11px] font-medium text-[#022F71]">{n.label}</span>
            </div>
          </div>
        );
      })}

      {/* connector lines using svg */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const r = 44;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#049297" strokeOpacity="0.25" strokeWidth="0.3" strokeDasharray="1 1.5" />
          );
        })}
      </svg>
    </div>
  );
};

export default Hero;
