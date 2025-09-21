import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
// 1. Import the scroll utility from the new library
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Update the function to use the library's scroll method
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Scroll speed in milliseconds (e.g., 1000ms = 1 second)
      smooth: 'easeInOutCubic', // Easing function for a classy effect
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#00ADB5] text-[#222831] rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(0, 173, 181, 0.5)' }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;