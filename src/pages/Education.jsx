import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Computer Science",
      institution: "Sagar Institute of Research & Technology",
      location: "Bhopal, Madhya Pradesh",
      score: "CGPA: 6.1 (Till 4th Sem)",
      year: "2022 - 2026",
    },
    {
      degree: "Class 12th (Senior Secondary)",
      institution: "BKD-Aldrich Public School",
      location: "Orai, Uttar Pradesh",
      score: "Percentage: 75.2%",
      year: "2020 - 2021",
    },
    {
      degree: "Class 10th (High School)",
      institution: "Sacred Heart Centenary Academy",
      location: "Orai, Uttar Pradesh",
      score: "Percentage: 85.2%",
      year: "2018 - 2019",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const itemRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="relative w-full min-h-screen py-20 px-6 bg-[#222831] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE]">
            My Education
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My academic journey and qualifications.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-[#393E46] transform -translate-x-1/2"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? item : itemRight}
                className="relative flex items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#222831] border-4 border-[#00ADB5] rounded-full z-10"></div>

                {/* Timeline Card */}
                <div
                  className={`w-[calc(50%-2rem)] p-6 bg-[#393E46]/80 backdrop-blur-sm rounded-2xl border border-[#00ADB5]/30 shadow-lg
                    ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#EEEEEE] bg-[#00ADB5]/20 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <span className="text-lg font-bold text-[#00ADB5]">
                      {edu.score}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#EEEEEE] mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-start space-x-2 text-gray-400">
                    <FiMapPin className="mt-1 flex-shrink-0" />
                    <p className="text-sm">{edu.institution}, {edu.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;