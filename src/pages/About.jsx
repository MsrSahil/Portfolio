import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCrosshairs, FaCompass, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
      className="relative flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-[#222831] via-[#2C313A] to-[#1B2025] px-6 pt-24 md:pt-0 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEEE]">About</h2>
          <motion.div className="w-20 h-1 bg-[#00ADB5] rounded-full mx-auto mt-4" initial={{ width: 0 }} whileInView={{ width: 80 }} transition={{ duration: 0.6 }} />
        </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Profile card */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 bg-[#393E46]/60 backdrop-blur p-6 rounded-3xl border border-[#00ADB5]/20 h-full flex flex-col justify-between"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#00ADB5] to-transparent mb-4 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#222831] flex items-center justify-center text-3xl font-bold text-white">MS</div>
              </div>
              <h3 className="text-2xl font-semibold text-white">Sahil Mr</h3>
              <p className="text-sm text-gray-300 mb-4">Full Stack Developer (MERN)</p>

              <div className="flex gap-3 mb-4">
                <a
                  href="/resume.pdf"
                  download
                  aria-label="Download resume"
                  className="inline-flex items-center justify-center gap-2 bg-[#00ADB5] text-black px-4 py-2 rounded-md font-medium hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/40"
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  aria-label="Contact"
                  className="inline-flex items-center justify-center gap-2 border border-[#00ADB5]/30 text-[#00ADB5] px-4 py-2 rounded-md hover:bg-[#00ADB5]/8 transition focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/30"
                >
                  Contact
                </a>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <a href="https://github.com/MsrSahil" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white" aria-label="GitHub"><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                <a href="#contact" className="text-gray-300 hover:text-white" aria-label="Email"><FaEnvelope size={20} /></a>
              </div>

              <div className="w-full mt-2">
                <h4 className="text-sm text-white font-medium mb-2">Core</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>React · JavaScript · HTML & CSS</li>
                  <li>Node.js · Express · MongoDB</li>
                  <li>Tailwind CSS · Git · Vite</li>
                  <li>Java · DSA · OOPs</li>
                </ul>
              </div>
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-2 space-y-6"
          >
            <div className="bg-[#393E46]/60 backdrop-blur p-6 rounded-3xl border border-[#00ADB5]/20">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><FaRocket className="text-[#00ADB5]" /> Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I design and build user-focused web applications using modern JavaScript frameworks and Node.js backends. I prioritize readable, testable code and fast user experiences. I'm actively building projects that apply best practices in accessibility and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#393E46]/60 backdrop-blur p-6 rounded-3xl border border-[#00ADB5]/20 h-full flex flex-col justify-between">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><FaCrosshairs className="text-[#00ADB5]" /> Competencies</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>UI/UX design principles and best practices</li>
                  <li>Java programming and DSA</li>
                  <li>Component-driven UI with React and state management</li>
                  <li>RESTful APIs with Node.js and Express</li>
                  <li>Database work with MongoDB and schema design</li>
                  <li>Responsive design and utility-first styling (Tailwind)</li>
                </ul>
              </div>

              <div className="bg-[#393E46]/60 backdrop-blur p-6 rounded-3xl border border-[#00ADB5]/20 h-full flex flex-col justify-between">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><FaCompass className="text-[#00ADB5]" /> Selected Projects</h4>
                <div className="text-gray-300 text-sm space-y-3">
                  <div><strong>Pre Order Dining App</strong> — A restaurant pre-ordering app allowing customers to select dishes ahead of time, manage reservations and speed up service.</div>
                  <div><strong>Chat Coder</strong> — A collaborative coding chat tool with code snippets sharing and syntax highlighting for pair-programming sessions.</div>
                  <div><strong>Event Planner</strong> — An event management platform to create events, invite attendees and manage schedules and RSVPs.</div>
                </div>
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;