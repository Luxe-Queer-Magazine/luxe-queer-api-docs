'use client';

import React from 'react';
import Header from '../layout/Header';
import Features from './Features';
import Destinations from './Destinations';
import Footer from '../layout/Footer';
import { Button } from '../ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
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

      <Features />
      <Destinations />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-16">Traveler Stories</h2>
          <blockquote className="text-2xl font-light italic text-gray-600 mb-8">
            "QueerLuxe Travel transformed my perspective on what luxury travel could be. Finally, a service that truly understands and celebrates our community."
          </blockquote>
          <cite className="text-lg text-gray-800">— Alex R., New York</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0047AB] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-8">Begin Your Journey</h2>
          <p className="text-xl mb-12">Let us curate your next unforgettable experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Book Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Destinations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
