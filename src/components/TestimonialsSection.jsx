import React from 'react';

import { motion } from "framer-motion";


const testimonials = [
    {
    text: 'Working with him transformed our outreach—storytelling became measurable engagement.',
    author: 'Leah Mwangi',
    role: 'Communications Director, NGO X',
    link: '#',
  },
  {
    text: 'His editorial instincts brought clarity to complex regional issues, making them resonate.',
    author: 'David Odhiambo',
    role: 'Policy Advisor, Regional Initiative',
    link: '#',
  },
  {
    text: 'The campaign grew our audience and built trust; the narratives he crafted stuck.',
    author: 'Amina Yusuf',
    role: 'Program Lead, Development Fund',
    link: '#',
  },
];


export default function TesimonialSection() {
    return (
        <section
        className= "py-16 bg-gray-50"
        aria-label = "Client Testimonials"
        >
        {/* Heading*/}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Clients Say
        </h2>

        {/* Grid Wrapper - responsive, 3 columns max */}
        <div className="grid grid-cols-1 am:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                }}
                >
                {/*Text*/}
                <p className="text-gray-700 text-lg mb-4 leading-relaxed"> {item.text}</p>
                {/*Author Info*/}
                <div className="mt-auto">
                <a
                href={item.link}
                className="block font-semibold text-gray-900 hover:text-blue-600"
                >
                {item.author}
                </a>
                <span className = "text-sm text-gray-500">{item.role}</span>
                </div>
                </motion.div>  
            ))};
        </div>
        </section>
    )
}
