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
            <h3>Software Testing Intern</h3>
            <h4>Techiedoods Solution Private Limited</h4>
            <p><strong>August 2026 – November 2026</strong></p>
            <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#ddd' }}>
              <li>Analyzed application modules and tested functionalities across CRM, Trace, Aqua World, and Ticketing applications.</li>
              <li>Prepared and executed test scenarios and test cases based on application requirements.</li>
              <li>Performed functional testing, identified bugs, and documented defects with reproduction steps.</li>
              <li>Tested existing features, identified UI issues, and suggested application enhancements.</li>
              <li>Performed retesting and verified bug fixes; practiced automation testing using Playwright with TypeScript.</li>
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
              <li>Developed responsive web pages using HTML5, CSS3, and JavaScript for user-friendly interfaces.</li>
              <li>Collaborated with team members to implement designs and maintain responsive layouts across devices.</li>
              <li>Improved webpage layouts, fixed UI issues, and ensured consistent design standards.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
