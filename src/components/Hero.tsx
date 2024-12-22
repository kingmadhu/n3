import React from 'react';
import HeroSection from './home/HeroSection';
import FeaturesSection from './home/FeaturesSection';
import StatsSection from './home/StatsSection';

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
}