// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black/90 text-gray-300 py-14 md:py-20 mt-24 md:mt-32 overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6 md:space-y-8">

        {/* Name */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Lakshika.
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-400 max-w-md md:max-w-xl mx-auto leading-relaxed">
          Designing and building engaging digital experiences with creativity,
          code, and purpose.
        </p>

        {/* Footer Links */}
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:text-base">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 md:gap-6 text-lg md:text-xl pt-2">
          <a
            href="https://github.com/Ranaweerakgls"
            target="_blank"
            rel="noreferrer"
            className="p-3 md:p-3.5 rounded-full border border-gray-600 hover:border-pink-400 hover:text-pink-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lakshika-ranaweera-905989296"
            target="_blank"
            rel="noreferrer"
            className="p-3 md:p-3.5 rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-pink-500 pt-4 md:pt-6">
          © {new Date().getFullYear()} Lakshika Ranaweera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
