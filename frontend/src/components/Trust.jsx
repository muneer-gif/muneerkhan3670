import React from 'react';
import * as LucideIcons from 'lucide-react';
import { TRUST_CARDS } from '../mock';
import { Info } from 'lucide-react';

const Trust = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Trust & Readiness</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            Built for <span className="text-gradient-brand">regulated, real-world</span> distribution
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CARDS.map((c, i) => {
            const Icon = LucideIcons[c.icon] || LucideIcons.ShieldCheck;
            return (
              <div
                key={c.title}
                className="rounded-2xl bg-[#F7FAFC] border border-[#022F71]/10 p-7 card-hover fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#049297]/25 flex items-center justify-center">
                  <Icon size={22} className="text-[#049297]" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#022F71]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#22405e] leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-[#A0C8D6]/50 bg-[#F7FAFC] p-5 flex items-start gap-3">
          <Info size={18} className="text-[#049297] mt-0.5 flex-shrink-0" />
          <div className="text-sm text-[#22405e]">
            <span className="font-semibold text-[#022F71]">Compliance approach:</span> Product
            distribution follows applicable Indian regulatory requirements and the processes of
            authorised product partners.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
