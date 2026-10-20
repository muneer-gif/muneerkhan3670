import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Brand from './Brand';
import Reveal from './Reveal';
import LegalSections from './LegalSections';

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

            <LegalSections sections={sections} contact={contact} />
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
