import React, { useState } from 'react';
import { PARTNER_TYPES, PRODUCT_CATEGORIES } from '../mock';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '../hooks/use-toast';
import Reveal from './Reveal';

const CtaSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', company: '', email: '', mobile: '',
    partnerType: '', productCategories: '', volume: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast({ title: 'Missing details', description: 'Please fill Name, Company and Work email.' });
      return;
    }
    // mock submit
    setSubmitted(true);
    toast({
      title: 'Request received',
      description: 'Thank you. The RevaSure partnerships team will contact you soon.',
    });
  };

  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden isolate">
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #022F71 0%, #043a7e 45%, #049297 100%)'
      }} />
      <div className="absolute inset-0 z-0 opacity-20 bg-grid" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 relative z-10">
        <Reveal variant="left">
        <div className="text-white">
          <div className="text-xs font-medium tracking-widest uppercase text-[#A0C8D6]">Partnership</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            Build a more useful platform for your customers.
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-lg">
            Connect with RevaSure to explore product categories, integration options and
            partnership opportunities.
          </p>

          <div className="mt-10 space-y-4 max-w-md">
            {[
              'Single platform relationship',
              'API-led or white-label integration',
              'Lending, wellness, healthcare & insurance',
              'Coordinated operations & reporting',
            ].map((b) => (
              <div key={b} className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center border border-white/25">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
        <div className="rounded-2xl bg-white p-7 md:p-9 shadow-2xl border border-white/20">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg,#049297,#2E8B57)'}}>
                <CheckCircle2 className="text-white" size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#022F71]">Thank you</h3>
              <p className="mt-2 text-sm text-[#22405e] max-w-sm mx-auto">
                The RevaSure partnerships team will contact you after reviewing your requirements.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({name:'',company:'',email:'',mobile:'',partnerType:'',productCategories:'',volume:'',message:''}); }}
                className="mt-6 text-sm text-[#049297] font-medium hover:underline"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name*">
                  <Input value={form.name} onChange={handle('name')} placeholder="Full name" required />
                </Field>
                <Field label="Company*">
                  <Input value={form.company} onChange={handle('company')} placeholder="Company name" required />
                </Field>
                <Field label="Work email*">
                  <Input type="email" value={form.email} onChange={handle('email')} placeholder="you@company.com" required />
                </Field>
                <Field label="Mobile number">
                  <Input value={form.mobile} onChange={handle('mobile')} placeholder="+91" />
                </Field>
                <Field label="Partner type">
                  <Select value={form.partnerType} onValueChange={handle('partnerType')}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      {PARTNER_TYPES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Current product categories">
                  <Select value={form.productCategories} onValueChange={handle('productCategories')}>
                    <SelectTrigger><SelectValue placeholder="Select categories" /></SelectTrigger>
                    <SelectContent>
                      {PRODUCT_CATEGORIES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field label="Expected customer volume">
                <Input value={form.volume} onChange={handle('volume')} placeholder="e.g. 50,000 / month" />
              </Field>
              <Field label="Message">
                <Textarea value={form.message} onChange={handle('message')} placeholder="Tell us about your platform and goals." rows={4} />
              </Field>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit" className="btn-teal rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center justify-center gap-2">
                  Become a RevaSure partner <Send size={16} />
                </button>
                <button type="button" onClick={() => toast({ title: 'Walkthrough requested', description: 'We will schedule a walkthrough shortly.' })} className="btn-outline-brand rounded-lg px-6 py-3 text-sm font-medium">
                  Request a product walkthrough
                </button>
              </div>
            </form>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ label, children }) => (
  <div className="space-y-1.5">
    <Label className="text-xs uppercase tracking-widest text-[#022F71] font-semibold">{label}</Label>
    {children}
  </div>
);

export default CtaSection;
