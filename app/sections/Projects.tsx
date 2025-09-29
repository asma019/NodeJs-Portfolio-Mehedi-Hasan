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
    { id: "tools", label: "Tools" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "saas", label: "SaaS" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "BD Tools - Developer Tools Platform",
      description: "Professional tool suite for developers and digital marketers including User Agent Generator, Fake Name Generator, and Address Lookup with API integration and premium features.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "BD Tools - Developer Tools Platform Homepage",
      github: "https://github.com/asma019/bdtools-project",
      demo: "https://bdtools.cc/",
      category: "tools",
      tags: ["React", "API Integration", "Developer Tools", "Premium"],
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Salman Shafi Blog",
      description: "Modern WordPress blog with custom theme design, SEO optimization, and content management system. Clean typography and responsive layout for optimal reading experience.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "Salman Shafi Blog - WordPress Website",
      github: "#",
      demo: "https://salmanshafi.net/",
      category: "web",
      tags: ["WordPress", "Custom Theme", "SEO", "Responsive"],
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AFK Zone - Premium Learning Platform",
      description: "Comprehensive e-learning platform with expert-led courses, progress tracking, certificates, and job assistance. Features CPA marketing and web development courses.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "AFK Zone - Premium Learning Platform",
      github: "#",
      demo: "https://afkzone.org/",
      category: "saas",
      tags: ["E-Learning", "Course Management", "Certificates", "Progress Tracking"],
      featured: true,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "JellyTools - Web Utilities Suite",
      description: "All-in-one web tools platform with image conversion, screen recording, password generation, and domain utilities. Browser-based tools for developers and content creators.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "JellyTools - Web Utilities Platform",
      github: "#",
      demo: "https://jellytools.io/",
      category: "tools",
      tags: ["Web Tools", "Image Processing", "Utilities", "Browser-based"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "AsiaBio Link - Marketing Platform",
      description: "Comprehensive marketing platform with bio pages, URL shortening, QR codes, file hosting, and 126+ web tools. Trusted by 2,312+ creators for digital marketing.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "AsiaBio Link - Marketing Platform",
      github: "#",
      demo: "https://asiabio.link/",
      category: "saas",
      tags: ["Marketing Tools", "Bio Pages", "URL Shortener", "QR Codes"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Buy A Pet UK - Speed Optimized",
      description: "UK's fastest-growing pet classifieds platform with advanced search, secure payments, and mobile optimization. Performance-optimized e-commerce solution for pet marketplace.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "Buy A Pet UK - Pet Marketplace",
      github: "#",
      demo: "https://buyapet.co.uk/",
      category: "ecommerce",
      tags: ["E-commerce", "Performance", "Mobile Optimized", "Classifieds"],
      featured: true,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      title: "VaratiyaBD - Tenant Management SaaS",
      description: "Modern property management system with cloud-based architecture, SMS notifications, 100+ modules, and comprehensive reporting. Trusted by 50+ landlords in Bangladesh.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "VaratiyaBD - Tenant Management System",
      github: "#",
      demo: "https://varatiyabd.com/",
      category: "saas",
      tags: ["Property Management", "SaaS", "SMS Integration", "Bengali"],
      color: "from-teal-500 to-green-500"
    },
    {
      id: 8,
      title: "Ajker Program - Educational Platform",
      description: "Comprehensive educational platform focused on data communication and computer networking. Features detailed tutorials, examples, and academic content in Bengali language.",
      image: "/images/placeholder-project.jpg",
      imageAlt: "Ajker Program - Educational Platform",
      github: "#",
      demo: "https://ajkerprogram.com/",
      category: "web",
      tags: ["Education", "Computer Science", "Bengali Content", "Tutorials"],
      color: "from-pink-500 to-rose-500"
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Placeholder component for when images fail to load
  const PlaceholderImage = ({ project }: { project: any }) => (
    <div className={`relative h-56 w-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
      <div className="text-center text-white p-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
          {project.category === 'tools' && <FiCode size={28} />}
          {project.category === 'web' && <FiFolder size={28} />}
          {project.category === 'ecommerce' && <FiExternalLink size={28} />}
          {project.category === 'saas' && <FiCode size={28} />}
        </div>
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-sm opacity-90 line-clamp-2">{project.description.substring(0, 80)}...</p>
      </div>
      <div className="absolute top-4 right-4 text-xs bg-white/20 px-2 py-1 rounded-full">
        {project.category.toUpperCase()}
      </div>
    </div>
  );

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
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Client Projects</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A collection of professional projects including SaaS platforms, e-commerce solutions, educational websites, and developer tools. Each project demonstrates advanced functionality and modern design principles.
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
          <div className="bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center gap-1">
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
                {/* Use placeholder image component for better visual experience */}
                <PlaceholderImage project={project} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
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
                
                <div className="absolute bottom-4 left-4 right-4 z-10">
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
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiFolder className="mr-2" size={14} />
                    <span className="text-sm font-medium capitalize">{project.category.replace('_', ' ')}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View Live
                    <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FiGithub className="mr-2" size={18} />
            View More Projects on GitHub
            <FiArrowRight className="ml-2" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;