import React from 'react';
import * as LucideIcons from 'lucide-react';
import { VALUE_CARDS } from '../mock';
import Reveal from './Reveal';

const ValueProposition = () => {
  return (
    <section id="platform" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Value Proposition</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            One platform. <span className="text-gradient-brand">Every category.</span>
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
            Consolidate partnerships, integrations and operations into a single relationship.
          </p>
        </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_CARDS.map((c, i) => {
            const Icon = LucideIcons[c.icon] || LucideIcons.Check;
            return (
              <Reveal key={c.title} delay={i * 90} variant="up">
              <div
                className="group relative rounded-2xl bg-white border border-[#022F71]/10 p-7 card-hover overflow-hidden h-full"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#049297]/5 group-hover:bg-[#049297]/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)'}}>
                    <Icon size={22} className="text-white icon-lift" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#022F71]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#22405e] leading-relaxed">{c.text}</p>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
