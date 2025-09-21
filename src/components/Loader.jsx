import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const text = "MSR".split(""); // You can change this to your initials

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#222831]">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            className="text-5xl font-bold text-[#00ADB5]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;