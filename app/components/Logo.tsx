"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <Link href="/" className="font-bold text-gray-800 dark:text-white flex items-center group">
      <div className="relative flex items-center justify-center">
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg"
        >
          <span className="text-white text-lg sm:text-xl font-bold">MH</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md opacity-80"
        />
      </div>
      {showText && !isMobile && (
        <motion.div 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-3 flex flex-col"
        >
          <span className="text-lg font-bold tracking-tight">Mehedi Hasan</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Web Developer</span>
        </motion.div>
      )}
    </Link>
  );
};

export default Logo; 