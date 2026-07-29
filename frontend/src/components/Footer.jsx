import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#022F71] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg,#049297 0%,#A0C8D6 100%)'}}>
                <div className="w-3 h-3 bg-[#022F71] rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-semibold">RevaSure</span>
            </div>
            <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
              RevaSure helps platforms expand their product offering through trusted technology,
              healthcare access and a simpler operating model.
            </p>
            <div className="mt-6 text-sm font-semibold text-[#A0C8D6] uppercase tracking-widest">
              One Platform. Infinite Reach.
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Product</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#markets" className="hover:text-white">Markets</a></li>
              <li><a href="#platform" className="hover:text-white">Platform</a></li>
              <li><a href="#architecture" className="hover:text-white">Architecture</a></li>
              <li><a href="#comparison" className="hover:text-white">Comparison</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#cta" className="hover:text-white">Partner with us</a></li>
              <li><a href="#cta" className="hover:text-white">Request walkthrough</a></li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Linkedin size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#049297] transition-colors"><Mail size={14} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} RevaSure. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
