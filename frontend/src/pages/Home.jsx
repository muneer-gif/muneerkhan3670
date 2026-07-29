import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarketSection from '../components/MarketSection';
import MarketGap from '../components/MarketGap';
import ValueProposition from '../components/ValueProposition';
import Architecture from '../components/Architecture';
import Comparison from '../components/Comparison';
import Trust from '../components/Trust';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Navbar />
      <Hero />
      <MarketSection />
      <MarketGap />
      <ValueProposition />
      <Architecture />
      <Comparison />
      <Trust />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
