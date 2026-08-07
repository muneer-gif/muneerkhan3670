import React from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  Cpu,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Users,
  Building2,
  Layers,
  Sparkles,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Brand from '../components/Brand';
import Reveal from '../components/Reveal';

const PILLARS = [
  {
    id: 1,
    icon: Cpu,
    title: 'Digital-First Technology & AI Advisory',
    points: [
      {
        heading: 'API Integration & Tech Scaling',
        body:
          'Expert translation of complex technical ecosystems into seamless commercial platforms, having successfully built API-driven systems that reduced partner onboarding timelines significantly.',
      },
      {
        heading: 'Advanced Enterprise Architecture',
        body:
          'Driven by a business-first perspective on technology, we leverage AI, data analytics and emerging technologies to build custom enterprise solutions that deliver measurable corporate value.',
      },
    ],
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Institutional Learning & Human Capital Operations',
    points: [
      {
        heading: 'Greenfield Scale-ups',
        body:
          'Built the entire learning, development (L&D) and training functions from the ground up for two of India\u2019s largest, household-name insurance corporations.',
      },
      {
        heading: 'Unrivalled Scale',
        body:
          'Scaled training operations rapidly from zero to over 100+ domain trainers, managing mandatory certification, quality control and upskilling frameworks for over 100,000 professionals across the corporate and educational sectors.',
      },
    ],
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'Systemic Impact & Last-Mile Financial Inclusion',
    points: [
      {
        heading: 'Socio-Economic Development',
        body:
          'Spearheaded nation-wide initiatives targeting the onboarding and empowerment of 1 million women entrepreneurs at India\u2019s last mile.',
      },
      {
        heading: 'Corporate Governance & CSR',
        body:
          'Managed diverse multi-state CSR portfolios containing over 110 institutional projects across 25 states, working in tandem with government agencies, multilateral bodies and corporate boards.',
      },
    ],
  },
  {
    id: 4,
    icon: Network,
    title: 'Strategic Alliances & Ecosystem Distribution',
    points: [
      {
        heading: 'Institutional Scale',
        body:
          'Our leadership has directly defined and scaled alternative distribution channels across massive networks of over 1.3 million retail agents and partners in India.',
      },
      {
        heading: 'B2B Alliances',
        body:
          'A proven track record of securing high-yield enterprise partnerships with Tier-1 Banks, NBFCs, and digital-first platforms to tap into underserved market segments.',
      },
    ],
  },
];

const LEGACY_STATS = [
  { icon: Users, value: '60+', label: 'Years of cumulative leadership experience' },
  { icon: Building2, value: '1.3M+', label: 'Retail agents and partners scaled' },
  { icon: Layers, value: '110+', label: 'CSR & institutional projects delivered' },
  { icon: Sparkles, value: '100K+', label: 'Professionals trained and certified' },
];

const About = () => {
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

        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24 relative">
          <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#049297]/25 bg-white/80 px-4 py-1.5 text-xs font-medium text-[#022F71] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#049297]" />
            About Us
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#022F71]">
            Welcome to <Brand />, where deep <br className="hidden md:block" />
            industry experience meets modern <br className="hidden md:block" />
            <span className="text-gradient-brand">financial technology innovation.</span>
          </h1>

          <p className="mt-6 text-lg text-[#22405e] max-w-4xl leading-relaxed">
            We are an elite cohort of senior business leaders, technology entrepreneurs and ecosystem
            strategists dedicated to reshaping the Indian BFSI, FinTech and InsurTech landscapes. By
            bridging the gap between traditional financial architectures and agile digital
            distribution networks, we build scalable, future-ready commercial ecosystems that drive
            deep market penetration and sustainable growth.
          </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership Legacy intro + stats */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Our Leadership Legacy</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
              The driving force behind <Brand />.
            </h2>
            <p className="mt-5 text-lg text-[#22405e] leading-relaxed">
              Over <span className="font-semibold text-[#022F71]">60 years of cumulative leadership
              experience</span> across India&rsquo;s top-tier multinational corporations, fintech
              scale-ups, and premier banking, financial services and insurance institutions.
            </p>
          </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEGACY_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-2xl border border-[#022F71]/10 bg-[#F7FAFC] p-6 card-hover h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                       style={{ background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)' }}>
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="mt-4 text-3xl md:text-4xl font-bold text-[#022F71] tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[#22405e]">{s.label}</div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Four Strategic Pillars */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs font-medium tracking-widest uppercase text-[#049297]">Four Strategic Pillars</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[#022F71] tracking-tight leading-tight">
              Our core capabilities span four <span className="text-gradient-brand">critical pillars</span>.
            </h2>
          </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.id} delay={i * 90}>
                <div className="group h-full rounded-2xl bg-white border border-[#022F71]/10 p-7 md:p-8 card-hover relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#049297]/5 group-hover:bg-[#049297]/10 transition-colors" />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                           style={{ background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)' }}>
                        <Icon size={22} strokeWidth={1.6} className="icon-lift" />
                      </div>
                      <div className="text-[11px] uppercase tracking-widest text-[#049297] font-semibold">
                        Pillar {p.id}
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl md:text-2xl font-semibold text-[#022F71] leading-snug">
                      {p.title}
                    </h3>

                    <ul className="mt-5 space-y-4">
                      {p.points.map((pt) => (
                        <li key={pt.heading} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#049297]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 rounded-full bg-[#049297]" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#022F71]">{pt.heading}</div>
                            <div className="text-sm text-[#22405e] leading-relaxed mt-0.5">{pt.body}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-0" style={{
          background: 'linear-gradient(135deg, #022F71 0%, #043a7e 45%, #049297 100%)'
        }} />
        <div className="absolute inset-0 -z-0 opacity-15 bg-grid" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A0C8D6]">
            Why Partner With Us
          </div>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            At <Brand variant="onDark" />, we do not just consult&mdash;we architect and scale.
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            Our multi-disciplinary expertise balances tech-savvy execution with deep regulatory,
            commercial and operational compliance. Whether you are a legacy financial institution
            looking to modernise your distribution channels, or an ecosystem player looking to
            deploy embedded financial solutions, we provide the foundational strategy and technical
            bridge to ensure your vision achieves market dominance.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="/#cta" className="rounded-lg px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 bg-white text-[#022F71] hover:bg-[#A0C8D6] transition-colors">
              Partner with RevaSure <ArrowRight size={16} />
            </a>
            <Link to="/" className="rounded-lg px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 transition-colors">
              Back to homepage
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
