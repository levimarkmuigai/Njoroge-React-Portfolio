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

const youtubeVideos  = [
    { id: '_HSbGdot1x8', title: 'Shea Butter'},
    { id: 'Q_78NE8_kLA', title: 'Mud Wrestlng'},
    { id: 'FfA3h4-_cMA', title: 'AntiFemicide'},
    { id: 'kRZMwE6fVYk', title: 'Football'},
    { id: 'izBAqXKGTkc', title: 'Flower'},
    { id: 'ugDTiBMRsu0', title: 'Power'}
];

export default function PortfolioSection() {
    return(
            <section className={styles.section}>
            <h2 className={styles.heading}> My Portfolio </h2>

            <div className={styles.cardContainer}>
                {companies.map(({ name, contributions}, index) => 
                (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.company}>{name}</h3>
                        <p className={styles.role}>{contributions}</p>
                    </div>
                ))}
            </div>
            <div className={styles.videoWrapper}>
                <div className={styles.videoGrid}>
                    {youtubeVideos.map((video, index)  => (
                        <iframe
                            key={index}
                            className={styles.video}
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>
            </div>
        </section>
    )
}
