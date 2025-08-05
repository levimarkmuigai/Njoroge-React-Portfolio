import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/TestimonialSection.module.css'

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

const AUTO_ADVANCE_MS = 7000;

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const count = testimonials.length;
    const timerRef = useRef(null);

    const next = () => setCurrent((c) => (c + 1) % count);
    
    const prev = () => setCurrent((c) => (c - 1 + count) % count);

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const startAuto = () => {
        stopAuto();
        timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
    };

    const stopAuto = () => {
        if(timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };

        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
        }, [count]);


    return (
        <section className={styles.section} aria-label="Client testimonials">
           <h2 className={styles.heading}>What Clients Say</h2>
            
            <div
                className={styles.carousel}
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
            >
                <button
                    aria-label="Previous Testimonial"
                    className={styles.navButton}
                    onClick={prev}
                >
                    ⟵
                </button>
            </div> 
        </section>
    );
}

