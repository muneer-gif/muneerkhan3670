import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HospicashHero from '../components/hospicash/HospicashHero';
import BenefitsSection from '../components/hospicash/BenefitsSection';
import CheckoutSection from '../components/hospicash/CheckoutSection';
import RefundSection from '../components/hospicash/RefundSection';
import SupportSection from '../components/hospicash/SupportSection';
import PolicyDialog from '../components/hospicash/PolicyDialog';

export default function Hospicash() {
  const [consent, setConsent] = useState({ terms: false, privacy: false });
  const [docKey, setDocKey] = useState(null);

  useEffect(() => {
    const el = window.location.hash && document.querySelector(window.location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    else window.scrollTo(0, 0);
    document.title = 'Hospicash - Complete Health & Accident Protection | RevaSure';
  }, []);

  const agree = docKey === 'terms' || docKey === 'privacy'
    ? (k) => setConsent((c) => ({ ...c, [k]: true }))
    : undefined;

  return (
    <div className="min-h-screen" data-testid="hospicash-page">
      <Navbar />
      <HospicashHero />
      <BenefitsSection />
      <CheckoutSection consent={consent} setConsent={setConsent} openDoc={setDocKey} />
      <RefundSection openDoc={setDocKey} />
      <SupportSection />
      <Footer />
      <PolicyDialog docKey={docKey} onClose={() => setDocKey(null)} onAgree={agree} />
    </div>
  );
}
