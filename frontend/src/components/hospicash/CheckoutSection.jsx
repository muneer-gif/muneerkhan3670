import React from 'react';
import Reveal from '../Reveal';
import CheckoutCard from './CheckoutCard';
import { HOSPICASH_JOURNEY } from '../../data/hospicash';

const CheckoutSection = (props) => (
  <section id="checkout" className="py-20 lg:py-28 scroll-mt-16" data-testid="hospicash-checkout">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
      <Reveal className="lg:col-span-7">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#049297]">How it works</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#022F71] leading-tight">Covered in three simple steps</h2>
        <ol className="mt-10 relative border-l-2 border-dashed border-[#049297]/30 ml-5 space-y-10">
          {HOSPICASH_JOURNEY.map((s, i) => (
            <li key={s.title} className="pl-10 relative" data-testid={`journey-step-${i + 1}`}>
              <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#022F71] text-white text-sm font-semibold flex items-center justify-center ring-8 ring-[#EAF3F6]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="text-lg font-semibold text-[#022F71]">{s.title}</div>
              <p className="mt-1.5 text-sm md:text-[15px] text-[#22405e] leading-relaxed max-w-lg">{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal variant="right" delay={120} className="lg:col-span-5 lg:sticky lg:top-24">
        <CheckoutCard {...props} />
      </Reveal>
    </div>
  </section>
);

export default CheckoutSection;
