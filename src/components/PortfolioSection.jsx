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
    <section className="py-16 px-4 bg-white">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
        Portfolio
      </h2>

      {/* Portfolio Entries */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {portfolioItems.map((client, index) => (
          <div
            key={client.name}
            className={`flex flex-col md:flex-row gap-6 items-start ${
              index < portfolioItems.length - 1 ? 'border-b border-gray-200 pb-8' : ''
            }`}
          >
            {/* Left: Logo */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-24 h-24 object-contain flex-shrink-0"
              loading="lazy"
            />

            {/* Right: Text Block */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{client.role}</p>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-2 inline-block hover:underline"
              >
                View Work →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------
          YouTube Videos Section
      --------------------------- */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <iframe
              key={video.id}
              className="w-full aspect-video rounded-2xl border-0 shadow-md"
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

