import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Icons updated
import { FaReact, FaNodeJs, FaJava, FaFigma, FaGithub, FaBootstrap, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiCplusplus } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import CircularProgress from "../components/CircularProgress";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkillName, setHoveredSkillName] = useState(null);

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
  };

  // === SKILLS ARRAY UPDATED ===
  const skills = [
    { name: "React", icon: <FaReact size={40} className="text-cyan-400"/>, color: "text-cyan-400", category: "Frontend", value: 95 },
    { name: "JavaScript", icon: <DiJavascript size={40} className="text-yellow-400"/>, color: "text-yellow-400", category: "Language", value: 95 },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500"/>, color: "text-green-500", category: "Backend", value: 90 },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600"/>, color: "text-green-600", category: "Database", value: 98 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400"/>, color: "text-sky-400", category: "Frontend", value: 95 },
    { name: "Java", icon: <FaJava size={40} className="text-red-400"/>, color: "text-red-400", category: "Language", value: 90 },
    { name: "Python", icon: <FaPython size={40} className="text-yellow-500"/>, color: "text-yellow-500", category: "Language", value: 85 },
    { name: "C++", icon: <SiCplusplus size={40} className="text-blue-600"/>, color: "text-blue-600", category: "Language", value: 80 },
    { name: "Express", icon: <SiExpress size={40} className="text-gray-400"/>, color: "text-gray-400", category: "Backend", value: 90 },
    { name: "HTML5", icon: <DiHtml5 size={40} className="text-orange-500"/>, color: "text-orange-500", category: "Frontend", value: 98 },
    { name: "CSS3", icon: <DiCss3 size={40} className="text-blue-500"/>, color: "text-blue-500", category: "Frontend", value: 90 },
    { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-400"/>, color: "text-purple-400", category: "Frontend", value: 90 },
    { name: "Git & GitHub", icon: <FaGithub size={40} className="text-gray-300"/>, color: "text-gray-300", category: "Tools", value: 85 },
    { name: "Vite", icon: <SiVite size={40} className="text-purple-500"/>, color: "text-purple-500", category: "Tools", value: 80 },
    { name: "Figma", icon: <FaFigma size={40} className="text-pink-400"/>, color: "text-pink-400", category: "Design", value: 70 },
  ];
  
  // Categories array updated
  const categories = ["All", "Frontend", "Backend", "Language", "Database", "Tools", "Design"];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full min-h-screen py-20 px-6 bg-[#2C313A] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6"/>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        selectedCategory === category 
                            ? 'bg-[#00ADB5] text-[#222831] shadow-lg shadow-[#00ADB5]/30' 
                            : 'bg-[#393E46]/80 text-[#EEEEEE] hover:bg-[#00ADB5]/50'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8, scale: 1.05 }}
                onMouseEnter={() => setHoveredSkillName(skill.name)}
                onMouseLeave={() => setHoveredSkillName(null)}
                className="bg-[#393E46]/60 backdrop-blur-sm rounded-2xl border border-[#00ADB5]/30 
                           shadow-lg hover:shadow-xl hover:shadow-[#00ADB5]/20 transition-all duration-300 
                           p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
              >
                <CircularProgress 
                    value={skill.value} 
                    color={skill.color} 
                    icon={skill.icon} 
                    isHovered={hoveredSkillName === skill.name} 
                />
                <h3 className="text-white font-bold text-lg mt-2">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;