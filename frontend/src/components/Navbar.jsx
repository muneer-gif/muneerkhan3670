import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../mock';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7FAFC]/85 border-b border-[#022F71]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg,#022F71 0%,#049297 100%)'}}>
              <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#022F71] font-semibold text-lg tracking-tight">RevaSure</span>
              <span className="text-[10px] text-[#049297] tracking-widest uppercase font-medium">One Platform</span>
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
