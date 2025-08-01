import React, { useState } from 'react';
import styles from '../styles/ClienteleSection.module.css';

import ntvLogo from '../assets/ntv-logo.png';
import bbcLogo from '../assets/bbc-logo.png';
import gatesLogo from '../assets/Bill-Melinda-Gates-Foundation-Logo.png';

const clients = [
    {
        name: 'NTV',
        logo: ntvLogo,
        role: 'Grew social media channels through strategic content.',
        url: " https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj" // TODO: Add link to actual work
    },

    {
        name: 'BBC',
        logo: bbcLogo,
        role: 'Led multimedia storytelling and editorial strategy.',
        url: " https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj" // TODO: Add link to actual work
    },

    {
        name: 'Gates Foundation',
        logo: gatesLogo,
        role: 'Developed regional imapct narratives for WASH.',
        url: " https://youtu.be/ugDTiBMRsu0?si=8dI1iucQfcvjXdJj" // TODO: Add link to actual work
    },
];

export default  function ClienteleSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = clients.length;

    // Navigate to pervious client (wraps)
    const prev = () => {
        setCurrentIndex(i => {
            const prevIndex = (i - 1 + total) % total;
            console.debug('Navigate to the previous index', prevIndex);
            return prevIndex;
        });
    };
    
    // Navigate to next client (wraps)
    const next = () => { 

        setCurrentIndex(i => {

        const nextIndex = (i + 1) % total
        console.debug('Navigate to the next index: ', nextIndex);
        return nextIndex;
        });
    };

    const { name, logo, role, url } = clients[currentIndex];

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Clientele</h2>
            
            <div className={styles.carousel}>
                {/* Previous Button*/}
                <button
                    aria-label = "Previous client"
                    className = {styles.navButton}
                    onClick = {prev}
                >
                   ⟵ 
                </button>
            </div>

            {/*Card: Single client shown*/}
            <div className={styles.cardWrapper}>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                >
                
                    {/* Logo linked as image */}
                    <div className={styles.logoContainer}>
                        <img
                            src={logo}
                            alt={`${name} logo`}
                            className={styles.logo}
                        />
                    </div>

                    {/* Role Description*/}
                    <div className={styles.info}>
                        <h3 className={styles.clientName}>{name}</h3>
                        <p className={styles.clientRole}>{role}</p>
                        <span className={styles.cta}>View Work </span>
                    </div>
                </a>
                
                {/* Next Button*/}
                <button
                    aria-label="Next client"
                    className={styles.navButton}
                    onClick={next}
                >
                    ⟶
                </button>
            </div>
            
            {/* Indicators*/}
            <div className={styles.indicators}>
                {clients.map((_, idx) => (
                    <span
                        key={idx}
                        className={
                            idx === currentIndex ? `${styles.dot} ${styles.active}` : styles.dot
                        }

                        aria-label={`Client ${idx + 1}`}
                    />
                    
                ))}
            </div>
        </section>
    );
}
