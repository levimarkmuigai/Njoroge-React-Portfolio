import React, { useState, useEffect, useRef } from 'react';

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

// Auto-slide interval in miliseconds
const AUTO_ADVANCE_MS = 7000;

export default function TestimonialSection() {

    // Store current testimonial being displayed.
    const [current, setCurrent] = useState(0);

    // Stores total testimonials
    const count = testimonials.length;

    // We use ref so the timer persists between renders
    const timerRef = useRef(null);

    // Go to next testimonial (Loops to 0 when at the end.)
    const next = () => setCurrent((c) => (c+1) % count);

    // Go to previous testimonial (Loops to last when at index 0.)
    const prev = () => setCurrent((c) => (c+1) % count);

    // Start the auto-sliding
    const startAuto = () => {
        stopAuto(); // Clears any existing timer before starting a new one.
        timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
    };

    // Stops Auto-sliding(Used on hover.)
    const stopAuto = () => {
        if(timerRef.current) clearInterval(timerRef.current);
    };

    // Starts auto-sliding when component mounts
    useEffect(() => {
        startAuto();
        return stopAuto; // Clean up when unmounting

    }, []);

    // Keyboard navigation listener
    useEffect(() => {
        const onKey = (e) => {
            if(e.key === "ArrowRight") next();
            if(e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

}
