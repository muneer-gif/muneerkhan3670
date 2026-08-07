import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_LOGO, INSURANCE_DISCLAIMER } from '../mock';
import Brand from './Brand';

const Footer = () => {
  const { pathname } = useLocation();
  const h = (anchor) => (pathname === '/' ? anchor : `/${anchor}`);

  return (
    <footer className="bg-[#022F71] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                <img src={COMPANY_LOGO} alt="RevaSure" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <Brand variant="onDark" className="text-xl" />
                <span className="text-[10px] text-[#A0C8D6] tracking-[0.18em] uppercase font-semibold">
                  One Platform. Infinite Possibilities.
                </span>
              </div>
            </div>
            <p className="mt-4 text-white/85 max-w-md text-sm leading-relaxed">
              <Brand variant="onDark" /> helps platforms expand their product offering through trusted technology,
              healthcare access and a simpler operating model.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href={h('#markets')} className="hover:text-white">Products</a></li>
              <li><a href={h('#platform')} className="hover:text-white">Platform</a></li>
              <li><a href={h('#architecture')} className="hover:text-white">Architecture</a></li>
              <li><a href={h('#comparison')} className="hover:text-white">Comparison</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><a href={h('#cta')} className="hover:text-white">Partner with us</a></li>
              <li><a href={h('#cta')} className="hover:text-white">Request walkthrough</a></li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Linkedin size={14} /></a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Twitter size={14} /></a>
                <a href="#" aria-label="Email" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Mail size={14} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/80 space-y-3">
          <p className="italic text-white/70">{INSURANCE_DISCLAIMER}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>&copy; {new Date().getFullYear()} RevaSure. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
