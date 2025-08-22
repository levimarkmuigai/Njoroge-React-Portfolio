import { useState } from 'react'

import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection'
import ClienteleSection from './components/ClienteleSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

function App() {

  return (
    <>
      <HeroSection/>
      <ProfileSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <ClienteleSection/>
      <TestimonialsSection/>
      <GallerySection/>
      <ContactSection/>
    </>
  );
}

export default App
