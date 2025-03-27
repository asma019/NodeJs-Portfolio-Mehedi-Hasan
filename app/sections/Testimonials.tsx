"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "CreativeMinds Inc.",
      image: "/images/testimonial1.jpg",
      text: "Mehedi delivered exceptional work for our website redesign. His attention to detail and technical expertise exceeded our expectations. The website is not only visually appealing but also performs excellently across all devices.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      position: "CEO",
      company: "Tech Innovate",
      image: "/images/testimonial2.jpg",
      text: "Working with Mehedi was a great experience. He understood our requirements perfectly and delivered a solution that perfectly matched our vision. His communication throughout the project was excellent.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Clark",
      position: "Product Manager",
      company: "Digital Solutions",
      image: "/images/testimonial3.jpg",
      text: "Mehedi is a talented developer who consistently delivers high-quality work. He helped us develop a complex web application with multiple integrations, and the result was exactly what we needed.",
      rating: 4,
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "E-commerce Entrepreneur",
      company: "ShopNow",
      image: "/images/testimonial4.jpg",
      text: "We hired Mehedi to develop our e-commerce platform, and he delivered an outstanding result. His technical skills and problem-solving abilities made our project a success. Highly recommended!",
      rating: 5,
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">What People Say</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            What my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                  >
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-xl"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-blue-200 dark:text-blue-900/60">
                      <FiMessageSquare size={48} />
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-8">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mr-5 border-4 border-white dark:border-gray-700 shadow-md">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {testimonial.position}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <FiStar 
                              className={`${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300 dark:text-gray-600"
                              } h-6 w-6`} 
                            />
                          </motion.div>
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 dark:text-gray-300 text-lg relative pl-5 border-l-4 border-blue-500 dark:border-blue-400 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 md:-ml-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none border border-gray-200 dark:border-gray-700 transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 md:-mr-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none border border-gray-200 dark:border-gray-700 transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 w-16"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 