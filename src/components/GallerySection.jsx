import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import picture from '../assets/service2.jpg';

const COLLAPSED_COUNT = 3;

// Generate gallery items with random heights for Pinterest effect
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  src: picture,
  height: 200 + Math.floor(Math.random() * 150), // 200px to 350px
}));

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
    <section aria-label="Gallery" ref={sectionRef} className="scroll-mt-20 py-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-md">
        Gallery
      </h2>

      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.img
              key={index}
              src={item.src}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              layout
              style={{
                height: !expanded && index < COLLAPSED_COUNT ? 250 : item.height,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full mb-4 rounded-2xl object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-red-500/50"
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleToggle}
          className="
            px-8 py-3
            bg-black
            border border-red-500
            text-white font-semibold
            rounded-full
            shadow-md
            hover:shadow-red-500/50
            transition-all duration-300
            hover:scale-105
          "
        >
          {expanded ? "Collapse Gallery" : "Expand Gallery"}
        </button>
      </div>
    </section>
  );
}

