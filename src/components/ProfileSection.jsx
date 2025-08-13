import React from 'react';
import clientPhoto from '../assets/client-photo.jpg';

// ProfileSection: 
export default function ProfileSection() {
    return(
        <section id="profile" className="bg-white py-12">
            <div className= "max-w-6xl mx-auto flex flex-col lg:flex-row items-center  px-6;">
                
                {/* === Image side === */}
                <div className=" flex-1">
                    <img
                        src = {clientPhoto}
                        alt = "Potrait of Njoroge Muigai"
                        className = "w-full max-w-sm rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* === Text Side === */}
                <div className= "flex-1">
                    {/* Professinal Title*/}
                    <h2 className="text-3xl font-semibold mb-4">Senior Journalist - BBC</h2>

                    {/*Summmary Paragraph*/}
                    <p className= "text-base leading-relaxed space-y-1 max-w-prose">
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
