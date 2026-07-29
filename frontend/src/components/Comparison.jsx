import React from 'react';
import { COMPARISON } from '../mock';
import { AlertCircle, Check } from 'lucide-react';
import Reveal from './Reveal';

const Comparison = () => {
  return (
    <section id="comparison" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Traditional vs RevaSure</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            A simpler way to <span className="text-gradient-brand">expand your platform</span>
          </h2>
        </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="mt-12 rounded-2xl border border-[#022F71]/10 bg-white overflow-hidden">
          <div className="grid grid-cols-2 border-b border-[#022F71]/10">
            <div className="p-6 bg-[#F7FAFC]">
              <div className="text-xs uppercase tracking-widest text-[#22405e] font-semibold">Traditional expansion model</div>
              <div className="text-lg font-semibold text-[#22405e] mt-1">The Existing Way</div>
            </div>
            <div className="p-6" style={{background: 'linear-gradient(135deg, rgba(2,47,113,0.04), rgba(4,146,151,0.06))'}}>
              <div className="text-xs uppercase tracking-widest text-[#049297]">RevaSure model</div>
              <div className="text-lg font-semibold text-[#022F71] mt-1">The unified way</div>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-[#022F71]/5 last:border-b-0 hover:bg-[#049297]/[0.03] transition-colors ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#F7FAFC]/60'
              }`}
            >
              <div className="p-5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#22405e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle size={14} className="text-[#22405e]" strokeWidth={2} />
                </div>
                <div className="text-sm text-[#22405e]">{row[0]}</div>
              </div>
              <div className="p-5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#049297]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-[#049297]" />
                </div>
                <div className="text-sm font-medium text-[#022F71]">{row[1]}</div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Comparison;
