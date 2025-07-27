import { useState } from 'react'
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import ServiceSection from './components/ServiceSection';
import './styles/globals.css';

function App() {

  return (
    <>
      <HeroSection/> 
      <ProfileSection/>
      <ServiceSection/>
    </>
  );
}

export default App
