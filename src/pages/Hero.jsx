import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaDownload } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
// LeetCode icon imported
import { SiLeetcode } from "react-icons/si";
import Sahilimg from "../assets/SahilImg.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  const nameAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const chevronVariants = {
    initial: { y: 0, opacity: 0.5 },
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] pt-24 pb-10 flex justify-center items-center px-4 sm:px-6 overflow-hidden bg-[#222831]"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-6 left-6 w-40 h-40 sm:w-72 sm:h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse"
        />
        <motion.div
          className="absolute bottom-6 right-6 w-64 h-64 sm:w-96 sm:h-96 bg-[#EEEEEE]/5 rounded-full blur-3xl animate-pulse animation-delay-3000"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-7xl mx-auto">
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <motion.div
            className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] border-2 border-[#00ADB5]/30 rounded-full"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] border-2 border-[#EEEEEE]/10 rounded-full"
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-2xl shadow-[#00ADB5]/20">
            <img
              src={Sahilimg}
              alt="Mohd Swahil Rahmani"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              sizes="(min-width: 768px) 20vw, 60vw"
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h2 variants={itemVariants} className="text-base sm:text-xl md:text-3xl text-[#00ADB5] font-medium mb-2">
            Hello, I'm
          </motion.h2>

          <motion.h1 
            variants={containerVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#EEEEEE] mb-4 leading-tight"
          >
            <div>
              {"Mohd Swahil".split("").map((char, index) => (
                <motion.span key={`first-${index}`} variants={nameAnimation} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div>
              {"Rahmani".split("").map((char, index) => (
                <motion.span key={`last-${index}`} variants={nameAnimation} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 h-8 sm:h-10">
            I'm a <span className="text-white font-semibold">
            <Typewriter
              words={["Full Stack Developer", "MERN Stack Expert", "Problem Solver"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            </span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
             Crafting robust and scalable web applications from front to back.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#00ADB5] text-[#222831] font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-2"
            >
              <FaCode /> View My Work
            </a>
            <a
              href="./Mohd Swahil Rahmani.pdf"
              download
              className="px-8 py-3 border-2 border-[#00ADB5] text-[#00ADB5] font-semibold rounded-lg hover:bg-[#00ADB5] hover:text-[#222831] transition-all text-center flex items-center justify-center gap-2"
              aria-label="Download resume"
            >
              <FaDownload /> Resume
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-6">
            <a href="https://github.com/MsrSahil" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-[#00ADB5] transition-all">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/swahil-mohd-5543a5259/" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-[#00ADB5] transition-all">
              <FaLinkedin size={24} />
            </a>
            {/* === LEETCODE LINK ADDED === */}
            <a href="https://leetcode.com/u/Mohd_Swahil/" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-[#00ADB5] transition-all">
              <SiLeetcode size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.div variants={shouldReduceMotion ? {} : chevronVariants} transition={{...(chevronVariants.animate?.transition || {}), delay: 0}}>
              <FiChevronDown className="text-xl sm:text-2xl text-gray-500" />
          </motion.div>
          <motion.div variants={shouldReduceMotion ? {} : chevronVariants} transition={{...(chevronVariants.animate?.transition || {}), delay: 0.2}} className="-mt-2 hidden md:block">
              <FiChevronDown className="text-2xl text-gray-500" />
          </motion.div>
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;