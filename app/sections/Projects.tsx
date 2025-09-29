"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiArrowRight } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "portfolio", label: "Portfolio" },
    { id: "tools", label: "Tools" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Modern Portfolio Website",
      description: "A performance-optimized portfolio website built with Next.js 15 and Tailwind CSS, featuring smooth animations, SEO optimization, and a functional contact form.",
      image: "/images/project1.jpg",
      github: "https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan",
      demo: "https://node-js-portfolio-mehedi-hasan.vercel.app",
      category: "portfolio",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
    },
    {
      id: 2,
      title: "System Admin Portfolio",
      description: "An open-source portfolio template for System Admins & Tech Experts with glass morphism UI, AWS SES integration, and complete SEO optimization.",
      image: "/images/project2.jpg",
      github: "https://github.com/asma019/Next.js-Portfolio-for-System-Admins",
      demo: "https://next-js-portfolio-for-system-admins.vercel.app",
      category: "portfolio",
      tags: ["Next.js 15", "AWS SES", "Glass UI", "SEO"],
      featured: true,
    },
    {
      id: 3,
      title: "EMI Calculator",
      description: "A responsive loan EMI calculator with interactive sliders, amortization schedule, CSV export, and WordPress embedding support. Built for financial calculations.",
      image: "/images/project3.jpg",
      github: "https://github.com/asma019/EMI-Calculator-usign-NexJS",
      demo: "https://emi-calculator-usign-nex-js.vercel.app",
      category: "tools",
      tags: ["Next.js", "TypeScript", "Financial", "CSV Export"],
      featured: true,
    },
    {
      id: 4,
      title: "Client Portfolio - Redwan",
      description: "A custom portfolio website designed and developed for client Redwan, featuring modern design principles and responsive layout.",
      image: "/images/project4.jpg",
      github: "https://github.com/asma019/Portfoilo-for-Client-Redwan",
      demo: "#",
      category: "portfolio",
      tags: ["TypeScript", "Custom Design", "Client Work"],
    },
    {
      id: 5,
      title: "Record Screen Tool",
      description: "A free and open-source screen recording application with a clean interface and essential recording features for content creators.",
      image: "/images/project5.jpg",
      github: "https://github.com/asma019/Record-Screen",
      demo: "http://recordscreen.me",
      category: "tools",
      tags: ["HTML", "JavaScript", "Screen Recording", "Open Source"],
    },
    {
      id: 6,
      title: "React Image Converter",
      description: "A React-based image conversion tool that allows users to convert images between different formats with a clean and intuitive interface.",
      image: "/images/project6.jpg",
      github: "https://github.com/asma019/react-image-converter",
      demo: "#",
      category: "tools",
      tags: ["React", "TypeScript", "Image Processing"],
    },
    {
      id: 7,
      title: "Town Ship Website",
      description: "A modern township website with interactive features and clean design, showcasing community information and services.",
      image: "/images/project7.jpg",
      github: "https://github.com/asma019/town-ship",
      demo: "https://town-ship.vercel.app",
      category: "web",
      tags: ["TypeScript", "Community", "Responsive"],
    },
    {
      id: 8,
      title: "Project Notes App",
      description: "A note-taking application for project management with clean UI and essential features for organizing development notes and ideas.",
      image: "/images/project8.jpg",
      github: "https://github.com/asma019/project-note",
      demo: "https://project-note-xi.vercel.app",
      category: "tools",
      tags: ["TypeScript", "Note Taking", "Project Management"],
    },
    {
      id: 9,
      title: "BDIX Server Tool",
      description: "A PHP-based tool for BDIX server management and monitoring, providing essential utilities for network administrators.",
      image: "/images/project9.jpg",
      github: "https://github.com/asma019/BDIX-2",
      demo: "#",
      category: "tools",
      tags: ["PHP", "Server Management", "Network Tools"],
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">My Portfolio</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A showcase of my latest work including modern web applications, portfolio websites, and developer tools. Each project demonstrates different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <FiGithub size={16} />
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiFolder className="mr-2" size={14} />
                    <span className="text-sm font-medium capitalize">{project.category.replace('_', ' ')}</span>
                  </div>
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      View Demo
                      <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      View Code
                      <FiCode className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://github.com/asma019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FiGithub className="mr-2" size={18} />
            View All Projects on GitHub
            <FiArrowRight className="ml-2" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;