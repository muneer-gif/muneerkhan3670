import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_LOGO } from '../mock';
import Brand from './Brand';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-[#022F71]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={COMPANY_LOGO} alt="RevaSure logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <Brand className="text-lg tracking-tight" />
              <span className="text-[9px] text-[#049297] tracking-[0.18em] uppercase font-semibold">One Platform. Infinite Reach.</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#022F71] hover:text-[#049297] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#049297] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#cta" className="btn-teal px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2">
              Partner with us <ArrowRight size={16} />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#022F71]" aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 border-t border-[#022F71]/10 pt-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[#022F71] font-medium">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="btn-teal px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2 w-fit">
              Partner with us <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
