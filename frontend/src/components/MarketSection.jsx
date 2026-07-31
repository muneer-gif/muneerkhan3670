import React, { useEffect, useMemo, useState } from 'react';
import { MARKET_TILES, MARKET_FILTERS, INSURANCE_DISCLAIMER, RURAL_IMPACT } from '../mock';
import { ArrowUpRight, X, Sprout, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import Brand from './Brand';

const MarketSection = () => {
  const [filter, setFilter] = useState('Explore Opportunities');
  const [selected, setSelected] = useState(null);
  const [metric, setMetric] = useState('Current market');

  // ESC to close + body scroll lock while modal is open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const tiles = useMemo(() => {
    if (filter === 'Explore Opportunities') return MARKET_TILES;
    return MARKET_TILES.filter((t) => t.category === filter);
  }, [filter]);

  const maxValue = useMemo(() => {
    if (metric === 'Current market') return Math.max(...tiles.map((t) => t.currentSizeNumeric));
    if (metric === 'CAGR') return Math.max(...tiles.map((t) => t.cagrNumeric));
    return Math.max(...tiles.map((t) => t.outlookNumeric));
  }, [tiles, metric]);

  const barValue = (t) => {
    if (metric === 'Current market') return t.currentSizeNumeric;
    if (metric === 'CAGR') return t.cagrNumeric;
    return t.outlookNumeric;
  };

  return (
    <section id="markets" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Product Opportunity</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            India&rsquo;s growing markets, connected through <Brand />
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
            <Brand /> helps fintechs, corporate business correspondents, NGOs, SHGs and FPOs expand
            their product coverage across large, growing sectors.
          </p>
        </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {MARKET_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === f
                  ? 'bg-[#022F71] text-white border-[#022F71] shadow-md'
                  : 'bg-white text-[#022F71] border-[#022F71]/15 hover:border-[#049297] hover:text-[#049297]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        </Reveal>

        {/* Metric toggle (left-aligned, no dashboard heading) */}
        <Reveal delay={120}>
        <div className="mt-6">
          <div className="inline-flex rounded-lg bg-white p-1 border border-[#022F71]/15 shadow-sm">
            {['Current market', 'CAGR', 'Expected market'].map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                  metric === m ? 'bg-[#049297] text-white' : 'text-[#022F71] hover:text-[#049297]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Tiles */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className="group text-left rounded-2xl bg-white border border-[#022F71]/10 p-6 card-hover fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full cat-${t.category.replace('*','')}`}>
                  {t.category}
                </span>
                <span className="arrow-nudge inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#022F71]/10 group-hover:bg-[#022F71]/20 transition-colors">
                  <ArrowUpRight size={20} className="text-[#022F71]" strokeWidth={2.5} />
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[#022F71]">{t.title}</h3>
              <div className="text-xs text-[#049297] mt-1 font-medium">{t.label}</div>

              <div className="mt-5 space-y-3">
                <MetricRow label="Current size" value={t.currentSize} />
                <MetricRow label="CAGR" value={t.cagr} accent />
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] text-[#22405e]">
                    <span>{metric}</span>
                    <span className="font-medium text-[#022F71]">
                      {metric === 'CAGR' ? `${barValue(t)}%` : `₹${barValue(t)} L Cr`}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-[#F7FAFC] overflow-hidden border border-[#022F71]/5">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.max(6, (barValue(t) / maxValue) * 100)}%`,
                        background: 'linear-gradient(90deg,#022F71 0%,#049297 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Rural & Social Impact — feature card */}
        <Reveal delay={80}>
        <div className="mt-8 rounded-2xl overflow-hidden border border-[#022F71]/15 bg-white shadow-sm">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left: content */}
            <div className="lg:col-span-3 p-7 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#049297]/10 border border-[#049297]/25 px-3 py-1">
                <Sprout size={14} className="text-[#049297]" strokeWidth={1.8} />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#049297]">
                  {RURAL_IMPACT.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-[#022F71] leading-tight">
                {RURAL_IMPACT.title}
              </h3>
              <p className="mt-3 text-[15px] text-[#22405e] leading-relaxed max-w-xl">
                Rural and Social Sectors are going to power the next wave of growth for Indian
                Insurers.
              </p>
              <p className="mt-2 text-[15px] text-[#22405e] leading-relaxed max-w-xl">
                <Brand /> connects Insurers to rural and social sectors through its associations
                including:
              </p>

              <ul className="mt-5 space-y-3">
                {RURAL_IMPACT.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#049297]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-[#049297]" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-[#22405e] leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stat panel */}
            <div className="lg:col-span-2 relative p-7 lg:p-10 flex flex-col justify-center"
                 style={{background: 'linear-gradient(135deg, #022F71 0%, #043a7e 55%, #049297 100%)'}}>
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A0C8D6]">
                  Market Potential
                </div>
                <div className="mt-3 text-5xl md:text-6xl font-bold text-white tracking-tight">
                  {RURAL_IMPACT.stat.value}
                </div>
                <p className="mt-3 text-sm text-white/90 leading-relaxed max-w-xs">
                  {RURAL_IMPACT.stat.label}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#A0C8D6]/70" />
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Insurance disclaimer */}
        <p className="mt-6 text-xs text-[#22405e] italic">{INSURANCE_DISCLAIMER}</p>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-[#022F71]/50 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-[#022F71]/10 my-4 sm:my-6 max-h-[calc(100vh-2rem)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating close button — highly visible, generous tap target, always on top */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close details"
              className="absolute -top-3 -right-3 sm:top-3 sm:right-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[#022F71]/20 flex items-center justify-center text-[#022F71] hover:bg-[#022F71] hover:text-white hover:border-[#022F71] transition-colors"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-5 sm:p-8 pr-6 sm:pr-10">
              <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full cat-${selected.category.replace('*','')}`}>
                {selected.category}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-[#022F71] pr-8">{selected.title}</h3>
              <div className="text-sm text-[#049297] mt-1">{selected.label}</div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
                <InfoBlock label="Current market size" value={selected.currentSize} />
                <InfoBlock label="CAGR" value={selected.cagr} accent />
                <InfoBlock label="Market basis" value={selected.basis} />
                <InfoBlock label="Growth outlook" value={selected.outlook} />
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[#F7FAFC] border border-[#022F71]/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#049297]">
                  {selected.keyProducts ? 'Key Products' : 'Key Drivers'}
                </div>
                <div className="mt-1 text-sm text-[#22405e]">{selected.keyProducts || selected.drivers}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const MetricRow = ({ label, value, accent }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-[#22405e]">{label}</span>
    <span className={`font-semibold ${accent ? 'text-[#049297]' : 'text-[#022F71]'}`}>{value}</span>
  </div>
);

const InfoBlock = ({ label, value, accent }) => (
  <div className="rounded-xl border border-[#022F71]/10 p-4 bg-white">
    <div className="text-xs uppercase tracking-widest text-[#049297] font-semibold">{label}</div>
    <div className={`mt-1 font-semibold ${accent ? 'text-[#049297]' : 'text-[#022F71]'}`}>{value}</div>
  </div>
);

export default MarketSection;
