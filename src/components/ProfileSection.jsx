import React from 'react';

import clientPhoto from '../assets/client-photo.jpg';

import styles from '../styles/ProfileSection.module.css';

export default function ProfileSection() {
    return(
        <section id="profile" 
            className={
                `${styles['profile-section']} ${styles['profile-section-centered']}`
        }>
            {/* ===== Career Content Block ===== */}
            <div 
                className = {styles['profile-section_container']}
            >
                
               {/* Career Summary*/}
               <div className = {styles['profile-section_content']}>
                    
                 <h2 className = {styles['profile-section_title']}>Career Highlights</h2>
                 
                
                 <p className = {styles['profile-section_paragraph']}>
                    Over a decade as a communications specialist and former BBC senior journalist, I’ve
                    led multimedia storytelling initiatives that amplified community voices across Africa.
                 </p>
                 <p className = {styles['profile-section_paragraph']}>
                    Key achievements include co-leading the BBC WASH project, scaling NTV Kenya’s social
                    media from 100K to over 1M, and crafting data-driven campaigns that bridge funders
                    and grassroots audiences.
                </p>   
               </div>

               {/* ==== Portrait Image ==== */}
                <div
                    className = {
                        `${styles['profile-section_image-wrapper']} ${styles['profile-section-image-right']}`
                    }
                >
                <img
                    src={clientPhoto}
                    alt="Potrait of Njoroge Muigai"
                    className={styles['profile-section_image']}
                />    
                </div>
            </div>
        </section>
    );
}
