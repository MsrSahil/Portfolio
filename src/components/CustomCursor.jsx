import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      // Isse yeh effect mobile/touch devices par hide ho jayega
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      style={{
        // Yeh hamara main spotlight effect hai
        background: 'radial-gradient(circle, rgba(0, 173, 181, 0.15), transparent 50%)',
      }}
      // Isse div mouse ke saath smoothly move karega
      animate={{
        x: position.x - 250, // div ko mouse ke center mein laane ke liye (width/2)
        y: position.y - 250, // div ko mouse ke center mein laane ke liye (height/2)
        width: '500px',
        height: '500px',
      }}
      // Movement ko smooth banane ke liye transition
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.1,
      }}
    />
  );
};

export default CustomCursor;