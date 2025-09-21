import React, { useState, useEffect } from 'react';
// Components
import Nav from './pages/Nav';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// Utilities
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
// New "All Over" Components

import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CustomCursor />
      <Nav />
    
      <Toaster />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;