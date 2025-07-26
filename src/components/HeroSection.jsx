import React from 'react';

import styles from '../styles/HeroSection.module.css'

import { Linkedin, Twitter, Instagram } from 'lucide-react';
// Social links and data
const SOCIAL_LINKS = [
    { Icon: Linkedin, href: 'https://linkedin.com/in/njorogemuigai', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/njorogemuigai', label: 'Twitter' },
    { Icon: Instagram, href: 'https://instagram.com/njorogemuigai', label: 'Instagram'}
];

/**
    * HeroSection 
    * - Renders client name, tagline and social links.
    * - React.memo for avoiding needless re-renders.  
    */

const HeroSection = React.memo(function HeroSection() {
    return (
        <header className = {styles.header}>
            <div className = {styles.container + '' + styles['container-justify-between']}>
                
                {/* Text Block: Name & Tagline*/}
                <div className = {styles.textBlock}>
                    <h1 className = {styles.title}>
                        Njoroge Muigai
                    </h1>
                    <p className = {styles.tagline}>
                        Crafting bold digital marketing narratives that connect hearts and minds—one click at a time.
                    </p>
                </div>

                {/* Socail Navigation */}
                <nav className={styles.socialNav}>
                    {SOCIAL_LINKS.map(({ Icon, href, label}) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className={styles.socialLinks}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <Icon size={28} />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
});

export default HeroSection;
