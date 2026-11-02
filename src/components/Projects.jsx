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
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Aqua World – Billing & Inventory Management</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Tested a billing and inventory management application covering Stock Summary, Consolidated Report, Stock Transfer, and Stock in Transit modules. Validated stock calculations, minimum stock levels, branch-wise inventory, and packing/conversion workflows.
          </p>
          <div>
            <span className="skill-tag">Manual Testing</span>
            <span className="skill-tag">Functional Testing</span>
            <span className="skill-tag">Bug Reporting</span>
            <span className="skill-tag">Test Case Execution</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Inai CRM – Customer Relationship Management</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Tested Leads, Customers, Sales, Quotations, and Approval modules. Validated role-based access, quotation approval hierarchy, and user permissions. Reported functional defects and suggested workflow improvements.
          </p>
          <div>
            <span className="skill-tag">Manual Testing</span>
            <span className="skill-tag">Role-Based Access Testing</span>
            <span className="skill-tag">Defect Reporting</span>
            <span className="skill-tag">Regression Testing</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Inai Trace – Field Force Tracking</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Tested Attendance, Targets, Visits, Orders, Approvals, and Employee Management modules. Validated attendance workflows, approval processes, and employee activity monitoring. Documented bugs and verified fixes.
          </p>
          <div>
            <span className="skill-tag">Functional Testing</span>
            <span className="skill-tag">Workflow Validation</span>
            <span className="skill-tag">Bug Verification</span>
            <span className="skill-tag">Retesting</span>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 style={{ color: '#00eeff', marginBottom: '10px', fontSize: '22px' }}>Inai Response – IT Service Management & Ticketing</h3>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Tested ticket creation, assignment, linking, and status management functionalities. Explored Admin Setup including Users, Roles, Teams, and Settings. Validated SLA workflows, identified bugs, and verified fixes.
          </p>
          <div>
            <span className="skill-tag">Manual Testing</span>
            <span className="skill-tag">SLA Validation</span>
            <span className="skill-tag">Admin Setup Testing</span>
            <span className="skill-tag">Bug Documentation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
