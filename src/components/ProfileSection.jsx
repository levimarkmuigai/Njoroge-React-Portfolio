import React from 'react';
import clientPhoto from '../assets/client-photo.jpg';
import resumePDF from '../assets/client_resume.pdf';

export default function ProfileSection() {
  return (
    <section id="profile" className="relative py-16 sm:py-20 md:py-24 flex justify-center">
      <div className="bg-gray-900/90 backdrop-blur-md rounded-3xl max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 p-8 md:p-12">

        {/* === Text & Image in One Card === */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left max-w-3xl lg:max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Njoroge Muigai – Senior Journalist at BBC
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-300">
              I’m Njoroge Muigai. Over the past decade, I’ve dedicated my career to telling stories that matter across Africa. From shaping coverage at BBC to expanding reach at NTV, my work has always centered on impact, clarity, and truth. I craft narratives that connect people, amplify real voices, and shed light on the stories that often go unheard. Journalism isn’t just my profession—it’s my way of creating change and inspiring understanding. Every story I pursue is a step toward a more informed and engaged world.
            </p>

            {/* Resume Button */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-8 py-3
                bg-black border border-red-500
                text-white font-semibold
                rounded-full
                hover:scale-105
                transition-all duration-300
              "
            >
              View Resume
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src={clientPhoto}
              alt="Portrait of Njoroge Muigai"
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

