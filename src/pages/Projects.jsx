import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

// Aapke saare project images yahan imported hain
import TwoSoulsImg from "../assets/Twosouls.png";
import MediVaultImg from "../assets/MedVault.png";
import StoreBooksImg from "../assets/BooksStore.png";
import FurniImg from "../assets/Furni.png";
import PortfolioImg from "../assets/PortFolio.png";
import WeatherAppImg from "../assets/Weather.png";
import FoodMartImg from "../assets/Foodmart.png";
import TodoImg from "../assets/To-DoList.png";
import CurrencyImg from "../assets/Currency.png";
import JokeImg from "../assets/Joke.png";
import CalculatorImg from "../assets/Calculator.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ChatCoder",
      description:
        "ChatCoder is a real-time collaborative coding platform built with MERN stack and WebSockets, designed for developers to write, share, and debug code together seamlessly. It features live chat, syntax highlighting, instant code execution, and version tracking, making it easier for teams, students, and mentors to collaborate on projects remotely.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT Auth",
        "Socket.io",
        "Code Execution API",
        "Tailwind CSS",
      ],
      category: "fullstack",
      github: "https://github.com/Arunrai0752/Events-Planner",
      live: "#",
      image: TwoSoulsImg,
    },

    {
      title: "Furni",
      description:
        "E-commerce solution for furniture with cart functionality and payment integration",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Furni",
      live: "#",
      image: FurniImg,
    },
    {
      title: "Portfolio Website",
      description:
        "Interactive personal portfolio showcasing skills, projects and contact information",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Portfolio",
      live: "#",
      image: PortfolioImg,
    },
    {
      title: "WeatherApp",
      description:
        "Real-time weather application with 5-day forecast using OpenWeather API",
      tech: ["HTML", "CSS", "API Integration"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/WeatherApp",
      live: "#",
      image: WeatherAppImg,
    },
    {
      title: "FoodMart Clone",
      description:
        "Food delivery app clone with restaurant listings and menu browsing",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/FoodMart",
      live: "#",
      image: FoodMartImg,
    },
    {
      title: "Todo List",
      description:
        "Task management application with CRUD operations and local storage",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/To_Do_List-",
      live: "#",
      image: TodoImg,
    },
    {
      title: "Currency Converter",
      description: "Real-time currency conversion tool using exchange rate API",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Currency_Converter_ArunXrai",
      live: "#",
      image: CurrencyImg,
    },

    {
      title: "Calculator",
      description: "Interactive calculator with basic arithmetic operations",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/CalculaterArunXRai",
      live: "#",
      image: CalculatorImg,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const renderProjectCard = (project, index) => (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px -15px rgba(0, 173, 181, 0.3)",
      }}
      className="bg-[#2C313A]/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl cursor-pointer 
                 border border-[#00ADB5]/30 group h-full flex flex-col"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#EEEEEE] mb-2 group-hover:text-[#00ADB5] transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[#393E46] rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      // === GRADIENT DIRECTION CHANGED (br -> tl) & BORDER COLOR THEMED ===
      className="relative py-20 px-6 
      bg-gradient-to-tl from-[#1B2025] via-[#222831] to-[#2C313A] 
      border-t border-[#00ADB5]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE]">
            My Projects
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my creative work and technical expertise.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full capitalize font-semibold transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[#00ADB5] text-[#222831] shadow-lg shadow-[#00ADB5]/30"
                    : "bg-[#393E46]/80 text-[#EEEEEE] hover:bg-[#00ADB5]/50"
                }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {activeTab === "all" ? (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                {renderProjectCard(project, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) =>
                renderProjectCard(project, index)
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-[#2C313A] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#00ADB5]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-[#00ADB5] transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#EEEEEE] mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#393E46] rounded-full text-sm text-[#00ADB5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#393E46] text-[#EEEEEE] rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FiGithub /> View Code
                  </a>
                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#00ADB5] text-[#222831] rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
