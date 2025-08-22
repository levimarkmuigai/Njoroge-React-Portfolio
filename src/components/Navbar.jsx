import React from "react";

const NAV_LINKS = [
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const Navbar = React.memo(function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center gap-16 py-4">
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            className="
              relative text-white text-lg font-semibold
              transition-all duration-300
              hover:text-red-500
              hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]
            "
            onClick={() => {
              const section = document.getElementById(id);
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
            {/* Animated Neon Underline */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 hover:w-full"></span>
          </button>
        ))}
      </div>
    </nav>
  );
});

export default Navbar;

