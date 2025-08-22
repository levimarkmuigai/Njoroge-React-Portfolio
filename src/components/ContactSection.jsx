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
    <footer aria-label="Contact" className="py-12 px-4 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Reach Out</h2>

      {/* Social icons row */}
      <div className="flex justify-center gap-6 mb-8">
        {socials.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`text-gray-700 transition-colors ${hoverColors[name]}`}
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>

      {/* Footer credits */}
      <div className="text-sm text-gray-500 space-y-1">
        <p>© 2025 Njoroge Muigai.</p>
        <p>All Rights Reserved.</p>
        <p className="mt-2">
          Powered by <span className="font-semibold text-gray-700">Levi</span>
        </p>
      </div>
    </footer>
  );
}

