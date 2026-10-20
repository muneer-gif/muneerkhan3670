import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Reveal from '../Reveal';
import { HOSPICASH } from '../../data/hospicash';

const ITEMS = [
  { key: 'phone', icon: Phone, label: 'Helpline / WhatsApp', value: HOSPICASH.phone, href: `tel:${HOSPICASH.phone}` },
  { key: 'email', icon: Mail, label: 'Email', value: HOSPICASH.email, href: `mailto:${HOSPICASH.email}` },
  { key: 'hours', icon: Clock, label: 'Operating hours', value: HOSPICASH.hours },
  { key: 'address', icon: MapPin, label: 'Registered office', value: HOSPICASH.address },
];

const SupportSection = () => (
  <section className="py-20 lg:py-24 bg-white" data-testid="hospicash-support">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#049297]">Claims & support</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#022F71] leading-tight">We&apos;re here when you need us</h2>
        <p className="mt-4 text-base text-[#22405e] leading-relaxed">
          Claims can be submitted directly to Future Generali or through our customer care channel, along with the documents listed in your policy certificate.
        </p>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ITEMS.map((it, i) => {
          const Tag = it.href ? 'a' : 'div';
          return (
            <Reveal key={it.key} delay={i * 70}>
              <Tag href={it.href} data-testid={`support-${it.key}`} className="card-hover block h-full rounded-2xl border border-[#022F71]/10 bg-[#F7FAFC] p-6">
                <it.icon size={20} className="text-[#049297]" />
                <div className="mt-4 text-xs uppercase tracking-wider text-[#558CA1] font-semibold">{it.label}</div>
                <div className="mt-1 text-sm font-semibold text-[#022F71] leading-relaxed break-words">{it.value}</div>
              </Tag>
            </Reveal>
          );
        })}
      </div>
      <p data-testid="hospicash-disclaimer" className="mt-12 text-xs italic text-[#22405e]/80 leading-relaxed max-w-4xl">{HOSPICASH.disclaimer}</p>
    </div>
  </section>
);

export default SupportSection;
