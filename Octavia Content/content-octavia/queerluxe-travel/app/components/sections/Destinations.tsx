'use client';

import React from 'react';

const destinations = [
  {
    city: 'Paris',
    tagline: 'The City of Light & Love',
    image: '/images/paris.jpg'
  },
  {
    city: 'Tokyo',
    tagline: 'Where Tradition Meets Expression',
    image: '/images/tokyo.jpg'
  }
];

export default function Destinations() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="relative h-96 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <h3 className="text-2xl font-serif mb-2">{destination.city}</h3>
                <p className="text-white/80">{destination.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
