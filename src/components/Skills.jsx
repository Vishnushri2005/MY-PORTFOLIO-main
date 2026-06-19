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
          <i className="bx bx-bracket" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Programming Languages</h2>
          <div>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">JavaScript</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <i className="bx bx-code-alt" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Frontend</h2>
          <div>
            <span className="skill-tag">React JS</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <i className="bx bx-server" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Backend</h2>
          <div>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">Spring MVC</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">JWT Authentication</span>
            <span className="skill-tag">Spring Security</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <i className="bx bx-data" style={{ color: '#00eeff', fontSize: '50px', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Database & Tools</h2>
          <div>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">JPA</span>
            <span className="skill-tag">Hibernate</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Maven</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
