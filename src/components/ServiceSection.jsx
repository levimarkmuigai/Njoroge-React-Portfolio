import React from 'react';
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
        <section 
        className="
        flex flex-col items-center bg-gray-100 p-10 
        ">
            <h2 
        className="
        text-4xl font-extrabold text-gray-900 mb-12 text-center
        "
        >My Services
        </h2>

            {/* Card Container: Wraps on small screens*/}
            <div className="
                flex justify-center flex-wrap gap-8
                w-full max-w-[900px]
            ">
                {services.map(({ id, title, description, image }) => (
                    <div key={id} className= "
                                bg-white w-64 h-[350px] rounded-xl overflow-hidden
                                shadow-md transition-transform duration-300 hover:scale-105
                                flex flex-col items-center
                            ">
                            <img 
                                src={image} 
                                alt={title} 
                                className= "w-full h-52 object-cover"
                                loading="lazy"
                            />

                            <h3 
                                className= "text-lg font-semibold mt-4 text-gray-700"
                            > 
                                {title}
                            </h3>
                            
                            <p 
                                className= "text-sm text-center text-gray-500 px-5 mt-2 flex-grow"
                            > 
                                {description}
                            </p>
                    </div>
                ))}
            </div>
        </section>
    );

}
