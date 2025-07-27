import React from 'react';

import styles from '../styles/ServiceSection.module.css';

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
        <section className={styles.section}>
            <h2 className={styles.heading}>My Services</h2>

            {/* Flex container for cards*/}
            <div className={styles.cardContainer}>
                {services.map(({ id, title, description, image }) => (
                    <div key={id} className={styles.card}>
                            <img src={image} alt={title} className={styles.img} />
                            <h3 className={styles.title}> {title}</h3>
                            <p className={styles.description}> {description}</p>
                    </div>
                ))}
            </div>
        </section>
    );

}
