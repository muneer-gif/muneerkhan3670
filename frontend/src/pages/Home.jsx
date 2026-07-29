import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarketSection from '../components/MarketSection';
import MarketGap from '../components/MarketGap';
import Architecture from '../components/Architecture';
import Comparison from '../components/Comparison';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Home = () => {
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
