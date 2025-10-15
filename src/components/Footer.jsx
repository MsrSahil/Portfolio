import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiLeetcode, SiTailwindcss, SiFramer } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, link: "https://github.com/MsrSahil", name: "GitHub" },
    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/swahil-mohd-5543a5259/", name: "LinkedIn" },
    { icon: <SiLeetcode size={20} />, link: "https://leetcode.com/u/Mohd_Swahil/", name: "LeetCode" }
  ];

  const techStack = [
    { icon: <FaReact size={18} />, name: "React" },
    { icon: <SiTailwindcss size={18} />, name: "Tailwind CSS" },
    { icon: <SiFramer size={18} />, name: "Framer Motion" }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#1B2025] text-gray-300 pt-12 pb-6 px-6 border-t border-[#00ADB5]/20">
      <div className="max-w-7xl mx-auto">
        {/* Accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00ADB5]/50 to-transparent mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <a href="#home" className="text-2xl font-extrabold tracking-tight text-[#EAF1FA] hover:text-white transition-colors">MSR</a>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#00ADB5]/15 text-[#77d8dd] border border-[#00ADB5]/30 inline-flex items-center gap-1">
                <span className="relative inline-flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Open to roles
              </span>
            </div>
            <p className="text-sm text-[#B7C2D0] leading-relaxed max-w-xs">
              Full‑stack developer crafting reliable, accessible experiences with modern web tech.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#A4AEBC]">
              <span className="opacity-80">Built with</span>
              {techStack.map((t, i) => (
                <span key={i} title={t.name} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#232a32] border border-white/10 text-[#DDE3EE]">
                  {t.icon}
                  <span className="sr-only">{t.name}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            aria-label="Footer navigation"
            className="sm:justify-self-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-[#EAF1FA] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#B7C2D0] hover:text-[#00ADB5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] rounded px-1">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-[#EAF1FA] mb-3">Contact</h3>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#232a32] border border-white/10 text-[#00ADB5]"><FiMapPin /></div>
                <div>Bhopal, MP, India</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#232a32] border border-white/10 text-[#00ADB5]"><FiPhone /></div>
                <a href="tel:+919532696691" className="hover:text-[#00ADB5] transition-colors">+91 9532696691</a>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#232a32] border border-white/10 text-[#00ADB5]"><FiMail /></div>
                <a href="mailto:mohammadswahil021@gmail.com" className="hover:text-[#00ADB5] transition-colors break-all">mohammadswahil021@gmail.com</a>
              </div>
            </address>
          </motion.div>

          {/* Social */}
          <motion.div
            className="sm:justify-self-end"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-[#EAF1FA] mb-3">Follow</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-lg bg-[#232a32] border border-white/10 text-[#EAF1FA] hover:text-[#00ADB5] hover:border-[#00ADB5]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5]"
                  whileHover={{ y: -3 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center">
          <p className="text-xs text-[#9AA3B2]">&copy; {year} Mohd Swahil Rahmani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  