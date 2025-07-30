import React from 'react';

import styles from '../styles/PortfolioSection.module.css'

const companies = [
    {
        name: 'NTV',
        contributions: 'Social Media Growth'
    },

    {
        name: 'BBC',
        contributions: 'Social Media Growth'
    },

    {
        name: 'Gates Foundation',
        contributions: 'Strategic Storytelling'
    }
];

export default function PortfolioSection() {
    return(
            <section className={styles.section}>
            <h2 className={styles.heading}> My Portfolio </h2>

            <div className={styles.cardContainer}>
                {companies.map(({ name, contributions}, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.company}>{name}</h3>
                        <p className={styles.role}>{contributions}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
