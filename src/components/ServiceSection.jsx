import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

const services = [
  {
    id: 1,
    title: 'Film Production',
    description: 'End-to-end video creation tailored to your story.',
    image: service1,
  },
  {
    id: 2,
    title: 'Creative Production',
    description: 'Innovative concepts, sharp visuals, high impact.',
    image: service2,
  },
  {
    id: 3,
    title: 'Film Fixing',
    description: 'Local support and logistics for international crews.',
    image: service3,
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-black py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center drop-shadow-md">
        My Services
      </h2>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px] mx-auto px-4">
        {services.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-gray-900/90 w-full sm:w-64 md:w-72 h-[380px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 flex flex-col items-center"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-white">{title}</h3>
            <p className="text-sm md:text-md text-center text-gray-300 px-5 mt-2 flex-grow">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

