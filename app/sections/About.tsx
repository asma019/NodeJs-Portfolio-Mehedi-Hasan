"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayout, FiBriefcase, FiGlobe, FiUser, FiAward } from "react-icons/fi";

const About = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 65 },
    { name: "Express", level: 75 },
    { name: "Java", level: 60 },
    { name: "MySQL", level: 70 },
    { name: "WordPress", level: 92 },
    { name: "Server Management", level: 85 },
  ];

  const categories = [
    {
      icon: <FiCode size={24} />,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      icon: <FiServer size={24} />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Java"],
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Database",
      skills: ["MySQL"],
    },
    {
      icon: <FiLayout size={24} />,
      title: "Design",
      skills: ["Responsive Design", "UI/UX Basics"],
    },
    {
      icon: <FiGlobe size={24} />,
      title: "WordPress",
      skills: ["WordPress Speed Optimization", "Theme Development", "Plugin Customization"],
    },
    {
      icon: <FiServer size={24} />,
      title: "Server Management",
      skills: ["cPanel", "Webuzo", "CyberPanel", "HostiaCP", "VPS Configuration"],
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">About Me</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Know Me Better</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiUser size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
              >
                I am a freelance web developer passionate about creating high-quality, functional websites 
                and web applications for clients worldwide. With over 3 years of experience in web development 
                and digital solutions, I've built a strong foundation in both frontend and backend technologies.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
              >
                Currently studying towards a Diploma in Engineering at Mangrove Institute of Science and Technology (2023-2027), 
                I'm constantly improving my technical skills while working professionally as a freelancer.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="paragraph text-gray-600 dark:text-gray-400 leading-relaxed relative z-10"
              >
                I specialize in building responsive websites, e-commerce platforms, and custom web applications 
                for clients on Fiverr and other platforms, turning complex requirements into elegant, user-friendly solutions.
                I'm also an expert in WordPress speed optimization and VPS control panel setup including cPanel, Webuzo, CyberPanel, and HostiaCP.
              </motion.p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Freelance Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web & Application Solutions</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">3+ Years in Web Development</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiAward size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
              <FiCode size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skill Proficiency
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="mb-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium py-0.5 px-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full shadow-inner" 
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 