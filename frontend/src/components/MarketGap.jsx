import React from 'react';
import { MARKET_GAPS } from '../mock';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import Brand from './Brand';

const MarketGap = () => {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal variant="left">
        <div>
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">The Market Gap</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            The opportunity is clear. <br />
            <span className="text-gradient-brand">The operating model is not.</span>
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed max-w-xl">
            Many fintechs and corporate business correspondents have customer reach but face
            practical barriers when adding new product categories.
          </p>

          <div className="mt-8 rounded-2xl border border-[#049297]/25 bg-[#F7FAFC] p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#049297]/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight size={18} className="text-[#049297]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#022F71]"><Brand /> closes the gap</div>
                <div className="text-sm text-[#22405e] mt-1">
                  <Brand /> brings these requirements together through one platform relationship.
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal variant="right" delay={100}>
        <div className="grid sm:grid-cols-2 gap-4">
          {MARKET_GAPS.map((g, i) => (
            <div
              key={g}
              className="rounded-2xl border border-[#022F71]/10 bg-[#F7FAFC] p-5 card-hover fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#022F71]/10 flex items-center justify-center">
                  <AlertCircle size={18} className="text-[#049297]" strokeWidth={1.6} />
                </div>
                <div className="text-sm font-medium text-[#022F71] leading-snug pt-1.5">{g}</div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MarketGap;
