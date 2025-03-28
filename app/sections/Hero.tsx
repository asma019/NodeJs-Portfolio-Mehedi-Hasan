"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiArrowRight, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="section-padding min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
                Hi there, I&apos;m
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Mehedi Hasan
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                <span className="relative">
                  Freelance Web Developer
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"></div>
                </span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm">
                <FiCode className="mr-1" /> Frontend
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 shadow-sm">
                <FiCode className="mr-1" /> Backend
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 shadow-sm">
                <FiBriefcase className="mr-1" /> Freelancer
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed"
            >
              I'm a professional freelance web developer with 3+ years of experience creating responsive, 
              user-friendly websites and web applications. I specialize in both frontend and backend development, 
              turning clients' ideas into polished digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center group"
              >
                Get in Touch
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/CV.pdf" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-center group hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Download CV
                <FiDownload className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"></div>
              
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10">
                <Image
                  src="/images/profile.jpeg"
                  alt="Mehedi Hasan"
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-60"></div>
              </div>
              
              {/* Animated circles */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -z-10 inset-0 w-full h-full rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700"
              ></motion.div>
              
              <motion.div 
                initial={{ scale: 0.6, opacity: 0.3 }}
                animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -z-10 inset-0 w-full h-full rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
