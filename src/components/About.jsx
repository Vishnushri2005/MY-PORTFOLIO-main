import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
            <h2>About <span>Me</span></h2>
            <h4 style={{ fontSize: '24px', color: '#00eeff', marginBottom: '20px' }}>Software Testing Engineer</h4>
            <p style={{ marginBottom: '20px', maxWidth: '800px', margin: '0 auto', color: '#ddd', fontSize: '17px', lineHeight: '1.7' }}>
              Hello! I'm Vishnu Shri Mohanraj, a Computer Science graduate with a strong passion for software quality and testing. I specialize in Manual Testing with hands-on experience in testing web-based applications across real-world CRM, ERP, and service management platforms.
            </p>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px auto', color: '#ddd', fontSize: '17px', lineHeight: '1.7' }}>
              I am skilled in test case preparation, functional testing, bug identification, and defect reporting. I also have basic knowledge of Playwright automation using TypeScript, and I'm always eager to grow my expertise in QA and deliver high-quality software solutions.
            </p>
        </motion.div>

        <div style={{ width: '100%' }}>
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '40px' }}
          >
            My <span>Education</span>
          </motion.h2>

          <div className="grid-container">
              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                  <h3 style={{ color: '#00eeff', marginBottom: '10px' }}>Bachelor's Degree</h3>
                  <p><strong>Course:</strong> B.E. Computer Science & Engineering (Hons)</p>
                  <p><strong>College:</strong> Dhirajlal Gandhi College of Technology</p>
                  <p><strong>Year:</strong> 2022 – 2026</p>
                  <p><strong>CGPA:</strong> 8.00 / 10.0</p>
              </motion.div>

              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                  <h3 style={{ color: '#00eeff', marginBottom: '10px' }}>HSC</h3>
                  <p><strong>School:</strong> Bala Barathi Matric. Hr. Sec. School, Salem</p>
                  <p><strong>Stream:</strong> Computer Science</p>
                  <p><strong>Year:</strong> 2020 – 2022</p>
                  <p><strong>Percentage:</strong> 78%</p>
              </motion.div>

              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                  <h3 style={{ color: '#00eeff', marginBottom: '10px' }}>SSLC</h3>
                  <p><strong>School:</strong> Bala Barathi Matric. Hr. Sec. School, Salem</p>
                  <p><strong>Year:</strong> 2018 – 2020</p>
                  <p><strong>Percentage:</strong> 76%</p>
              </motion.div>
          </div>
        </div>
    </section>
  );
};

export default About;
