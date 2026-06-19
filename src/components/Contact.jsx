import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <div className="contact-layout">
        <motion.div 
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 style={{ fontSize: '24px', color: '#00eeff', marginBottom: '15px' }}>Let's work Together</h4>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>
            Feel free to get in touch with me for any collaboration, project opportunities, or queries. I’m always open to discussing new ideas or potential partnerships. You can reach me via email, phone, or through the contact form below. I’ll get back to you as soon as possible!!!
          </p>
          <ul>
            <li><i className='bx bxs-send'></i> vishnushrimr17@gmail.com</li>
            <li><i className='bx bxs-phone'></i> 8124602255</li>
            <li><i className='bx bxl-linkedin-square'></i> <a href="https://www.linkedin.com/in/vishnu-shri-m" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none'}}>LinkedIn Profile</a></li>
            <li><i className='bx bxl-github'></i> <a href="https://github.com/Vishnushri2005" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none'}}>GitHub Profile</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form action="">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="text" placeholder="Enter Your Subject" />
            <textarea name="message" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn-box" style={{ border: 'none', cursor: 'pointer', marginTop: '10px' }}>Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
