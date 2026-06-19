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
            <h4 style={{ fontSize: '24px', color: '#00eeff', marginBottom: '20px' }}>Full Stack Developer!</h4>
            <p style={{ marginBottom: '20px', maxWidth: '800px', margin: '0 auto', color: '#ddd', fontSize: '17px', lineHeight: '1.7' }}>
              Hello! I’m Vishnu Shri M, a passionate software developer with a strong interest in building efficient and scalable web applications. I have knowledge of Java, Python, HTML, CSS, and JavaScript, and I enjoy applying programming concepts to develop clean and reliable solutions.
            </p>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px auto', color: '#ddd', fontSize: '17px', lineHeight: '1.7' }}>
              I am always eager to learn new technologies, improve my problem-solving skills, and contribute to developing high-quality applications while growing as a software developer.
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
                  <p><strong>Course:</strong> B.E Computer Science And Engineering</p>
                  <p><strong>College:</strong> Dhirajlal Gandhi College of Technology</p>
                  <p><strong>Year:</strong> 2022 – 2026</p>
                  <p><strong>CGPA:</strong> 7.88/10</p>
              </motion.div>

              <motion.div 
                className="glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                  <h3 style={{ color: '#00eeff', marginBottom: '10px' }}>HSC</h3>
                  <p><strong>School:</strong> Bala Barathi Matric Higher Secondary School</p>
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
                  <p><strong>School:</strong> Bala Barathi Matric Higher Secondary School</p>
                  <p><strong>Year:</strong> 2018 – 2020</p>
                  <p><strong>Percentage:</strong> 76%</p>
              </motion.div>
          </div>
        </div>
    </section>
  );
};

export default About;
