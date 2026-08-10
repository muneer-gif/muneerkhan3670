import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarketSection from '../components/MarketSection';
import MarketGap from '../components/MarketGap';
import Architecture from '../components/Architecture';
import Comparison from '../components/Comparison';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Home = () => {
  const { hash } = useLocation();

  // When the URL contains a hash (e.g. /#cta), scroll to the target section
  // once the page has finished mounting.
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // Wait a tick so the target section renders before we scroll to it.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketSection />
      <MarketGap />
      <Architecture />
      <Comparison />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
