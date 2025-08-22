import React from 'react';
import { Linkedin, Twitter, Mail, Instagram, MessageCircle } from 'lucide-react';

const socials = [
  { name: "Linkedin", icon: Linkedin, href: "https://linkedin.com/in/njorogemuigai" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/njorogemuigai" },
  { name:"Instagram", icon: Instagram, href: "https://instagram.com/njorogemuigai" },
  { name:"Whatsapp", icon: MessageCircle, href:  "https://wa.me/254724201726" },
  { name:"Mail", icon: Mail, href: "mailto:njorogemuigai@gmail.com" },
];

// Lookup table for hover colors
const hoverColors = {
  Linkedin: "hover:text-blue-700",
  Twitter: "hover:text-sky-500",
  Instagram: "hover:text-pink-500",
  Whatsapp: "hover:text-green-500",
  Mail: "hover:text-red-500",
};

export default function ContactSection() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-black text-white py-16 px-4" aria-label="Contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center drop-shadow-md">
        Reach Out
      </h2>

      {/* Social icons grid for responsiveness */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {socials.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`text-gray-400 transition-colors duration-300 ${hoverColors[name]} hover:scale-110`}
          >
            <Icon className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        ))}
      </div>

      {/* Footer credits */}
      <div className="text-sm md:text-base text-gray-500 space-y-1 text-center">
        <p>© 2025 Njoroge Muigai.</p>
        <p>All Rights Reserved.</p>
        <p className="mt-2">
          Powered by <span className="font-semibold text-gray-400">Levi</span>
        </p>
      </div>
    </footer>
  );
}

