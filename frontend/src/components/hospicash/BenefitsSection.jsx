import React from 'react';
import { BedDouble, Activity, ShieldCheck, HeartPulse, Baby, Stethoscope, ScanLine, Sparkles } from 'lucide-react';
import Reveal from '../Reveal';
import { HOSPICASH_BENEFITS, HOSPICASH_EXTRAS, HOSPICASH } from '../../data/hospicash';

const ICONS = { BedDouble, Activity, ShieldCheck, HeartPulse, Baby, Stethoscope, ScanLine };

const BenefitCard = ({ b }) => {
  const Icon = ICONS[b.icon];
  const dark = b.featured;
  return (
    <div
      data-testid={`benefit-card-${b.key}`}
      className={`card-hover h-full rounded-2xl p-6 md:p-7 border flex flex-col ${dark ? 'bg-[#022F71] text-white border-[#022F71]' : 'bg-white border-[#022F71]/10'}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? 'bg-white/10 text-[#A0C8D6]' : 'bg-[#049297]/10 text-[#049297]'}`}>
        <Icon size={22} />
      </div>
      <div className={`mt-6 text-sm font-medium ${dark ? 'text-[#A0C8D6]' : 'text-[#558CA1]'}`}>{b.title}</div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className={`text-3xl md:text-4xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-[#022F71]'}`}>{b.value}</span>
        {b.unit && <span className={`text-sm ${dark ? 'text-white/80' : 'text-[#22405e]'}`}>{b.unit}</span>}
      </div>
      <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-white/85' : 'text-[#22405e]'}`}>{b.note}</p>
    </div>
  );
};

const ExtrasCard = () => (
  <div data-testid="benefit-card-extras" className="card-hover h-full rounded-2xl p-6 md:p-7 bg-[#049297] text-white flex flex-col">
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/90">
      <Sparkles size={14} /> Special / Value-added
    </div>
    <div className="mt-5 space-y-4">
      {HOSPICASH_EXTRAS.map((e) => {
        const Icon = ICONS[e.icon];
        return (
          <div key={e.key} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center"><Icon size={18} /></div>
            <div className="leading-tight">
              <div className="text-sm text-white/85">{e.title}</div>
              <div className="text-lg font-semibold">{e.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const BenefitsSection = () => (
  <section id="benefits" className="py-20 lg:py-28 bg-white scroll-mt-16" data-testid="hospicash-benefits">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#049297]">What&apos;s covered</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#022F71] leading-tight">Seven protections. One simple premium.</h2>
        <p className="mt-4 text-base text-[#22405e] leading-relaxed">
          Cash support when you&apos;re in hospital, cover against accidents and critical illness, plus value-added health services, all for {HOSPICASH.premium} a year.
        </p>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {HOSPICASH_BENEFITS.map((b, i) => (
          <Reveal key={b.key} delay={i * 70}><BenefitCard b={b} /></Reveal>
        ))}
        <Reveal delay={HOSPICASH_BENEFITS.length * 70}><ExtrasCard /></Reveal>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
