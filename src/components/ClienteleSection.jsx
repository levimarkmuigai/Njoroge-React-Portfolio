import React, { useState } from 'react';

import ntvLogo from '../assets/ntv-logo.png';
import bbcLogo from '../assets/bbc-logo.png';
import gatesLogo from '../assets/Bill-Melinda-Gates-Foundation-Logo.png';

const clients = [
  {
    name: 'NTV',
    logo: ntvLogo,
    role: 'Grew social media channels through strategic content.',
    url: 'https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj',
  },
  {
    name: 'BBC',
    logo: bbcLogo,
    role: 'Led multimedia storytelling and editorial strategy.',
    url: 'https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj',
  },
  {
    name: 'Gates Foundation',
    logo: gatesLogo,
    role: 'Developed regional impact narratives for WASH.',
    url: 'https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj',
  },
];

export default function ClienteleSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = clients.length;

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + total) % total);

  const next = () =>
    setCurrentIndex((i) => (i + 1) % total);

  const { name, logo, role, url } = clients[currentIndex];

  return (
    <section className="px-8 py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Clientele</h2>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {/* Previous Button */}
        <button
          aria-label="Previous client"
          onClick={prev}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 text-2xl cursor-pointer transition duration-200 hover:bg-gray-100 hover:scale-105"
        >
          ⟵
        </button>

        {/* Card */}
        <div className="flex-0 w-[360px]">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden no-underline text-inherit shadow-lg p-6 h-full relative transition hover:shadow-xl"
          >
            {/* Logo */}
            <div className="flex justify-center items-center min-h-[80px] mb-4">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-[220px] h-[120px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-600 mt-2">{role}</p>
              <span className="inline-block mt-2 text-sm font-medium text-blue-600">
                View Work →
              </span>
            </div>
          </a>
        </div>

        {/* Next Button */}
        <button
          aria-label="Next client"
          onClick={next}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 text-2xl cursor-pointer transition duration-200 hover:bg-gray-100 hover:scale-105"
        >
          ⟶
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {clients.map((_, idx) => (
          <span
            key={idx}
            aria-label={`Client ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

