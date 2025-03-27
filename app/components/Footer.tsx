"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Logo showText={false} />
              <h2 className="text-2xl font-bold ml-3">Mehedi Hasan</h2>
            </div>
            <p className="text-gray-400 mt-1 mb-4 max-w-md">
              Diploma in Engineering Student & Tech Enthusiast with a passion for creating engaging digital solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://github.com/asma019/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="mailto:hello@mehedims.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
              <a
                href="tel:+8801957594446"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Phone"
              >
                <FiPhone size={18} />
              </a>
              <a
                href="https://maps.google.com/?q=Khulna+University+Khulna+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Location"
              >
                <FiMapPin size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
                <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </Link>
              </nav>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">More</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="relative border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Mehedi Hasan. All rights reserved.
            <Link href="/test-og" className="opacity-0 ml-2 hover:opacity-100 transition-opacity underline">
              OG Test
            </Link>
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>using Next.js & Tailwind CSS</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 