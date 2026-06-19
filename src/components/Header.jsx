import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <a href="#" className="logo">Vishnu Shri Mohanraj</a>
        
        <i 
          className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} 
          id="menu-icon" 
          onClick={toggleMenu}
        ></i>

        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
            <a href="#home" className="active" onClick={() => setMenuActive(false)}>Home</a>
            <a href="#about" onClick={() => setMenuActive(false)}>About</a>
            <a href="#experience" onClick={() => setMenuActive(false)}>Experience</a>
            <a href="#skills" onClick={() => setMenuActive(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuActive(false)}>Projects</a>
            <a href="#resume" onClick={() => setMenuActive(false)}>Resume</a>
            <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
        </nav>
    </motion.header>
  );
};

export default Header;
