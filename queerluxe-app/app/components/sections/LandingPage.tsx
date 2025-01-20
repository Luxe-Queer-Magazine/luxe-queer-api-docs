'use client';

import React from 'react';
import { GlobeAmericas, Crown, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-serif text-white mb-6">
            QueerLuxe Travel
          </h1>
          <p className="text-2xl text-white/90 mb-8 font-light">
            Where Luxury Meets Liberation
          </p>
          <Button size="lg">Begin Your Journey</Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        {/* Features content */}
      </section>

      {/* Rest of the sections */}
    </div>
  );
}
