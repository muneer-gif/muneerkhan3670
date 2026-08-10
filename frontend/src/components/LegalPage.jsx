import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Brand from './Brand';
import Reveal from './Reveal';

/**
 * LegalPage — shared layout for legal / policy documents.
 * Renders navbar, hero (with eyebrow + title + last updated), body sections, and footer.
 *
 * Props:
 *   eyebrow: string (small caps label above title)
 *   title:   string (page title)
 *   lastUpdated: string
 *   intro:   optional intro paragraph (JSX or string)
 *   sections: array of { heading, body?, subsections?, bullets? }
 *     - body: paragraph string(s) — pass string OR React node
 *     - bullets: [{ label?, text }]
 *     - subsections: [{ heading, bullets, body }]
 *   contact: optional { heading, lines: [{ label, value }] }
 *   noticeBlock: optional highlighted callout (JSX) shown after intro
 */
const LegalPage = ({ eyebrow, title, lastUpdated, intro, sections = [], contact, noticeBlock }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-radial relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full float-slow pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(4,146,151,0.20), transparent 65%)' }} />
        <div className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full float-slower pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(2,47,113,0.16), transparent 65%)' }} />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-12 pb-12 lg:pt-16 lg:pb-16 relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#049297]/25 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#049297] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#049297]" />
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#022F71] font-semibold">
              {title}
            </h1>
            <div className="mt-4 text-sm text-[#22405e]">
              <span className="font-semibold text-[#022F71]">Last Updated:</span> {lastUpdated}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <article className="prose-legal space-y-10">
            {intro && (
              <Reveal>
                <div className="text-[15px] md:text-base text-[#22405e] leading-relaxed">{intro}</div>
              </Reveal>
            )}

            {noticeBlock && <Reveal>{noticeBlock}</Reveal>}

            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 40}>
                <div className="scroll-mt-20">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#022F71] leading-snug">
                    {s.heading}
                  </h2>

                  {s.body && (
                    <div className="mt-3 text-[15px] text-[#22405e] leading-relaxed space-y-3">
                      {s.body}
                    </div>
                  )}

                  {s.bullets && (
                    <ul className="mt-4 space-y-3">
                      {s.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#049297] mt-2 flex-shrink-0" />
                          <div className="text-[15px] text-[#22405e] leading-relaxed">
                            {b.label && <span className="font-semibold text-[#022F71]">{b.label}: </span>}
                            {b.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.subsections && (
                    <div className="mt-4 space-y-5">
                      {s.subsections.map((ss, idx) => (
                        <div key={idx} className="rounded-xl border border-[#022F71]/10 bg-[#F7FAFC] p-5">
                          <div className="text-base font-semibold text-[#022F71]">{ss.heading}</div>
                          {ss.body && <div className="mt-2 text-sm text-[#22405e] leading-relaxed">{ss.body}</div>}
                          {ss.bullets && (
                            <ul className="mt-3 space-y-2.5">
                              {ss.bullets.map((b, i2) => (
                                <li key={i2} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#049297] mt-2 flex-shrink-0" />
                                  <div className="text-sm text-[#22405e] leading-relaxed">
                                    {b.label && <span className="font-semibold text-[#022F71]">{b.label}: </span>}
                                    {b.text}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}

            {contact && (
              <Reveal>
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
              </Reveal>
            )}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { LegalPage };
export default LegalPage;

// Re-export Brand for convenience in the pages
export { Brand };
