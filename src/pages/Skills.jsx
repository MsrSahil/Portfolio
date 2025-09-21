// Pehle framer-motion se AnimatePresence ko import karein
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  FaReact, FaNodeJs, FaJava, FaBootstrap, FaFigma, FaGitAlt, FaGithub
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVite } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    // === EXIT ANIMATION ADDED ===
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const skills = [
    { name: "Java", icon: FaJava, color: "from-red-400 to-red-600", category: "Backend", level: "Intermediate" },
    { name: "HTML5", icon: DiHtml5, color: "from-orange-400 to-orange-600", category: "Frontend", level: "Expert" },
    { name: "CSS3", icon: DiCss3, color: "from-blue-400 to-blue-600", category: "Frontend", level: "Expert" },
    { name: "JavaScript", icon: DiJavascript, color: "from-yellow-400 to-yellow-600", category: "Language", level: "Expert" },
    { name: "Bootstrap", icon: FaBootstrap, color: "from-purple-400 to-purple-600", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-teal-500", category: "Frontend", level: "Expert" },
    { name: "React", icon: FaReact, color: "from-blue-400 to-cyan-500", category: "Frontend", level: "Expert" },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-400 to-green-600", category: "Backend", level: "Advanced" },
    { name: "Express", icon: SiExpress, color: "from-gray-400 to-gray-600", category: "Backend", level: "Advanced" },
    { name: "MongoDB", icon: SiMongodb, color: "from-green-500 to-green-700", category: "Database", level: "Advanced" },
    { name: "Git", icon: FaGitAlt, color: "from-orange-500 to-red-500", category: "Tools", level: "Intermediate" },
    { name: "GitHub", icon: FaGithub, color: "from-gray-300 to-gray-500", category: "Tools", level: "Intermediate" },
    { name: "Postman", icon: SiPostman, color: "from-orange-400 to-orange-600", category: "Tools", level: "Intermediate" },
    { name: "Figma", icon: FaFigma, color: "from-pink-400 to-rose-500", category: "Design", level: "Intermediate" },
    { name: "Vite", icon: SiVite, color: "from-yellow-400 to-amber-500", category: "Tools", level: "Advanced" },
  ];
  
  const categories = ["All", ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "text-emerald-400";
      case "Advanced": return "text-[#00ADB5]";
      case "Intermediate": return "text-amber-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-6 
      bg-[#222831] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-20 left-10 w-96 h-96 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse"/>
         <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#EEEEEE]/5 rounded-full blur-3xl animate-pulse animation-delay-3000"/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE]">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6"/>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                        ${selectedCategory === category 
                            ? 'bg-[#00ADB5] text-[#222831] shadow-lg shadow-[#00ADB5]/30' 
                            : 'bg-[#393E46]/80 text-[#EEEEEE] hover:bg-[#00ADB5]/50'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {/* === ANIMATE PRESENCE WRAPPER ADDED === */}
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name} // Stable key
                  layout // <-- Add this prop for smooth repositioning
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit" // <-- Tell it to use the exit variant
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative p-6 bg-[#393E46]/80 backdrop-blur-sm rounded-2xl border border-[#00ADB5]/30 
                                  shadow-lg hover:shadow-[#00ADB5]/40 transition-all duration-300 h-full
                                  flex flex-col items-center text-center justify-center space-y-4">
                    
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} shadow-md`}>
                      <IconComponent className="text-4xl text-white drop-shadow-lg" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-[#00ADB5] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-[#222831]/50 ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;