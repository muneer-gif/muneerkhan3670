import React from 'react';
import Reveal from './Reveal';

const Bullets = ({ items, small }) => (
  <ul className={small ? 'mt-3 space-y-2.5' : 'mt-4 space-y-3'}>
    {items.map((b, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className={`${small ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full bg-[#049297] mt-2 flex-shrink-0`} />
        <div className={`${small ? 'text-sm' : 'text-[15px]'} text-[#22405e] leading-relaxed`}>
          {b.label && <span className="font-semibold text-[#022F71]">{b.label}: </span>}
          {b.text}
        </div>
      </li>
    ))}
  </ul>
);

export const LegalSection = ({ s }) => (
  <div className="scroll-mt-20">
    <h2 className="text-xl md:text-2xl font-semibold text-[#022F71] leading-snug">{s.heading}</h2>
    {s.body && <div className="mt-3 text-[15px] text-[#22405e] leading-relaxed space-y-3">{s.body}</div>}
    {s.bullets && <Bullets items={s.bullets} />}
    {s.subsections && (
      <div className="mt-4 space-y-5">
        {s.subsections.map((ss, idx) => (
          <div key={idx} className="rounded-xl border border-[#022F71]/10 bg-[#F7FAFC] p-5">
            <div className="text-base font-semibold text-[#022F71]">{ss.heading}</div>
            {ss.body && <div className="mt-2 text-sm text-[#22405e] leading-relaxed">{ss.body}</div>}
            {ss.bullets && <Bullets items={ss.bullets} small />}
          </div>
        ))}
      </div>
    )}
  </div>
);

export const LegalContact = ({ contact }) => (
  <div className="rounded-2xl border border-[#049297]/25 bg-[#F7FAFC] p-6 md:p-7">
    <div className="text-lg font-semibold text-[#022F71]">{contact.heading}</div>
    <dl className="mt-3 space-y-2 text-sm text-[#22405e]">
      {contact.lines.map((l, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
          <dt className="font-semibold text-[#022F71] sm:min-w-[180px]">{l.label}:</dt>
          <dd>{l.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const LegalSections = ({ sections = [], contact, animate = true }) => {
  const Wrap = animate ? Reveal : React.Fragment;
  return (
    <>
      {sections.map((s, i) => (
        <Wrap key={s.heading} {...(animate ? { delay: i * 40 } : {})}>
          <LegalSection s={s} />
        </Wrap>
      ))}
      {contact && (
        <Wrap>
          <LegalContact contact={contact} />
        </Wrap>
      )}
    </>
  );
};

export default LegalSections;
