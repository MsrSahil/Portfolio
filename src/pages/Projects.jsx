import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiStar } from "react-icons/fi";

// Project images
import PortfolioImg from "../assets/PortFolio.png";
import Fruitables from "../assets/Fruitables.png";
import ChatCoder from "../assets/ChatCoder.png";
import AjSolutions from "../assets/Aj-Solutions.png";
import EventPlannerImg from "../assets/Event-Planner.png";
import CalculatorImg from "../assets/Calculator.png";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ChatCoder",
      description: "A real-time collaborative coding platform built with the MERN stack and WebSockets, for developers to write, share, and debug code together seamlessly.",
      tech: ["MERN", "Socket.io", "JWT Auth", "Code Execution API", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/ChatCoder",
      live: "https://elegant-torte-03fc73.netlify.app/",
      image: ChatCoder,
    },
    {
      title: "AJ-Solutions",
      description: "A comprehensive tech solutions company website featuring service listings, a client portal with secure authentication, and an integrated contact form.",
      tech: ["MERN Stack", "NodeMailer", "JWT Auth", "Cloudinary"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/viprepo",
      live: "https://viprepofrontend.netlify.app/",
      image: AjSolutions,
    },
    {
      title: "Event Planner App",
      description: "A full-stack event management application that allows users to create, manage, and schedule events with secure user authentication.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/event-planner",
      live: "#",
      image: EventPlannerImg,
    },
    {
      title: "Fruitables Clone",
      description: "A responsive and visually appealing e-commerce front-end for a fruit and vegetable store, built with a focus on clean design.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Fruitable-Clone",
      live: "https://msrsahil.github.io/Fruitable-Clone/",
      image: Fruitables,
    },
    {
      title: "Portfolio Website",
      description: "An interactive personal portfolio built to showcase my skills, projects, and professional journey.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Portfolio",
      live: "https://portfolio-ivory-theta-30.vercel.app/",
      image: PortfolioImg,
    },
    {
      title: "Calculator",
      description: "An interactive and stylish calculator with arithmetic operations and a theme toggle for light and dark modes.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Calculator",
      live: "https://msrsahil.github.io/Calculator/",
      image: CalculatorImg,
    },
  ];

  // Logic is now simpler
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);
  const filteredProjects = projects.filter(p => activeTab === 'all' || p.category === activeTab);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const renderProjectCard = (project, index, isFeatured = false) => (
    <motion.div
      key={project.title + index} // Use a more unique key
      layout
      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(0, 173, 181, 0.3)" }}
      onClick={() => setSelectedProject(project)}
      className="bg-[#2C313A]/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl cursor-pointer 
                 border border-[#00ADB5]/30 group h-full flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-[#00ADB5] text-[#222831] px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1">
            <FiStar className="text-sm"/> Featured
          </div>
        )}
        {/* === VIEW DETAILS BUTTON REMOVED === */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <FiExternalLink className="text-white text-3xl"/>
            </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#EEEEEE] mb-3 group-hover:text-[#00ADB5] transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-[#393E46] rounded-full text-xs text-gray-300">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="relative py-20 px-6 bg-gradient-to-tl from-[#1B2025] via-[#222831] to-[#2C313A] border-t border-[#00ADB5]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">My Projects</h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button key={tab} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full capitalize font-semibold transition-all duration-300 ${
                activeTab === tab ? "bg-[#00ADB5] text-[#222831] shadow-lg shadow-[#00ADB5]/30" : "bg-[#393E46]/80 text-[#EEEEEE] hover:bg-[#00ADB5]/50"
              }`}
            >{tab}</motion.button>
          ))}
        </div>

        {/* === NEW LOGIC: SHOW SPECIAL LAYOUT ONLY FOR 'ALL' TAB === */}
        {activeTab === 'all' ? (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <AnimatePresence>{featuredProjects.map((p, i) => renderProjectCard(p, i, true))}</AnimatePresence>
            </motion.div>
            
            {otherProjects.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-center text-white mb-8 font-heading">More Projects</h2>
                <Swiper
                  modules={[Navigation, Autoplay]} navigation spaceBetween={30} slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} loop={true}
                  breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-16"
                >
                  {otherProjects.map((p, i) => (
                    <SwiperSlide key={i} className="h-auto">{renderProjectCard(p, i)}</SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>{filteredProjects.map((p, i) => renderProjectCard(p, i))}</AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-[#2C313A] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#00ADB5]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-[#00ADB5] transition-colors"><FiX size={20} /></button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#EEEEEE] mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#393E46] rounded-full text-sm text-[#00ADB5]">{tech}</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#393E46] text-[#EEEEEE] rounded-lg hover:bg-gray-700 transition-colors"><FiGithub /> View Code</a>
                  {selectedProject.live !== "#" && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#00ADB5] text-[#222831] rounded-lg font-semibold hover:bg-cyan-400 transition-colors"><FiExternalLink /> Live Demo</a>
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