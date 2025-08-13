import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  { Icon: Linkedin, href: "https://linkedin.com/in/njorogemuigai", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/njorogemuigai", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com/njorogemuigai", label: "Instagram" },
];

const HeroSection = React.memo(function HeroSection() {
  return (
    <header className="bg-white dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-700">
      <div className="w-full flex flex-col md:flex-row justify-between relative">
        
        {/* Text Block: Name & Tagline */}
        <div className="pl-8 md:pl-16 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Njoroge Muigai
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Crafting bold digital marketing narratives that connect hearts and minds—one click at a time.
          </p>
        </div>

        {/* Social Navigation */}
        <nav className="mt-6 md:mt-0 pr-8 md:pr-16 flex gap-4 items-start">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={28} className="text-gray-800 dark:text-gray-200" />
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
});

export default HeroSection;

