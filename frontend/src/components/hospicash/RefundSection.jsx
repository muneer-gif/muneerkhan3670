import React from 'react';
import { CalendarClock, Copy, WifiOff, ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import { REFUND_STEPS } from '../../data/hospicash';

const FACTS = [
  { icon: CalendarClock, title: '15-day free look', text: 'Full refund less proportionate risk premium and stamp duty, if no claim has been filed.' },
  { icon: Copy, title: 'Duplicate debits', text: 'Any surplus amount is refunded automatically to the original payment source.' },
  { icon: WifiOff, title: 'Failed transactions', text: 'Charged but no policy issued? The amount is reversed within 5 to 7 business days.' },
];

const RefundSection = ({ openDoc }) => (
  <section id="refund-process" className="py-20 lg:py-28 bg-[#022F71] text-white scroll-mt-16 relative overflow-hidden" data-testid="hospicash-refund-process">
    <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
      <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#A0C8D6]">Refund process</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">Changed your mind? Here&apos;s how refunds work.</h2>
        </div>
        <button data-testid="refund-section-policy-btn" onClick={() => openDoc('refund')} className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-[#022F71] transition-colors">
          Read full refund policy <ArrowUpRight size={16} />
        </button>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {REFUND_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div data-testid={`refund-step-${i + 1}`} className="h-full rounded-2xl bg-white/[0.06] border border-white/10 p-7 backdrop-blur-sm">
              <div className="text-5xl font-semibold text-[#049297] leading-none">{String(i + 1).padStart(2, '0')}</div>
              <div className="mt-5 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {FACTS.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <div className="flex gap-4 rounded-2xl bg-white text-[#022F71] p-6 h-full">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#049297]/10 text-[#049297] flex items-center justify-center"><f.icon size={18} /></div>
              <div>
                <div className="font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-[#22405e] leading-relaxed">{f.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default RefundSection;
