import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    text: 'Working with him transformed our outreach—storytelling became measurable engagement.',
    author: 'Leah Mwangi',
    role: 'Communications Director, NGO X',
    link: '#',
  },
  {
    text: 'His editorial instincts brought clarity to complex regional issues, making them resonate.',
    author: 'David Odhiambo',
    role: 'Policy Advisor, Regional Initiative',
    link: '#',
  },
  {
    text: 'The campaign grew our audience and built trust; the narratives he crafted stuck.',
    author: 'Amina Yusuf',
    role: 'Program Lead, Development Fund',
    link: '#',
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-black py-16 text-white" aria-label="Client Testimonials">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 drop-shadow-md">
        What Clients Say
      </h2>

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-6xl mx-auto px-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/90 shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-red-500/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {/* Text */}
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              {item.text}
            </p>

            {/* Author Info */}
            <div className="mt-auto">
              <a
                href={item.link}
                className="block font-semibold text-white hover:text-white transition-colors duration-300"
              >
                {item.author}
              </a>
              <span className="text-sm text-gray-400">{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

