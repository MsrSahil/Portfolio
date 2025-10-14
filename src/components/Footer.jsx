import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiLeetcode, SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={22} />, link: "https://github.com/MsrSahil", name: "GitHub" },
    { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/swahil-mohd-5543a5259/", name: "LinkedIn" },
  { icon: <SiLeetcode size={22} />, link: "https://leetcode.com/u/Mohd_Swahil/", name: "LeetCode" }
  ];

  const techStack = [
    { icon: <FaReact size={20} />, name: "React" },
    { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    { icon: <SiFramer size={20} />, name: "Framer Motion" }
  ];

  return (
    <footer className="bg-[#1B2025] text-gray-400 py-6 px-6 border-t border-[#00ADB5]/20">
      <div className="max-w-7xl mx-auto">
        {/* === NEW INTEGRATED LAYOUT === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold bg-gradient-to-r from-white to-[#00ADB5] bg-clip-text text-transparent font-heading">
              Mohd Swahil Rahmani
            </p>
            <p className="text-xs text-gray-500 mt-1">
              &copy; {year} All rights reserved.
            </p>
          </div>
          
          {/* Right Side: Socials & Tech Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#00ADB5] transition-colors"
                  title={social.name}
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>

            <div className="flex items-center space-x-3 text-gray-500">
                <span className="text-xs">Built with</span>
                {techStack.map((tech, index) => (
                    <div 
                        key={index} 
                        className="flex items-center text-gray-400"
                        title={tech.name}
                    >
                        {tech.icon}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  