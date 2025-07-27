import React from 'react';
import styles from '../styles/ProfileSection.module.css';
import clientPhoto from '../assets/client-photo.jpg';

// ProfileSection: 
export default function ProfileSection() {
    return(
        <section id="profile" className={styles.profileSection}>
            <div className={styles.container}>
                
                {/* === Image side === */}
                <div className={styles.imageWrapper}>
                    <img
                        src = {clientPhoto}
                        alt = "Potrait of Njoroge Muigai"
                        className = {styles.image}
                    />
                </div>

                {/* === Text Side === */}
                <div className={styles.textWrapper}>
                    {/* Professinal Title*/}
                    <h2 className={styles.title}>Senior Journalist - BBC</h2>

                    {/*Summmary Paragraph*/}
                    <p className={styles.paragraph}>
                        I tell African stories. <br />
                        My work spans 10 years. <br />
                        I led big campaigns. <br />
                        At BBC, I shaped news. <br />
                        At NTV, I grew reach. <br />
                        My work is impact-led. <br />
                        I connect people daily. <br />
                        I love what I do most. <br />
                        I believe in truth. <br />
                        I amplify real voices. <br />
                        I lead with clarity. <br />
                    </p>
                </div>
            </div>
        </section>
    );
}
