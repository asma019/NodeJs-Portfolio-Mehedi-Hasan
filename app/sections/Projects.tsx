"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiArrowRight } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "other", label: "Other" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/images/project1.jpg",
      github: "https://github.com/asma019/ecommerce-platform",
      demo: "#",
      category: "web",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, user roles, and real-time updates.",
      image: "/images/project2.jpg",
      github: "https://github.com/asma019/task-manager",
      demo: "#",
      category: "web",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts based on location with interactive maps.",
      image: "/images/project3.jpg",
      github: "https://github.com/asma019/weather-app",
      demo: "#",
      category: "mobile",
      tags: ["React Native", "API Integration"],
    },
    {
      id: 4,
      title: "Recipe Finder",
      description: "A recipe finder application allowing users to search recipes by ingredients, dietary restrictions, and more.",
      image: "/images/project4.jpg",
      github: "https://github.com/asma019/recipe-finder",
      demo: "#",
      category: "web",
      tags: ["JavaScript", "API", "CSS"],
    },
    {
      id: 5,
      title: "Budget Tracker",
      description: "A budget tracking application with expense categorization, visualizations, and financial insights.",
      image: "/images/project5.jpg",
      github: "https://github.com/asma019/budget-tracker",
      demo: "#",
      category: "mobile",
      tags: ["Flutter", "Firebase"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects, skills, and professional experience.",
      image: "/images/project6.jpg",
      github: "https://github.com/asma019/portfolio",
      demo: "#",
      category: "web",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
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
            A collection of projects I&apos;ve worked on, showcasing my skills and experience.
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
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiFolder className="mr-2" />
                    <span className="text-sm font-medium capitalize">{project.category}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link"
                  >
                    View Project 
                    <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 