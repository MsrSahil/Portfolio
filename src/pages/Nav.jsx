import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const lastActiveRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Mobile menu: scroll lock, focus trap, esc close, and restore focus
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || active === menuRef.current) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (isOpen) {
      lastActiveRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      // Focus first menu item after open
      setTimeout(() => {
        const first = menuRef.current?.querySelector('a[href], button:not([disabled])');
        (first || menuButtonRef.current)?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      if (lastActiveRef.current && typeof lastActiveRef.current.focus === "function") {
        lastActiveRef.current.focus();
      }
      lastActiveRef.current = null;
      window.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Close menu if resizing to desktop breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#222831]/90 backdrop-blur-lg py-2 shadow-lg border-b border-[#00ADB5]/30"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <a href="#home" className="text-2xl font-bold text-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300">
              MSR
            </a>
            <div className="hidden md:flex space-x-2 border-l border-gray-700 pl-3 ml-3">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="p-1 rounded-full bg-[#393E46] shadow-md">
                <SiMongodb className="text-[#00ADB5] text-sm" title="MongoDB" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} className="p-1 rounded-full bg-[#393E46] shadow-md">
                <SiExpress className="text-[#EEEEEE] text-sm" title="Express" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="p-1 rounded-full bg-[#393E46] shadow-md">
                <FaReact className="text-[#00ADB5] text-sm" title="React" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="p-1 rounded-full bg-[#393E46] shadow-md">
                <DiNodejs className="text-[#00ADB5] text-sm" title="Node.js" />
              </motion.div>
            </div>
          </motion.div>

          {/* === DESKTOP NAV UPDATED FOR GLITCH-FREE UNDERLINE === */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    className={`px-1 py-2 text-sm font-semibold transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ADB5]"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              ref={menuButtonRef}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[#393E46]/80 text-[#EEEEEE] rounded-lg"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
          <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#222831]/95 backdrop-blur-lg border-t border-[#00ADB5]/30"
            id="mobile-menu"
            ref={menuRef}
          >
            <ul className="px-4 pt-4 pb-6 space-y-2" role="menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-[#00ADB5] bg-[#393E46]"
                        : "text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#393E46]/60"
                    }`}
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;