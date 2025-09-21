import React, { useState, useEffect } from 'react';

// Apne saare components import karein
import Nav from './pages/Nav';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader'; // 1. Loader ko import karein

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yeh website ke shuru hone par 2.5 seconds ka timer set karega
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Aap is time ko kam ya zyada kar sakte hain

    return () => clearTimeout(timer);
  }, []);

  // 2. Agar loading true hai, to Loader component dikhayein
  if (loading) {
    return <Loader />;
  }

  // 3. Loading false hone ke baad, poori website dikhayein
  return (
    <>
      <Nav />
      <Toaster />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;