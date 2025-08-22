import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import picture from '../assets/service2.jpg';

const galleryItems = Array(12).fill(picture);
const COLLAPSED_COUNT = 3;

export default function GallerySection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const visibleItems = expanded ? galleryItems : galleryItems.slice(0, COLLAPSED_COUNT);

  const handleToggle = () => {
    setExpanded(!expanded);

    if (expanded && sectionRef.current) {
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section aria-label="Gallery" className="py-12 px-4" ref={sectionRef}>
      <h2 className="text-2xl font-bold text-center mb-8">Gallery</h2>

      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {visibleItems.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleToggle}
          className="
            px-8 py-3
            bg-gradient-to-r from-blue-500 to-cyan-400
            text-white font-semibold
            rounded-full
            shadow-lg hover:shadow-xl
            transition transform hover:-translate-y-0.5
          "
        >
          {expanded ? "Collapse Gallery" : "Expand Gallery"}
        </button>
      </div>
    </section>
  );
}

