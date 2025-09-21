import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaLightbulb, FaHeart } from "react-icons/fa";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const floating = {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  // Skills ko ek array mein daal diya hai for easy mapping
  const skillsList = [
    "JavaScript (ES6+)", "React", "Node.js", "Express",
    "MongoDB", "REST APIs", "TailwindCSS", "Framer Motion"
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center w-full min-h-screen 
  bg-gradient-to-br from-[#222831] via-[#2C313A] to-[#1B2025] px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-20 w-64 h-64 bg-[#00ADB5]/20 rounded-full blur-3xl"
          animate={floating}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-80 h-80 bg-[#EEEEEE]/10 rounded-full blur-3xl"
          animate={{ ...floating, transition: { ...floating.transition, delay: 1 } }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 pt-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE]"
          >
            About Me
          </h1>
          <motion.div
            className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting digital experiences that make a difference in people’s lives
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Professional Summary */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#393E46]/80 backdrop-blur-lg p-8 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-[#00ADB5]/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FaRocket className="text-[#00ADB5]" /> Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m a <span className="text-[#00ADB5] font-semibold">MERN Stack Developer</span> with a passion
              for building responsive, scalable applications and turning ideas into impactful digital
              experiences.
            </p>
          </motion.div>

          {/* === SKILLS CARD (IMPROVED) === */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#393E46]/80 backdrop-blur-lg p-8 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-[#00ADB5]/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FaCode className="text-[#00ADB5]" /> Skills
            </h3>
            {/* Skills ko badges mein dikhaya gaya hai */}
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, index) => (
                <span key={index} className="bg-[#222831] text-[#00ADB5] font-medium px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vision & Hobbies */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#393E46]/80 backdrop-blur-lg p-8 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-[#00ADB5]/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FaLightbulb className="text-[#00ADB5]" /> Vision
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Building products that blend performance, accessibility, and creativity.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
              <FaHeart className="text-pink-400" /> Hobbies
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Exploring new tech, contributing to open-source, and mentoring developers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;