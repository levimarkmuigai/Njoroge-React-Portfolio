import React from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

const SECTIONS = [
  { id: 'profile', Component: ProfileSection },
  { id: 'services', Component: ServiceSection },
  { id: 'portfolio', Component: PortfolioSection },
  { id: 'testimonials', Component: TestimonialsSection },
  { id: 'gallery', Component: GallerySection },
  { id: 'contact', Component: ContactSection },
];

export default function App() {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <div className="py-6 sm:py-8 md:py-10">
        <Navbar />
      </div>

      {/* All Sections */}
      {SECTIONS.map(({ id, Component }) => (
        <div key={id} className="py-8 sm:py-10 md:py-12">
          <Component />
        </div>
      ))}
    </div>
  );
}

