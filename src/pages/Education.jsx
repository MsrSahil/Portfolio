import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiMapPin, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const journeyData = [
  {
    type: "work",
    role: "MERN Stack Developer",
    organization: "BodhiWaves Venture Studio",
    location: "Remote",
    score: "Full-Time",
    year: "Oct 2025 – May 2026",
    description:
      "Developed and maintained production websites (bodhiwaves.com, bodhiwaves.media). Built reusable React.js components, integrated backend APIs, and optimized responsive UI across devices.",
    highlights: ["Production website delivery", "React component library", "API integration"],
  },
  {
    type: "work",
    role: "Web Development Intern",
    organization: "VIP Digital Hub IT & Software Solutions",
    location: "Remote",
    score: "Internship",
    year: "Aug 2025 – Oct 2025",
    description:
      "Built responsive interfaces, integrated third-party services, and assisted with Node.js/Express.js backend work. Gained hands-on experience with full-stack development in a production environment.",
    highlights: ["Responsive UI development", "REST API integration", "Node.js backend support"],
  },
  {
    type: "education",
    role: "B.Tech, Computer Science & IT",
    organization: "Sagar Institute of Research & Technology",
    location: "Bhopal, Madhya Pradesh",
    score: "6.4 CGPA",
    year: "2022 – 2026",
    description:
      "Graduated with a focus on Data Structures, Algorithms, DBMS, Object-Oriented Programming, and full-stack web development. Built multiple production-grade projects during this period.",
    highlights: ["DSA & OOPs", "DBMS & System Design", "Multiple project builds"],
  },
  {
    type: "education",
    role: "Class 12th (Senior Secondary)",
    organization: "BKD-Aldrich Public School",
    location: "Orai, Uttar Pradesh",
    score: "75.2%",
    year: "2020 – 2021",
    description: "Completed senior secondary education with a focus on Science & Mathematics.",
    highlights: [],
  },
  {
    type: "education",
    role: "Class 10th (High School)",
    organization: "Sacred Heart Centenary Academy",
    location: "Orai, Uttar Pradesh",
    score: "85.2%",
    year: "2018 – 2019",
    description: "Completed high school education with distinction.",
    highlights: [],
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contentContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="education"
      className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-tr from-[#1B2025] via-[#222831] to-[#2C313A] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute top-8 left-8 w-40 h-40 sm:w-72 sm:h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 right-8 w-64 h-64 sm:w-96 sm:h-96 bg-[#EEEEEE]/5 rounded-full blur-3xl animate-pulse animation-delay-3000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">
            My Journey
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Work experience and academic milestones that shaped me.
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00ADB5] inline-block" />
              Work Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400 inline-block" />
              Education
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Animated progress line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-[#393E46] origin-top pointer-events-none"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {journeyData.map((entry, index) => {
              const isWork = entry.type === "work";
              const accentColor = isWork ? "#00ADB5" : "#a78bfa";
              const badgeBg = isWork ? "bg-[#00ADB5]/20 text-[#00ADB5]" : "bg-purple-400/20 text-purple-300";
              const borderColor = isWork ? "border-[#00ADB5]/30" : "border-purple-400/30";
              const dotBorder = isWork ? "border-[#00ADB5]" : "border-purple-400";

              return (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? itemLeft : itemRight}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#2C313A] border-4 ${dotBorder} rounded-full z-10 flex items-center justify-center`}
                  >
                    {isWork ? (
                      <FiBriefcase className="text-xl" style={{ color: accentColor }} />
                    ) : (
                      <FaGraduationCap className="text-xl" style={{ color: accentColor }} />
                    )}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02, boxShadow: `0px 15px 30px ${accentColor}33` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative w-full md:w-[calc(50%-3rem)] ml-12 md:ml-0 bg-[#393E46]/80 backdrop-blur-sm rounded-2xl border ${borderColor} shadow-lg
                      ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    {/* Arrow pointer */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-0 w-0 border-y-8 border-y-transparent
                        left-0 -ml-4 border-r-[8px] border-r-[#393E46]
                        ${index % 2 === 0
                          ? "md:right-0 md:left-auto md:-mr-4 md:-ml-0 md:border-l-[8px] md:border-l-[#393E46] md:border-r-0"
                          : "md:left-0 md:-ml-4 md:border-r-[8px] md:border-r-[#393E46]"
                        }`}
                    />

                    <motion.div
                      className="p-6"
                      variants={contentContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {/* Top row: year + badge */}
                      <motion.div
                        variants={contentItemVariants}
                        className="flex items-center justify-between mb-3 flex-wrap gap-2"
                      >
                        <span className="text-sm font-semibold text-[#EEEEEE] bg-white/10 px-3 py-1 rounded-full">
                          {entry.year}
                        </span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeBg}`}>
                          {entry.score}
                        </span>
                      </motion.div>

                      {/* Role / Degree */}
                      <motion.h3
                        variants={contentItemVariants}
                        className="text-xl font-bold text-[#EEEEEE] mb-1"
                      >
                        {entry.role}
                      </motion.h3>

                      {/* Organization + location */}
                      <motion.div
                        variants={contentItemVariants}
                        className="flex items-start space-x-2 text-gray-400 mb-3"
                      >
                        <FiMapPin className="mt-1 flex-shrink-0" />
                        <p className="text-sm">
                          {entry.organization}, {entry.location}
                        </p>
                      </motion.div>

                      {/* Description */}
                      {entry.description && (
                        <motion.p
                          variants={contentItemVariants}
                          className="text-sm text-gray-300 leading-relaxed mb-3"
                        >
                          {entry.description}
                        </motion.p>
                      )}

                      {/* Highlights */}
                      {entry.highlights && entry.highlights.length > 0 && (
                        <motion.div variants={contentItemVariants} className="flex flex-wrap gap-2">
                          {entry.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                              {h}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;