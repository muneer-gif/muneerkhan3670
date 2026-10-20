import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_LOGO } from '../mock';
import Brand from './Brand';

// Convert an item href to a functional href based on current pathname.
// - Route links (start with "/") use react-router <Link>.
// - Anchor links (start with "#") stay as anchors on Home; on other pages
//   they navigate to Home + hash.
const NavItem = ({ item, onNavigate }) => {
  const { pathname } = useLocation();
  const isRoute = item.href.startsWith('/');

  if (isRoute) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className="text-sm font-medium text-[#022F71] hover:text-[#049297] transition-colors relative group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#049297] group-hover:w-full transition-all duration-300" />
      </Link>
    );
  }

  const href = pathname === '/' ? item.href : `/${item.href}`;
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="text-sm font-medium text-[#022F71] hover:text-[#049297] transition-colors relative group"
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#049297] group-hover:w-full transition-all duration-300" />
    </a>
  );
};

const NavDropdown = ({ item }) => (
  <div className="relative group" data-testid="nav-products-dropdown">
    <button type="button" className="text-sm font-medium text-[#022F71] group-hover:text-[#049297] transition-colors inline-flex items-center gap-1">
      {item.label} <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
    </button>
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-[opacity,transform] duration-200">
      <div className="w-64 rounded-2xl bg-white border border-[#022F71]/10 shadow-[0_20px_45px_-20px_rgba(2,47,113,0.45)] p-2 flex flex-col">
        {item.children.map((c) => (
          <div key={c.href} className="rounded-xl px-3 py-2.5 hover:bg-[#F7FAFC] [&_span]:hidden">
            <NavItem item={c} />
            {c.note && <div className="text-xs text-[#558CA1] mt-0.5">{c.note}</div>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const partnerHref = pathname === '/' ? '#cta' : '/#cta';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-[#022F71]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={COMPANY_LOGO} alt="RevaSure logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <Brand className="text-lg tracking-tight" />
              <span className="text-[9px] text-[#049297] tracking-[0.18em] uppercase font-semibold">One Platform. Infinite Possibilities.</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              l.children ? <NavDropdown key={l.href} item={l} /> : <NavItem key={l.href} item={l} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={partnerHref} className="btn-teal px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2">
              Partner with us <ArrowRight size={16} />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#022F71]" aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 border-t border-[#022F71]/10 pt-4">
            {NAV_LINKS.flatMap((l) => (l.children || [l])).map((l) => (
              <NavItem key={l.label} item={l} onNavigate={() => setOpen(false)} />
            ))}
            <a href={partnerHref} onClick={() => setOpen(false)} className="btn-teal px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2 w-fit">
              Partner with us <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
