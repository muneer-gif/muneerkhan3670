import React, { useMemo, useState } from 'react';
import { MARKET_TILES, MARKET_FILTERS } from '../mock';
import { TrendingUp, ArrowUpRight, X } from 'lucide-react';
import Reveal from './Reveal';

const MarketSection = () => {
  const [filter, setFilter] = useState('All markets');
  const [selected, setSelected] = useState(null);
  const [metric, setMetric] = useState('Current market');

  const tiles = useMemo(() => {
    if (filter === 'All markets') return MARKET_TILES;
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
    <section id="markets" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Market Opportunity</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
            India’s growing markets, connected through <span className="text-gradient-brand">one platform</span>
          </h2>
          <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
            RevaSure helps fintechs and corporate business correspondents expand their product
            coverage across large and growing sectors.
          </p>
        </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap gap-2">
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

        {/* Dashboard controls */}
        <Reveal delay={120}>
        <div className="mt-8 rounded-2xl bg-white border border-[#022F71]/10 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-[#22405e]">
            <TrendingUp size={16} className="text-[#049297]" />
            Interactive Market Dashboard
          </div>
          <div className="inline-flex rounded-lg bg-[#F7FAFC] p-1 border border-[#022F71]/10">
            {['Current market', 'CAGR', 'Expected market'].map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
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
              className="text-left rounded-2xl bg-white border border-[#022F71]/10 p-6 card-hover fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full cat-${t.category}`}>
                  {t.category}
                </span>
                <ArrowUpRight size={18} className="text-[#049297]" />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[#022F71]">{t.title}</h3>
              <div className="text-xs text-[#558CA1] mt-1">{t.label}</div>

              <div className="mt-5 space-y-3">
                <MetricRow label="Current size" value={t.currentSize} />
                <MetricRow label="CAGR" value={t.cagr} accent />
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] text-[#22405e]/70">
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
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-[#022F71]/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative border border-[#022F71]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-[#022F71]/60 hover:text-[#022F71]"
            >
              <X size={20} />
            </button>
            <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full cat-${selected.category}`}>
              {selected.category}
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-[#022F71]">{selected.title}</h3>
            <div className="text-sm text-[#049297] mt-1">{selected.label}</div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <InfoBlock label="Current market size" value={selected.currentSize} />
              <InfoBlock label="CAGR" value={selected.cagr} accent />
              <InfoBlock label="Market basis" value={selected.basis} />
              <InfoBlock label="Growth outlook" value={selected.outlook} />
            </div>

            <div className="mt-5 p-4 rounded-xl bg-[#F7FAFC] border border-[#022F71]/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#049297]">Key drivers</div>
              <div className="mt-1 text-sm text-[#22405e]">{selected.drivers}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const MetricRow = ({ label, value, accent }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-[#22405e]/70">{label}</span>
    <span className={`font-semibold ${accent ? 'text-[#049297]' : 'text-[#022F71]'}`}>{value}</span>
  </div>
);

const InfoBlock = ({ label, value, accent }) => (
  <div className="rounded-xl border border-[#022F71]/10 p-4 bg-white">
    <div className="text-xs uppercase tracking-widest text-[#558CA1]">{label}</div>
    <div className={`mt-1 font-semibold ${accent ? 'text-[#049297]' : 'text-[#022F71]'}`}>{value}</div>
  </div>
);

export default MarketSection;
