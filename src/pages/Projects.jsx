import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaFilter,
  FaCalendar,
  FaArrowRight,
  FaEye,
  FaCode,
  FaPaintBrush,
  FaServer,
  FaDesktop,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaStar,
  FaLayerGroup
} from 'react-icons/fa';

import '../assets/styles/pages/projects.css';
import Garage from '../assets/images/projects/Garage.png';
import Amazon from '../assets/images/projects/Amazon.png';
import Netflix from '../assets/images/projects/Netflix.png';
import Portfolio from '../assets/images/projects/Portfolio.png';
import Ticketing from '../assets/images/projects/Ticketing.png';
import Design from '../assets/images/projects/Design.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projectFilters = [
    { id: 'all', name: 'All Projects', icon: <FaFilter /> },
    { id: 'web', name: 'Web Apps', icon: <FaDesktop /> },
    { id: 'design', name: 'UI/UX Design', icon: <FaPaintBrush /> },
    { id: 'fullstack', name: 'Full Stack', icon: <FaServer /> }
  ];

  const allProjects = [
    {
      id: 1,
      title: 'Addis Garage Web app',
      description: 'Garage management system with booking, employees, and customer management features.',
      category: 'fullstack',
      image: Garage,
      demoLink: 'https://addisgaragemainapp-mu.vercel.app/',
      codeLink: 'https://github.com/belaynehkassie01/abegaragemainapp.git',
      year: 2024
    },
    {
      id: 2,
      title: 'Netflix Clone',
      description: 'Netflix clone with user authentication, movie details, and search functionality.',
      category: 'web',
      image: Netflix,
      demoLink: 'https://netflix-clone-flax-two.vercel.app/',
      codeLink: 'https://github.com/belaynehkassie01/Netflix-Clone',
      year: 2024
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: ' First Personal portfolio website showcasing projects and skills.',
      category: 'web',
      image: Portfolio,
      demoLink: 'https://portfolio-ten-theta-73.vercel.app/',
      codeLink: 'https://github.com/belaynehkassie01/portfolio',
      year: 2023
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Complete design system with reusable components and prototyping tools.',
      category: 'design',
      image: Design,
      demoLink: 'https://www.figma.com/file/xyz123/Portfolio-Design-System',
      codeLink: 'https://www.figma.com/file/xyz123/Portfolio-Design-System',
      year: 2023
    },
    {
      id: 5,
      title: 'Ticketing Management ',
      description: 'A full-stack web app for browsing events and booking tickets, featuring a clean, responsive UI and an admin dashboard with analytics. ',
      category: 'fullstack',
      image: Ticketing,
      demoLink: 'https://ticketing-management.vercel.app',
      codeLink: 'https://github.com/belaynehkassie01/ticketing-management',
      year: 2025
    },
    {
      id: 6,
      title: 'Amazon Clone',
      description: 'Amazon clone with product listings, shopping cart, and user authentication. ',
      category: 'fullstack',
      image: Amazon,
      demoLink: 'https://amazon-clone-steel-alpha.vercel.app',
      codeLink: 'https://github.com/belaynehkassie01/amazon-frontend',
      year: 2024
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className="projects-page">
      {/* ===== HERO SECTION ===== */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="hero-title">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="hero-description">
              A collection of my recent work in web development and design.
              Each project showcases my approach to solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section className="projects-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <FaLayerGroup />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{allProjects.length}</h3>
                <p className="stat-label">Total Projects</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <FaStar />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{allProjects.filter(p => p.category === 'fullstack').length}</h3>
                <p className="stat-label">Full Stack</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <FaCalendar />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{new Set(allProjects.map(p => p.year)).size}</h3>
                <p className="stat-label">Years Active</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <FaCogs />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{new Set(allProjects.map(p => p.category)).size}</h3>
                <p className="stat-label">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTERS SECTION ===== */}
      <section className="projects-filters">
        <div className="container">
          <div className="filters-container">
            <h3 className="filters-title">Filter Projects</h3>
            <div className="filters-buttons">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setVisibleProjects(6);
                  }}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-label">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {displayedProjects.map((project) => (
              <div key={project.id} className="project-card">
                {/* Project Image */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-category">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content-wrapper">
                  <div className="project-meta">
                    <span className="project-year">
                      <FaCalendar /> {project.year}
                    </span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <div className="action-buttons">
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaEye /> Live Demo
                      </a>
                      <a 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FaGithub /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleProjects < filteredProjects.length && (
            <div className="load-more">
              <button onClick={handleLoadMore} className="btn btn-primary btn-load-more">
                Load More Projects <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== WORK PROCESS SECTION ===== */}
      <section className="work-process">
        <div className="container">
          <div className="process-header">
            <h2>My Work Process</h2>
            <p>How I approach every project from concept to completion</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <FaLightbulb />
              </div>
              <h3>Discovery</h3>
              <p>Understanding requirements and planning project scope</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <FaPaintBrush />
              </div>
              <h3>Design</h3>
              <p>Creating wireframes and user interface designs</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <FaCode />
              </div>
              <h3>Development</h3>
              <p>Building with clean code and best practices</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <FaRocket />
              </div>
              <h3>Deployment</h3>
              <p>Testing, launching, and maintaining the product</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2>Client Feedback</h2>
            <p>What clients say about working with me</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Alex delivered exactly what we needed, on time and within budget. His attention to detail is exceptional."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CEO, TechVision Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The design and functionality exceeded our expectations. Great communication throughout the project."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Product Manager, Digital Creatives</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Professional, skilled, and delivered a product that our users love. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <p>Founder, StartupHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Have a project in mind? Let's discuss how we can create something amazing together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                <FaUsers /> Get In Touch
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                <FaChartLine /> About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;