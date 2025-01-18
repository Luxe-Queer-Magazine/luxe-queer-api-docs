'use client';

import React from 'react';
import { Crown, GlobeAmericas, Star } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Curated Luxury',
    description: 'Handpicked destinations and experiences that celebrate your authentic self.'
  },
  {
    icon: GlobeAmericas,
    title: 'Global Queer Culture',
    description: 'Discover and connect with LGBTQ+ communities worldwide.'
  },
  {
    icon: Star,
    title: 'Exclusive Access',
    description: 'VIP experiences and private events curated for our community.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">
          Experience Travel Through a Queer Lens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
