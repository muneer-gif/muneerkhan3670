import React from 'react';
import { Lock, ArrowRight, ReceiptText, RotateCcw } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { useToast } from '../../hooks/use-toast';
import { HOSPICASH, HOSPICASH_BUY_URL } from '../../data/hospicash';

const ConsentRow = ({ id, checked, onChange, label, onOpen }) => (
  <div className="flex items-start gap-3">
    <Checkbox
      id={id}
      data-testid={`${id}-checkbox`}
      checked={checked}
      onCheckedChange={(v) => onChange(v === true)}
      className="mt-0.5 h-5 w-5 rounded-md border-[#022F71]/40 data-[state=checked]:bg-[#049297] data-[state=checked]:border-[#049297]"
    />
    <label htmlFor={id} className="text-sm text-[#22405e] leading-snug cursor-pointer select-none">
      I have read and agree to the{' '}
      <button type="button" data-testid={`${id}-open-link`} onClick={(e) => { e.preventDefault(); onOpen(); }} className="font-semibold text-[#049297] underline underline-offset-2 hover:text-[#022F71]">
        {label}
      </button>
    </label>
  </div>
);

const CheckoutCard = ({ consent, setConsent, openDoc }) => {
  const { toast } = useToast();
  const ready = consent.terms && consent.privacy;

  const handleBuy = () => {
    if (!ready) return;
    if (!HOSPICASH_BUY_URL) {
      toast({ title: 'Payment link coming soon', description: `Please call ${HOSPICASH.phone} or email ${HOSPICASH.email} to enrol today.` });
      return;
    }
    window.open(HOSPICASH_BUY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-testid="checkout-card" className="rounded-3xl bg-white border border-[#022F71]/10 shadow-[0_30px_60px_-30px_rgba(2,47,113,0.45)] overflow-hidden">
      <div className="bg-[#022F71] text-white px-7 py-6">
        <div className="text-xs uppercase tracking-widest text-[#A0C8D6] font-semibold">{HOSPICASH.name} annual cover</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span data-testid="checkout-price" className="text-5xl font-semibold tracking-tight">{HOSPICASH.premium}</span>
          <span className="text-sm text-white/80">/ year</span>
        </div>
        <div className="text-xs text-white/80 mt-1">{HOSPICASH.premiumNote}</div>
      </div>

      <div className="px-7 py-6 space-y-4">
        <ConsentRow id="consent-terms" checked={consent.terms} onChange={(v) => setConsent((c) => ({ ...c, terms: v }))} label="Terms & Conditions" onOpen={() => openDoc('terms')} />
        <ConsentRow id="consent-privacy" checked={consent.privacy} onChange={(v) => setConsent((c) => ({ ...c, privacy: v }))} label="Privacy Policy" onOpen={() => openDoc('privacy')} />

        <button
          data-testid="buy-now-btn"
          onClick={handleBuy}
          disabled={!ready}
          aria-disabled={!ready}
          className={`w-full mt-2 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 transition-[background-color,box-shadow,transform] duration-300 ${ready ? 'btn-teal hover:-translate-y-0.5' : 'bg-[#E3EBF1] text-[#558CA1] cursor-not-allowed'}`}
        >
          Buy Now <ArrowRight size={18} />
        </button>
        <p data-testid="buy-now-helper" className="text-xs text-center text-[#22405e]">
          {ready ? 'You will be redirected to our secure Easebuzz payment page.' : 'Please accept both policies to continue.'}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button data-testid="refund-policy-btn" onClick={() => openDoc('refund')} className="btn-outline-brand py-2.5 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center justify-center gap-1.5">
            <ReceiptText size={15} /> Refund Policy
          </button>
          <a href="#refund-process" data-testid="refund-process-btn" className="btn-outline-brand py-2.5 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center justify-center gap-1.5">
            <RotateCcw size={15} /> Refund Process
          </a>
        </div>
      </div>

      <div className="px-7 py-4 bg-[#F7FAFC] border-t border-[#022F71]/10 flex items-center gap-2 text-xs text-[#22405e]">
        <Lock size={14} className="text-[#049297]" /> PCI-DSS compliant, RBI-authorised payments via Easebuzz
      </div>
    </div>
  );
};

export default CheckoutCard;
