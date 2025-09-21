import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Class 10th (High School)",
      institution: "Sacred Heart Centenary Academy",
      location: "Orai, Uttar Pradesh",
      score: "Percentage: 85.2%",
      year: "2018 - 2019",
    },
    {
      degree: "Class 12th (Senior Secondary)",
      institution: "BKD-Aldrich Public School",
      location: "Orai, Uttar Pradesh",
      score: "Percentage: 75.2%",
      year: "2020 - 2021",
    },
    {
      degree: "B.Tech, Computer Science",
      institution: "Sagar Institute of Research & Technology",
      location: "Bhopal, Madhya Pradesh",
      score: "CGPA: 6.1 (Till 4th Sem)",
      year: "2022 - 2026",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const itemRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      // === BACKGROUND UPDATED TO THEME GRADIENT ===
      className="relative w-full min-h-screen py-20 px-6 
      bg-gradient-to-tr from-[#1B2025] via-[#222831] to-[#2C313A] 
      overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">My Education</h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">My academic journey and qualifications.</p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 top-0 h-full w-1 bg-[#393E46] origin-top" 
          />

          <motion.div
            variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-16"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? item : itemRight}
                className="relative flex items-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#2C313A] border-4 border-[#00ADB5] rounded-full z-10 flex items-center justify-center"
                >
                  <FaGraduationCap className="text-2xl text-[#00ADB5]" />
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-[calc(50%-3rem)] p-6 bg-[#393E46]/80 backdrop-blur-sm rounded-2xl border border-[#00ADB5]/30 shadow-lg hover:shadow-2xl hover:shadow-[#00ADB5]/20
                    ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#EEEEEE] bg-[#00ADB5]/20 px-3 py-1 rounded-full">{edu.year}</span>
                    <span className="text-lg font-bold text-[#00ADB5]">{edu.score}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#EEEEEE] mb-2">{edu.degree}</h3>
                  <div className="flex items-start space-x-2 text-gray-400">
                    <FiMapPin className="mt-1 flex-shrink-0" />
                    <p className="text-sm">{edu.institution}, {edu.location}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;