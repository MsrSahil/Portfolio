import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

// ─── Skill badge chip ─────────────────────────────────────────────────────────
const Badge = ({ label, icon }) => (
  <motion.span
    whileHover={{ y: -2, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[#EEEEEE] text-xs font-medium cursor-default hover:border-[#00ADB5]/50 hover:bg-[#00ADB5]/10 transition-all duration-200 whitespace-nowrap"
  >
    {icon && <span className="text-[#00ADB5] text-sm shrink-0">{icon}</span>}
    {label}
  </motion.span>
);

// ─── Bento data ────────────────────────────────────────────────────────────────
// NOTE: icon values are React elements — must be at module scope in a .jsx file.
const bentoItems = [
  {
    id: "frontend",
    tag: "// FRONTEND",
    title: "Frontend Engineering",
    desc: "UI frameworks, styling systems, and responsive design",
    colSpan: "col-span-2 md:col-span-3",
    accentColor: "text-cyan-400",
    glowColor: "bg-cyan-400/10",
    borderHover: "hover:border-cyan-400/40",
    featured: true,
    skills: [
      { label: "React.js",          icon: <FaReact /> },
      { label: "Next.js",           icon: <SiNextdotjs /> },
      { label: "JavaScript ES6+",   icon: <DiJavascript /> },
      { label: "Tailwind CSS",      icon: <SiTailwindcss /> },
      { label: "HTML5",             icon: <DiHtml5 /> },
      { label: "CSS3",              icon: <DiCss3 /> },
      { label: "Responsive Design", icon: null },
    ],
  },
  {
    id: "database",
    tag: "// DATABASE",
    title: "Data Storage",
    desc: "Datastores, ODMs, and persistence",
    colSpan: "col-span-2 md:col-span-1",
    accentColor: "text-green-400",
    glowColor: "bg-green-400/10",
    borderHover: "hover:border-green-400/40",
    featured: false,
    skills: [
      { label: "MongoDB",  icon: <SiMongodb /> },
      { label: "Mongoose", icon: <SiMongodb /> },
      { label: "SQL",      icon: null },
    ],
  },
  {
    id: "backend",
    tag: "// BACKEND",
    title: "Backend & API Architecture",
    desc: "Server-side frameworks, REST APIs, and auth",
    colSpan: "col-span-2 md:col-span-2",
    accentColor: "text-emerald-400",
    glowColor: "bg-emerald-400/10",
    borderHover: "hover:border-emerald-400/40",
    featured: false,
    skills: [
      { label: "Node.js",            icon: <FaNodeJs /> },
      { label: "Express.js",         icon: <SiExpress /> },
      { label: "RESTful APIs",       icon: null },
      { label: "JWT Authentication", icon: <SiJsonwebtokens /> },
      { label: "Authorization",      icon: null },
    ],
  },
  {
    id: "tools",
    tag: "// LANGUAGES & TOOLING",
    title: "Languages & DevOps",
    desc: "Languages, deployment, and developer utilities",
    colSpan: "col-span-2 md:col-span-2",
    accentColor: "text-orange-400",
    glowColor: "bg-orange-400/10",
    borderHover: "hover:border-orange-400/40",
    featured: false,
    skills: [
      { label: "Java",        icon: <FaJava /> },
      { label: "Git / GitHub",icon: <FaGithub /> },
      { label: "Postman",     icon: <SiPostman /> },
      { label: "Vercel",      icon: <SiVercel /> },
      { label: "Render",      icon: <SiRender /> },
    ],
  },
  {
    id: "cs",
    tag: "// FUNDAMENTALS",
    title: "Core CS Fundamentals",
    desc: "Problem-solving foundations, algorithms, and system design principles",
    colSpan: "col-span-2 md:col-span-4",
    accentColor: "text-purple-400",
    glowColor: "bg-purple-400/10",
    borderHover: "hover:border-purple-400/40",
    featured: false,
    skills: [
      { label: "Data Structures & Algorithms (DSA)", icon: null },
      { label: "Object-Oriented Programming (OOP)",  icon: null },
      { label: "DBMS",                               icon: null },
    ],
  },
];

// ─── Main component ────────────────────────────────────────────────────────────
const Skills = () => (
  <section
    id="skills"
    className="relative w-full min-h-screen bg-[#222831] py-20 px-6 overflow-hidden"
  >
    {/* Ambient background blobs */}
    <div className="absolute inset-0 z-0" aria-hidden>
      <div className="absolute top-6 left-6 w-40 h-40 sm:w-72 sm:h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-6 right-6 w-64 h-64 sm:w-96 sm:h-96 bg-[#EEEEEE]/5 rounded-full blur-3xl animate-pulse" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">

      {/* ── Section header ── */}
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono uppercase tracking-[0.35em] text-[10px] text-[#00ADB5]/80 mb-3">
          // TECH STACK & CAPABILITIES
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#EEEEEE]">
          Skills & Expertise
        </h2>
        <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-sm md:text-base">
          A curated overview of my technical strengths — from frontend interfaces
          to backend systems and core CS fundamentals.
        </p>
      </motion.div>

      {/* ── Bento grid ── */}
      {/*
        Layout (md = 4-col grid):
          Row 1: Frontend (3 cols) | Database (1 col)
          Row 2: Backend  (2 cols) | Tools    (2 cols)
          Row 3: CS Fundamentals   (4 cols — full width)
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {bentoItems.map((item, i) => (
          <motion.div
            key={item.id}
            className={item.colSpan}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.09 }}
          >
            {/* Bento card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={
                "group relative h-full rounded-2xl border border-white/10 " +
                item.borderHover +
                " bg-[#1b2027]/80 backdrop-blur-md p-5 md:p-6 overflow-hidden" +
                " transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,173,181,0.15)]"
              }
            >
              {/* ── Ambient spotlight glow (visible on hover) ── */}
              <div
                aria-hidden
                className={
                  "absolute -top-16 -left-16 w-56 h-56 rounded-full blur-3xl" +
                  " opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none " +
                  item.glowColor
                }
              />
              {/* ── Secondary corner accent for featured card ── */}
              {item.featured && (
                <div
                  aria-hidden
                  className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30 bg-[#00ADB5]/20 pointer-events-none"
                />
              )}

              {/* ── Card content ── */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Mono tag */}
                <p
                  className={
                    "font-mono text-[10px] tracking-widest uppercase mb-1.5 " +
                    item.accentColor
                  }
                >
                  {item.tag}
                </p>
                {/* Title */}
                <h3 className="text-[#EEEEEE] font-bold text-base md:text-lg leading-snug mb-1">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">
                  {item.desc}
                </p>
                {/* Thin rule */}
                <div className="w-full h-px bg-white/[0.08] mb-4" />
                {/* Badge cloud */}
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill.label}
                      label={skill.label}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
