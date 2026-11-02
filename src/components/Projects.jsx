import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Aqua World – Billing & Inventory Management",
    category: "ERP & Inventory QA",
    badge: "Manual & Functional QA",
    badgeColor: "#10b981",
    // Replace with your custom screenshot anytime in public/projects/ (e.g. /projects/aqua-world.png or .jpg)
    image: "/projects/aqua-world.svg",
    shortDesc: "Stock Summary, Consolidated Reports, Multi-branch inventory tracking and unit conversion workflows.",
    fullDesc: "Aqua World is an enterprise inventory and billing software used by distributors and branch stores. Conducted end-to-end manual and functional testing ensuring zero discrepancy in real-time stock deductions, multi-location stock movements, and financial invoices.",
    bullets: [
      "Tested Stock Summary, Consolidated Report, Stock Transfer, and Stock in Transit modules.",
      "Validated stock calculations, minimum stock alert triggers, and unit packaging/conversion formulas.",
      "Verified data accuracy, branch-wise inventory synchronization, and batch tracking across branches.",
      "Identified edge cases in stock returns, negative inventory prevention, and invoice generation."
    ],
    tags: ["Manual Testing", "Functional Testing", "Inventory Validation", "Bug Reporting", "Retesting"],
    metrics: "4 Modules • 65+ Scenarios • 100% Verified ✓"
  },
  {
    id: 2,
    title: "Inai CRM – Customer Relationship Management",
    category: "CRM & Permission Matrix QA",
    badge: "RBAC & Flow Validation",
    badgeColor: "#38bdf8",
    image: "/projects/inai-crm.svg",
    shortDesc: "Lead lifecycle, sales pipeline stages, quotation calculations and multi-level manager approvals.",
    fullDesc: "Inai CRM powers end-to-end client relationships from lead capture to final deals. Validated user roles, authorization hierarchies, discount caps, and pipeline status progressions to protect data integrity and sales governance.",
    bullets: [
      "Tested Leads, Customers, Sales Opportunities, Quotations, and Approval modules.",
      "Validated role-based access control (RBAC), multi-tier manager quotation approval hierarchies, and user permissions.",
      "Verified tax calculations, tiered discount caps, customer conversion flows, and automated email notifications.",
      "Documented functional bugs with step-by-step reproduction and suggested UX workflow optimizations."
    ],
    tags: ["Manual Testing", "RBAC Testing", "Quotation Approvals", "Defect Logging", "Regression"],
    metrics: "5 Pipeline Stages • Multi-User Roles • Verified ✓"
  },
  {
    id: 3,
    title: "Inai Trace – Field Force Tracking Application",
    category: "Field Operations & Mobile/Web QA",
    badge: "GPS & Operations QA",
    badgeColor: "#06b6d4",
    image: "/projects/inai-trace.svg",
    shortDesc: "Geofenced attendance, route visit tracking, target versus achievement and field order punching.",
    fullDesc: "Inai Trace is a field employee management and real-time location monitoring platform. Validated GPS check-ins, offline data sync, customer visit logging, and manager attendance sign-offs.",
    bullets: [
      "Tested Attendance, Targets, Customer Visits, Orders, Approvals, and Employee Management modules.",
      "Validated geofenced attendance boundaries, selfie check-in verification, and offline-to-online sync.",
      "Verified travel route calculations, visit duration discrepancy alerts, and field order submissions.",
      "Executed regression test suites after developer bug fixes and ensured zero regressions across updates."
    ],
    tags: ["Functional Testing", "Geofence Validation", "Workflow QA", "Retesting", "STLC"],
    metrics: "Real-Time Tracking • Target Rollup • Verified ✓"
  },
  {
    id: 4,
    title: "Inai Response – IT Service Management & Ticketing",
    category: "ITSM & SLA Workflow QA",
    badge: "SLA & System Testing",
    badgeColor: "#f59e0b",
    image: "/projects/inai-response.svg",
    shortDesc: "Ticket priority queues, parent-child linking, automated SLA escalations, and system admin configurations.",
    fullDesc: "Inai Response is an ITIL-aligned service desk solution for managing internal IT helpdesk requests and team incident workflows. Tested end-to-end ticketing lifecycles from creation to closure.",
    bullets: [
      "Tested ticket creation, auto-assignment algorithms, priority matrix (L1-L4), and status transitions.",
      "Explored Admin Setup including User Management, Role Mapping, Team Queues, and Notification Templates.",
      "Validated SLA escalation workflows, breach notifications, and ticket dependency/linking logic.",
      "Documented edge-case defects, UI formatting bugs, and verified fixes across test environments."
    ],
    tags: ["Manual Testing", "SLA Validation", "Admin Setup", "Bug Documentation", "Regression"],
    metrics: "L1-L4 SLA Escalations • Admin Matrix • Verified ✓"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="projects-section-compact">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-header-wrap"
      >
        <h2 className="heading" style={{ marginBottom: '15px' }}>
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          Real-world Software Testing &amp; Quality Assurance projects. Scroll horizontally &amp; click any project card to view full test details.
        </p>
      </motion.div>

      {/* Horizontal Carousel Controls */}
      <div className="carousel-wrapper">
        <button 
          className="carousel-arrow arrow-left" 
          onClick={() => scroll('left')}
          aria-label="Scroll Left"
        >
          <i className="bx bx-chevron-left"></i>
        </button>

        <div className="projects-landscape-track" ref={scrollContainerRef}>
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className="landscape-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Landscape Image Banner */}
              <div className="landscape-img-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="landscape-img"
                  loading="lazy"
                />
                <span 
                  className="card-badge"
                  style={{ borderColor: project.badgeColor, color: project.badgeColor }}
                >
                  ● {project.badge}
                </span>
                <div className="card-hover-overlay">
                  <span className="view-details-btn">
                    <i className="bx bx-zoom-in"></i> Click to View Details
                  </span>
                </div>
              </div>

              {/* Landscape Card Content */}
              <div className="landscape-content">
                <span className="landscape-category">{project.category}</span>
                <h3 className="landscape-title">{project.title}</h3>
                <p className="landscape-short-desc">{project.shortDesc}</p>
                
                <div className="landscape-card-footer">
                  <span className="landscape-metric-pill">
                    <i className="bx bx-check-circle" style={{ color: project.badgeColor }}></i>
                    {project.metrics}
                  </span>
                  <span className="click-prompt">Details &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button 
          className="carousel-arrow arrow-right" 
          onClick={() => scroll('right')}
          aria-label="Scroll Right"
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>

      {/* Scroll indicator hint for mobile/touch */}
      <div className="scroll-hint-bar">
        <span><i className="bx bx-left-arrow-alt"></i> Swipe / Scroll sideways to explore all projects <i className="bx bx-right-arrow-alt"></i></span>
      </div>

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-dialog"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            >
              {/* Modal Close Button */}
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close details"
              >
                &times;
              </button>

              {/* Modal Big Image Header */}
              <div className="modal-image-wrapper">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="modal-image"
                />
                <span 
                  className="modal-badge"
                  style={{ borderColor: selectedProject.badgeColor, color: selectedProject.badgeColor }}
                >
                  ● {selectedProject.badge}
                </span>
              </div>

              {/* Modal Information Body */}
              <div className="modal-body">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-lead-desc">{selectedProject.fullDesc}</p>

                <h4 className="modal-section-title">
                  <i className="bx bx-check-shield" style={{ color: 'var(--main-color)' }}></i>
                  Key Testing Scope &amp; Responsibilities:
                </h4>
                
                <ul className="modal-bullet-list">
                  {selectedProject.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="modal-metrics-card">
                  <i className="bx bx-badge-check" style={{ fontSize: '20px', color: '#10b981' }}></i>
                  <span><strong>QA Test Outcome:</strong> {selectedProject.metrics}</span>
                </div>

                <div className="modal-tags-container">
                  <span className="tags-label">Skills &amp; Tools Used:</span>
                  <div className="tags-row">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-footer-action">
                  <button 
                    className="btn-box" 
                    onClick={() => setSelectedProject(null)}
                    style={{ padding: '10px 24px', fontSize: '14px' }}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
