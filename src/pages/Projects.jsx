import React, { useEffect, useMemo, useRef, useState } from "react";
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
import EventPlannerImg from "../assets/Event-Planner.png";
import CalculatorImg from "../assets/Calculator.png";
import vipmsr from "../assets/vipmsr.png";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent"); // recent | a-z
  const closeBtnRef = useRef(null);

  const projects = [
    {
      title: "ChatCoder",
      description: "A real-time collaborative coding platform built with the MERN stack and WebSockets, for developers to write, share, and debug code together seamlessly.",
      tech: ["MERN", "Socket.io", "JWT Auth", "Code Execution API", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/ChatCoder",
      live: "https://elegant-torte-03fc73.netlify.app/",
      image: ChatCoder,
      featured: true,
      year: 2025,
      highlights: ["Real-time code sync", "Auth & sessions", "Multi-room support"],
    },
    {
      title: "AJ-Solutions",
      description: "A comprehensive tech solutions company website featuring service listings, a client portal with secure authentication, and an integrated contact form.",
      tech: ["MERN Stack", "NodeMailer", "JWT Auth", "Cloudinary"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/viprepo",
      live: "https://viprepofrontend.netlify.app/",
      image: vipmsr,
      featured: true,
      year: 2024,
      highlights: ["Client portal", "Email integration", "Responsive UI"],
    },
    {
      title: "Event Planner App",
      description: "A full-stack event management application that allows users to create, manage, and schedule events with secure user authentication.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/MsrSahil/event-planner",
      live: "#",
      image: EventPlannerImg,
      featured: false,
      year: 2024,
      highlights: ["CRUD events", "Auth", "Schedules"],
    },
    {
      title: "Fruitables Clone",
      description: "A responsive and visually appealing e-commerce front-end for a fruit and vegetable store, built with a focus on clean design.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Fruitable-Clone",
      live: "https://msrsahil.github.io/Fruitable-Clone/",
      image: Fruitables,
      featured: false,
      year: 2023,
      highlights: ["Product grid", "Responsive", "Clean UI"],
    },
    {
      title: "Portfolio Website",
      description: "An interactive personal portfolio built to showcase my skills, projects, and professional journey.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Portfolio",
      live: "https://msr-portfolio021.vercel.app/",
      image: PortfolioImg,
      featured: false,
      year: 2025,
      highlights: ["Animated UI", "Responsive", "Themed"],
    },
    {
      title: "Calculator",
      description: "An interactive and stylish calculator with arithmetic operations and a theme toggle for light and dark modes.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/MsrSahil/Calculator",
      live: "https://msrsahil.github.io/Calculator/",
      image: CalculatorImg,
      featured: false,
      year: 2022,
      highlights: ["Theme toggle", "Keyboard support"],
    },
  ];

  // Derived data
  const featuredProjects = useMemo(() => projects.filter(p => p.featured), [projects]);
  const searchFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const tabFiltered = projects.filter(p => activeTab === 'all' || p.category === activeTab);
    if (!q) return tabFiltered;
    return tabFiltered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.some(t => t.toLowerCase().includes(q))
    );
  }, [projects, activeTab, query]);

  const filteredProjects = useMemo(() => {
    const arr = [...searchFiltered];
    if (sortBy === 'a-z') {
      arr.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // recent
      arr.sort((a, b) => (b.year || 0) - (a.year || 0));
    }
    return arr;
  }, [searchFiltered, sortBy]);

  // Featured to show should respect current query and sort when on 'all'
  const featuredToShow = useMemo(() => {
    let arr = projects.filter(p => p.featured && (activeTab === 'all' || p.category === activeTab));
    const q = query.trim().toLowerCase();
    if (q) {
      arr = arr.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }
    if (sortBy === 'a-z') {
      arr.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      arr.sort((a, b) => (b.year || 0) - (a.year || 0));
    }
    return arr;
  }, [projects, activeTab, query, sortBy]);

  // Other projects exclude featured and follow current filtered + sort
  const otherProjects = useMemo(() => filteredProjects.filter(p => !p.featured), [filteredProjects]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    if (selectedProject && closeBtnRef.current) {
      // Focus the close button for accessibility
      closeBtnRef.current.focus();
    }
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
        <div className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">{project.year}</div>
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <div className="px-3 py-1 rounded-full bg-black/60 text-white text-xs border border-white/10">View details</div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#EEEEEE] mb-3 group-hover:text-[#00ADB5] transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3 flex-grow">{project.description}</p>
        {project.highlights && (
          <ul className="text-xs text-gray-300 mb-4 list-disc list-inside space-y-1">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-[#393E46] rounded-full text-xs text-gray-300">{tech}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-gray-200 hover:border-[#00ADB5]/50 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub`}
          >
            <FiGithub /> Code
          </a>
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00ADB5] text-[#222831] font-semibold hover:bg-cyan-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} Live Demo`}
            >
              <FiExternalLink /> Live
            </a>
          )}
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
        {/* Controls: Search + Filters + Sort */}
        <div className="max-w-5xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <input
              id="project-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by title, tech, or description..."
              className="w-full rounded-xl bg-[#1f242b] border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] text-[#E5EBF6] placeholder:text-[#9AA3B2] px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="project-sort" className="sr-only">Sort projects</label>
            <select
              id="project-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-xl bg-[#1f242b] border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] text-[#E5EBF6] px-4 py-3"
            >
              <option value="recent">Sort: Recent</option>
              <option value="a-z">Sort: A–Z</option>
            </select>
          </div>
        </div>
        <div
          role="tablist"
          aria-label="Project filters"
          className="flex flex-wrap justify-center gap-4 mb-6"
          onKeyDown={(e) => {
            const tabs = ["all", "fullstack", "frontend"]; // same order as render
            const idx = tabs.indexOf(activeTab);
            if (e.key === "ArrowRight") setActiveTab(tabs[(idx + 1) % tabs.length]);
            if (e.key === "ArrowLeft") setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length]);
          }}
        >
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={0}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full capitalize font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] ${
                activeTab === tab ? "bg-[#00ADB5] text-[#222831] shadow-lg shadow-[#00ADB5]/30" : "bg-[#393E46]/80 text-[#EEEEEE] hover:bg-[#00ADB5]/50"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center text-sm text-[#9AA3B2] mb-10">Showing {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}</div>

        {/* === NEW LOGIC: SHOW SPECIAL LAYOUT ONLY FOR 'ALL' TAB === */}
        {activeTab === 'all' ? (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <AnimatePresence>{featuredToShow.map((p, i) => renderProjectCard(p, i, true))}</AnimatePresence>
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
                    <SwiperSlide key={p.title + "-slide"} className="h-auto">{renderProjectCard(p, i)}</SwiperSlide>
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-desc"
              className="bg-[#2C313A] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#00ADB5]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <button ref={closeBtnRef} onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-[#00ADB5] transition-colors"><FiX size={20} /></button>
              </div>
              <div className="p-8">
                <h2 id="project-modal-title" className="text-3xl font-bold text-[#EEEEEE] mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#393E46] rounded-full text-sm text-[#00ADB5]">{tech}</span>
                  ))}
                </div>
                <p id="project-modal-desc" className="text-gray-300 mb-6">{selectedProject.description}</p>
                {selectedProject.highlights && (
                  <ul className="text-sm text-gray-200 list-disc list-inside mb-6 space-y-1">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
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