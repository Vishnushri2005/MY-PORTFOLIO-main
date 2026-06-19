import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Full Stack Developer", "Web Designer", "Backend Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
            <h3>Hello, It's Me</h3>
            <h1>Vishnu Shri Mohanraj</h1>
            <h3>And I'm a <span ref={el}></span></h3>
            <p>I'm a motivated and detail-oriented Java Full Stack Developer with knowledge of Java, Spring Boot, REST APIs, and database management. I have a strong foundation in software development principles and enjoy creating reliable and scalable applications.
            </p>
            <div style={{ marginTop: '30px' }}>
              <a href="#contact" className="btn-box">Hire Me</a>
              <a href="#projects" className="btn-box btn-outline" style={{ marginLeft: '15px' }}>My Projects</a>
            </div>
        </motion.div>
        
        <motion.div 
          className="profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="profile-container">
                <div className="profile-image">
                    <img src="/profile.jpg" alt="Profile Photo"/>
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default Home;
