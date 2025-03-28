"use client";

import { motion } from "framer-motion";
import { FiBook, FiBookOpen, FiCalendar, FiCheck, FiTarget } from "react-icons/fi";

const Education = () => {
  const educationHistory = [
    {
      degree: "Diploma in Engineering",
      institution: "Mangrove Institute of Science and Technology",
      period: "2023 - 2027 (Expected)",
      description: "Currently pursuing a Diploma in Engineering with a focus on technological innovations and practical applications.",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Hope Technical Institute",
      period: "2021 - 2022",
      description: "In 2022, I completed my Secondary School Certificate with a focus on General Mechanics, building a solid foundation in technical and mechanical concepts for further studies.",
    },
  ];

  const readings = [
    "Advanced JavaScript Design Patterns",
    "Modern Web Development with Next.js",
    "Database Design and Implementation",
    "UI/UX Design Principles",
    "Machine Learning Basics",
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Academic Journey</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My educational background and what I&apos;m currently learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiBookOpen size={22} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Academic History
              </h3>
            </div>
            
            <div className="space-y-8 relative">
              {/* Vertical timeline line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute left-6 top-6 w-1 h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 dark:from-blue-600 dark:via-blue-500 dark:to-blue-400 rounded-full -z-10"
              ></motion.div>
              
              {educationHistory.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="pl-14 relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="absolute left-4 top-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10"
                  ></motion.div>
                  
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent mb-2 sm:mb-0">
                        {edu.institution}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <FiCalendar className="mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiBook size={22} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                What I&apos;m Reading
              </h3>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I believe in continuous learning and staying updated with the latest technologies. 
                Here&apos;s what I&apos;m currently exploring:
              </p>
              
              <ul className="space-y-4">
                {readings.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-5">
                  <FiTarget className="text-blue-500 dark:text-blue-400 mr-3" size={20} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Learning Goals
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  My goal is to become proficient in full-stack development with a focus on creating 
                  scalable, user-friendly web applications. I&apos;m also interested in exploring 
                  emerging technologies like AI and machine learning.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 