import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills">
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Skills</span>
      </motion.h2>

      <div className="grid-container">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <i className="bx bx-check-shield" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Testing Skills</h2>
          <div>
            <span className="skill-tag">Manual Testing</span>
            <span className="skill-tag">Functional Testing</span>
            <span className="skill-tag">Smoke Testing</span>
            <span className="skill-tag">Sanity Testing</span>
            <span className="skill-tag">Regression Testing</span>
            <span className="skill-tag">Retesting</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <i className="bx bx-book-content" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Testing Concepts</h2>
          <div>
            <span className="skill-tag">SDLC</span>
            <span className="skill-tag">STLC</span>
            <span className="skill-tag">Defect Life Cycle</span>
            <span className="skill-tag">Test Scenario Design</span>
            <span className="skill-tag">Test Case Preparation</span>
            <span className="skill-tag">Bug Reporting</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <i className="bx bx-code-curly" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Automation Testing</h2>
          <div>
            <span className="skill-tag">Playwright</span>
            <span className="skill-tag">TypeScript (Basic)</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <i className="bx bx-data" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Programming & Database</h2>
          <div>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">MySQL</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <i className="bx bx-refresh" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Methodologies</h2>
          <div>
            <span className="skill-tag">Agile Methodology</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
