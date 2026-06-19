import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Experience</span>
      </motion.h2>

      <div className="timeline">
        <motion.div 
          className="timeline-item timeline-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card timeline-content">
            <h3>Java Full Stack Developer Intern</h3>
            <h4>Dev Technology Solutions</h4>
            <p><strong>Salem, Tamil Nadu | Jun 2025 - Jul 2025</strong></p>
            <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#ddd' }}>
              <li>Developed responsive UI using HTML5, CSS3, JavaScript, and React JS.</li>
              <li>Built RESTful APIs using Java, Spring Boot, and Spring MVC for backend logic and CRUD operations.</li>
              <li>Integrated React frontend with Spring Boot backend through API integration.</li>
              <li>Applied JWT authentication, authorization, and Spring Security concepts.</li>
              <li>Tested APIs with Postman and managed code using Git and GitHub.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item timeline-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass-card timeline-content">
            <h3>Web Designing & Development Intern</h3>
            <h4>Excerpt Technology Pvt. Ltd.</h4>
            <p><strong>Bangalore, Karnataka</strong></p>
            <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#ddd' }}>
              <li>Created responsive web pages using HTML and CSS.</li>
              <li>Assisted in frontend development and UI improvements.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
