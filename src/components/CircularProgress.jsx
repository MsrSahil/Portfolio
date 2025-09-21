import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CircularProgress = ({ value, color, icon, isHovered }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} strokeWidth="8" className="stroke-[#393E46]" fill="transparent" />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="8"
          className={`stroke-current ${color}`}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      
      {/* Icon aur Percentage ke beech switch karne ke liye */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.span
              key="value"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className={`font-bold text-2xl ${color}`}
            >
              {value}%
            </motion.span>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CircularProgress;