import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaGithub,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiCplusplus } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const categories = ["All", "Frontend", "Backend", "Language", "Database", "Tools", "Design"];
const categoryDescriptions = {
  Language: "Primary programming languages and problem solving",
  Frontend: "UI frameworks and styling systems for the web",
  Backend: "Server frameworks and API development",
  Database: "Datastores and persistence technologies",
  Tools: "Build tools, version control and developer utilities",
  Design: "Design tools and prototyping",
};

const ProgressBar = ({ value, color, label }) => {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="w-full" aria-label={`${label} proficiency`}>
      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          className={`h-2 ${color.replace("text-", "bg-")} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const skills = useMemo(
    () => [
      { name: "Java", icon: <FaJava className="text-2xl" />, color: "text-red-400", category: "Language", value: 96 },
      { name: "React", icon: <FaReact className="text-2xl" />, color: "text-cyan-400", category: "Frontend", value: 92 },
      { name: "JavaScript", icon: <DiJavascript className="text-2xl" />, color: "text-yellow-400", category: "Language", value: 90 },
      { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, color: "text-green-500", category: "Backend", value: 90 },
      { name: "MongoDB", icon: <SiMongodb className="text-2xl" />, color: "text-green-600", category: "Database", value: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" />, color: "text-sky-400", category: "Frontend", value: 90 },
      { name: "Python", icon: <FaPython className="text-2xl" />, color: "text-yellow-500", category: "Language", value: 55 },
      { name: "C++", icon: <SiCplusplus className="text-2xl" />, color: "text-blue-600", category: "Language", value: 70 },
      { name: "Express", icon: <SiExpress className="text-2xl" />, color: "text-gray-400", category: "Backend", value: 90 },
      { name: "HTML5", icon: <DiHtml5 className="text-2xl" />, color: "text-orange-500", category: "Frontend", value: 98 },
      { name: "CSS3", icon: <DiCss3 className="text-2xl" />, color: "text-blue-500", category: "Frontend", value: 97 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" />, color: "text-purple-400", category: "Frontend", value: 80 },
      { name: "Git & GitHub", icon: <FaGithub className="text-2xl" />, color: "text-gray-300", category: "Tools", value: 85 },
      { name: "Vite", icon: <SiVite className="text-2xl" />, color: "text-purple-500", category: "Tools", value: 80 },
      { name: "Figma", icon: <FaFigma className="text-2xl" />, color: "text-pink-400", category: "Design", value: 70 },
    ],
    []
  );

  const filtered = useMemo(() => {
    const byCategory = selectedCategory === "All" ? skills : skills.filter((s) => s.category === selectedCategory);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((s) => s.name.toLowerCase().includes(q));
  }, [selectedCategory, skills, query]);

  const grouped = useMemo(() => {
    const order = ["Language", "Frontend", "Backend", "Database", "Tools", "Design"];
    const map = new Map(order.map((k) => [k, []]));
    filtered.forEach((s) => {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category).push(s);
    });
    order.forEach((k) => map.get(k)?.sort((a, b) => b.value - a.value));
    return order.filter((k) => map.get(k)?.length).map((k) => ({ category: k, items: map.get(k) }));
  }, [filtered]);

  const featured = useMemo(() => {
    if (selectedCategory !== "All" && selectedCategory !== "Language") return null;
    return skills.find((s) => s.name.toLowerCase() === "java");
  }, [selectedCategory, skills]);

  const totalShown = filtered.length;
  const avgProficiency = totalShown
    ? Math.round(filtered.reduce((sum, s) => sum + (Number(s.value) || 0), 0) / totalShown)
    : 0;

  const levelFor = (v) => {
    if (v >= 90) return { label: "Advanced", cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" };
    if (v >= 70) return { label: "Proficient", cls: "bg-sky-500/15 text-sky-300 border-sky-500/30" };
    return { label: "Familiar", cls: "bg-zinc-500/15 text-zinc-300 border-zinc-500/30" };
  };

  return (
    <section id="skills" className="relative w-full min-h-screen bg-gradient-to-br from-[#0d1016] via-[#161b26] to-[#0e1219] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[#00ADB5]/80 mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F4F6FB]">Skills & Expertise</h2>
          <p className="mt-4 text-[#C8D0E0] max-w-2xl mx-auto">A concise overview of my technical strengths across languages, frameworks, tools, and platforms.</p>
        </motion.div>

        {/* Search + Filters */}
        <div className="max-w-3xl mx-auto mb-6">
          <label htmlFor="skill-search" className="sr-only">Search skills</label>
          <div className="relative">
            <input
              id="skill-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full rounded-xl bg-[#0f141b] border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] text-[#E5EBF6] placeholder:text-[#9AA3B2] px-4 py-3"
            />
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3B2] text-sm">/{totalShown}</div>
          </div>
        </div>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Skill filters"
          className="flex flex-wrap justify-center gap-3 mb-12"
          onKeyDown={(e) => {
            // Arrow navigation between filter tabs
            const idx = categories.indexOf(selectedCategory);
            if (e.key === "ArrowRight") {
              const next = categories[(idx + 1) % categories.length];
              setSelectedCategory(next);
            } else if (e.key === "ArrowLeft") {
              const prev = categories[(idx - 1 + categories.length) % categories.length];
              setSelectedCategory(prev);
            }
          }}
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                tabIndex={0}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] focus-visible:ring-offset-0 ${
                  active
                    ? "bg-[#00ADB5] text-[#0d1118] shadow shadow-[#00ADB5]/30"
                    : "bg-[#0f141b] text-[#E5EBF6]/80 border border-white/10 hover:border-[#00ADB5]/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Result stats */}
        <div aria-live="polite" className="mb-8 text-center text-sm text-[#9AA3B2]">
          Showing {totalShown} skill{totalShown === 1 ? "" : "s"}
          {totalShown > 0 ? ` • Avg proficiency ${avgProficiency}%` : ""}
        </div>

        {/* Featured Java */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#0f141b] to-[#121823] border border-white/10 p-6 md:p-8 hover:border-[#00ADB5]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#2a323f] flex items-center justify-center text-red-400 text-2xl">
                  <FaJava />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F4F6FB] font-bold text-xl">Featured Skill: Java</h3>
                  <p className="text-[#BFC7D6] mt-1 text-sm">Object-oriented programming, DSA with a focus on clarity and performance.</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-[#F4F6FB]">{featured.value}%</div>
                  <div className="text-xs text-[#9AA3B2]">proficiency</div>
                </div>
              </div>
              <div className="mt-5">
                <ProgressBar value={featured.value} color={featured.color} label="Java" />
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#0f141b] to-[#121823] border border-white/10 p-6 md:p-8 flex items-center justify-between hover:border-[#00ADB5]/30 transition-colors">
              <div>
                <div className="text-sm uppercase tracking-widest text-[#9AA3B2] mb-1">Primary Language</div>
                <div className="text-2xl font-bold text-[#F4F6FB]">Backend & DSA</div>
                <div className="text-sm text-[#BFC7D6] mt-1">Clean code • DS/Algo • API basics</div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#2a323f] flex items-center justify-center text-red-400 text-2xl">
                <FaJava />
              </div>
            </div>
          </motion.div>
        )}

        {/* Grouped Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {grouped.map(({ category, items }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.05 }}
              className="h-full flex flex-col rounded-2xl bg-gradient-to-br from-[#0f141b] to-[#121823] border border-white/10 p-6 md:p-7 hover:border-[#00ADB5]/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[#F4F6FB] font-semibold text-lg">{category}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-[#00ADB5]/15 text-[#77d8dd] border border-[#00ADB5]/30">{items.length} skills</span>
              </div>
              {category !== "All" && (
                <div className="text-xs text-[#9AA3B2] mb-4">{categoryDescriptions[category]}</div>
              )}
              <ul className="space-y-4 mt-2 flex-1">
                {items.map((s) => (
                  <li key={s.name} className="group">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg bg-[#1a2130] flex items-center justify-center ${s.color}`}>
                        {s.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[#E8EDF7] font-medium">{s.name}</span>
                          <span className="flex items-center gap-2">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${levelFor(s.value).cls}`}>{levelFor(s.value).label}</span>
                            <span className="text-[#9AA3B2] text-xs">{s.value}%</span>
                          </span>
                        </div>
                        <div className="mt-2">
                          <ProgressBar value={s.value} color={s.color} label={s.name} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
