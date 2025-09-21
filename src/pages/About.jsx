import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCrosshairs, FaCompass } from "react-icons/fa";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center w-full min-h-screen 
      bg-gradient-to-br from-[#222831] via-[#2C313A] to-[#1B2025] px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 pt-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">
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
            A Glimpse into My Professional Journey and Philosophy.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Card 1: Professional Summary */}
          <motion.div
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-[#393E46]/80 backdrop-blur-lg p-6 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-2xl hover:shadow-[#00ADB5]/20 h-full group" // Added group
          >
            {/* === CORNER BRACKET ELEMENTS (NEW) === */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00ADB5]/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00ADB5]/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 font-heading">
              <FaRocket className="text-[#00ADB5]" /> Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As a Full Stack Developer, I specialize in transforming complex requirements into elegant, high-performance MERN stack applications. My focus is on writing clean, scalable code and delivering seamless user-centric solutions.
            </p>
          </motion.div>

          {/* Card 2: My Development Approach */}
          <motion.div
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-[#393E46]/80 backdrop-blur-lg p-6 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-2xl hover:shadow-[#00ADB5]/20 h-full group" // Added group
          >
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00ADB5]/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00ADB5]/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 font-heading">
              <FaCrosshairs className="text-[#00ADB5]" /> My Development Approach
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                <strong className="font-semibold text-white">User-First:</strong> I begin every project by understanding the end-user's needs to ensure the final product is both intuitive and effective.
              </p>
              <p>
                <strong className="font-semibold text-white">Clean Code:</strong> A firm believer in writing maintainable and well-documented code that stands the test of time.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Philosophy & Interests */}
          <motion.div
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-[#393E46]/80 backdrop-blur-lg p-6 rounded-3xl border border-[#00ADB5]/30 
            shadow-lg hover:shadow-2xl hover:shadow-[#00ADB5]/20 h-full group" // Added group
          >
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00ADB5]/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00ADB5]/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 font-heading">
              <FaCompass className="text-[#00ADB5]" /> Philosophy & Interests
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My goal is to create digital tools that are not only powerful but also accessible and enjoyable to use. Beyond the keyboard, I'm passionate about contributing to the open-source community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;