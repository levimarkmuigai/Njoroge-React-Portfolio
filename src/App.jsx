import { useState } from 'react'
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection'
import ClienteleSection from './components/ClienteleSection';
import './styles/globals.css';

function App() {

  return (
    <>
      <HeroSection/> 
      <ProfileSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <ClienteleSection/>
    </>
  );
}

export default App
