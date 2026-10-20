import React from 'react';
import { ArrowRight, BedDouble, ShieldCheck, BadgeCheck } from 'lucide-react';
import Reveal from '../Reveal';
import Brand from '../Brand';
import { HOSPICASH, HOSPICASH_IMAGE } from '../../data/hospicash';

const FloatChip = ({ icon: Icon, label, value, className, testid }) => (
  <div data-testid={testid} className={`absolute bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_18px_40px_-18px_rgba(2,47,113,0.45)] border border-[#022F71]/10 px-4 py-3 flex items-center gap-3 ${className}`}>
    <div className="w-10 h-10 rounded-xl bg-[#049297]/10 text-[#049297] flex items-center justify-center"><Icon size={20} /></div>
    <div className="leading-tight">
      <div className="text-[11px] uppercase tracking-wider text-[#558CA1] font-semibold">{label}</div>
      <div className="text-base font-semibold text-[#022F71]">{value}</div>
    </div>
  </div>
);

const HospicashHero = () => (
  <section className="hero-radial relative overflow-hidden" data-testid="hospicash-hero">
    <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full float-slow pointer-events-none"
         style={{ background: 'radial-gradient(circle, rgba(4,146,151,0.22), transparent 65%)' }} />
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24 relative grid lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#049297]/25 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#049297] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#049297] pulse-dot" />
          {HOSPICASH.name} · Health & Accident Cover
        </div>
        <h1 data-testid="hospicash-title" className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#022F71] font-semibold">
          Complete Health <span className="text-[#049297]">&amp;</span> Accident Protection
        </h1>
        <p className="mt-5 text-base md:text-lg text-[#22405e] max-w-xl leading-relaxed">
          {HOSPICASH.tagline}. Daily hospital cash, ICU cash, accident and critical illness cover for your family, brought to you by Future Generali &amp; <Brand />.
        </p>

        <div className="mt-8 flex flex-wrap items-end gap-6">
          <div data-testid="hospicash-hero-price">
            <div className="text-xs uppercase tracking-widest text-[#558CA1] font-semibold">All this for just</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-semibold text-[#022F71] tracking-tight">{HOSPICASH.premium}</span>
              <span className="text-sm text-[#22405e]">/ year</span>
            </div>
            <div className="text-xs text-[#22405e]">{HOSPICASH.premiumNote}</div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#checkout" data-testid="hospicash-hero-buy-btn" className="btn-teal px-6 py-3.5 rounded-lg text-sm font-medium inline-flex items-center gap-2">
            Buy Now <ArrowRight size={16} className="arrow-nudge" />
          </a>
          <a href="#benefits" data-testid="hospicash-hero-benefits-btn" className="btn-outline-brand px-6 py-3.5 rounded-lg text-sm font-medium">
            View benefits
          </a>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-[#22405e]">
          <BadgeCheck size={16} className="text-[#049297]" />
          Underwritten by <span className="font-semibold text-[#022F71]">{HOSPICASH.insurer}</span>
        </div>
      </Reveal>

      <Reveal variant="right" delay={120} className="lg:col-span-6">
        <div className="relative mx-auto max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#049297]/10 rotate-2" />
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_30px_60px_-25px_rgba(2,47,113,0.55)] aspect-[4/3]">
            <img src={HOSPICASH_IMAGE} alt="A three-generation family protected by Hospicash" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022F71]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-xs uppercase tracking-widest text-[#A0C8D6] font-semibold">Secure your family today</div>
              <div className="text-lg font-semibold">One cover. The whole family&apos;s peace of mind.</div>
            </div>
          </div>
          <FloatChip testid="hero-chip-hospital" icon={BedDouble} label="Hospital cash" value="₹1,000 / day" className="-left-4 sm:-left-10 top-8 float-slow" />
          <FloatChip testid="hero-chip-accident" icon={ShieldCheck} label="Accident cover" value="₹1,00,000" className="-right-3 sm:-right-8 top-1/2 float-slower" />
        </div>
      </Reveal>
    </div>
  </section>
);

export default HospicashHero;
