'use client';

import React from 'react';
import { Button } from '../ui/Button';

export default function Header() {
  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-white text-xl font-serif">QueerLuxe</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">Destinations</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">Services</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">About</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">Book Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
