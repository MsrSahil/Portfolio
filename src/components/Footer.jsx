import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2025] text-gray-400 py-8 px-6 border-t border-[#00ADB5]/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/MsrSahil" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/swahil-mohd-5543a5259/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {year} Mohd Swahil Rahmani. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;