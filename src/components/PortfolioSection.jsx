import React from 'react';
import ntvLogo from '../assets/ntv-logo.png';
import bbcLogo from '../assets/bbc-logo.png';
import gatesLogo from '../assets/Bill-Melinda-Gates-Foundation-Logo.png';

// ---------------------------
// Portfolio Data
// ---------------------------
const portfolioItems = [
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

// ---------------------------
// YouTube Data
// ---------------------------
const youtubeVideos = [
  { id: '_HSbGdot1x8', title: 'Shea Butter' },
  { id: 'Q_78NE8_kLA', title: 'Mud Wrestling' },
  { id: 'FfA3h4-_cMA', title: 'AntiFemicide' },
  { id: 'kRZMwE6fVYk', title: 'Football' },
  { id: 'izBAqXKGTkc', title: 'Flower' },
  { id: 'ugDTiBMRsu0', title: 'Power' },
];

// ---------------------------
// Component
// ---------------------------
export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-black text-white py-16">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-md">
        Portfolio
      </h2>

      {/* Portfolio Entries */}
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {portfolioItems.map((client, index) => (
          <div
            key={client.name}
            className={`flex flex-col md:flex-row gap-6 items-start ${
              index < portfolioItems.length - 1 ? 'border-b border-gray-700 pb-8' : ''
            }`}
          >
            {/* Left: Logo */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-24 h-24 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />

            {/* Right: Text Block */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{client.name}</h3>
              <p className="text-md text-gray-300 mt-2">{client.role}</p>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              >
                View Work →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Videos Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white drop-shadow-md">
          Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <iframe
              key={video.id}
              className="w-full aspect-video rounded-2xl border-0 shadow-md shadow-gray-800/30 transition-transform duration-300 hover:scale-[1.02]"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

