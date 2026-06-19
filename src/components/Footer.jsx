import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        className="last-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Developed by Vishnu Shri @ 2026</p>
      </motion.div>
      <motion.div 
        className="top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
      </motion.div>
    </footer>
  );
};

export default Footer;
