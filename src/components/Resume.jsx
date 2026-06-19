import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" style={{ textAlign: 'center' }}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Resume</span>
      </motion.h2>

      <motion.div 
        style={{ maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="glass-card" style={{ padding: '60px' }}>
          <i className='bx bx-file' style={{ fontSize: '70px', color: '#00eeff', marginBottom: '20px' }}></i>
          <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>My Professional Resume</h3>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ccc' }}>
            You can view or download my latest resume to learn more about my
            skills, education, and project experience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-box">
              View Resume
            </a>
            <a href="/resume.pdf" download className="btn-box btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
