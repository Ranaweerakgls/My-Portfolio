// Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center gap-6">
        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative hover:text-pink-400 transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-gradient-to-r after:from-pink-400 after:to-purple-500
                hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button - transparent with white border/text */}
        <a
          href="#contact"
          className="px-6 py-2 rounded-full border-2 border-white text-white font-semibold
          hover:bg-white hover:text-black transition whitespace-nowrap"
        >
          ContactMe
        </a>
      </div>
    </nav>
  );
}
