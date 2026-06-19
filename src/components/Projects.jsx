import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className="grid-container">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Healtrack</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Next-Generation Smart Healthcare Ecosystem: An AI-Driven Framework for Real-Time Resource Optimization and MDR Risk Mitigation. 
            Built a production-style full-stack hospital management web application with patient booking and token-based queue management.
          </p>
          <div>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">JPA</span>
            <span className="skill-tag">JWT</span>
            <span className="skill-tag">REST APIs</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Plasma Pyrolysis of Plastics</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Designed a zero-emission system to convert plastic waste into usable energy through plasma pyrolysis, promoting sustainable and eco-friendly waste management.
            Awarded First Prize in UPI Fraud Detection Paper Presentation for related research.
          </p>
          <div>
            <span className="skill-tag">Research</span>
            <span className="skill-tag">Sustainability</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>TO DO LIST</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            A simple web application that helps users add, manage, and delete daily tasks, making it easier to organize and track activities.
          </p>
          <div>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">MySQL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
