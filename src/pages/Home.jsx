import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaCloud,
  FaPaintBrush,
  FaRocket,
  FaCalendar,
  FaCheckCircle
} from 'react-icons/fa';


import '../assets/styles/pages/Home.css';


const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const [name, setName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const nameRef = useRef(null);
  
  const fullName = "Belayneh Kassie";
  const typingSpeed = 100; // milliseconds per character

  // Typewriter effect for name
  const typeWriter = (text, i, callback) => {
    if (i < text.length) {
      setName(text.substring(0, i + 1));
      setTimeout(() => typeWriter(text, i + 1, callback), typingSpeed);
    } else if (callback) {
      setTimeout(callback, 500); // Pause after typing
    }
  };

  // Function to animate counting
  const animateCount = (endValue, duration, setter) => {
    let startValue = 0;
    const increment = endValue / (duration / 16); // Assuming 60fps
    let currentValue = startValue;
    
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= endValue) {
        currentValue = endValue;
        clearInterval(timer);
      }
      setter(currentValue);
    }, 16); // ~60fps
  };

  // Function to check if element is in viewport
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    if (statsRef.current && !hasAnimated && isInViewport(statsRef.current)) {
      setHasAnimated(true);
      
      // Animate each counter
      animateCount(30, 1500, (value) => {
        setStats(prev => ({ ...prev, projects: Math.floor(value) }));
      });
      
      animateCount(2, 1000, (value) => {
        setStats(prev => ({ ...prev, experience: value.toFixed(1) }));
      });
      
      animateCount(95, 2000, (value) => {
        setStats(prev => ({ ...prev, satisfaction: Math.floor(value) }));
      });
    }
  };

  useEffect(() => {
    // Start name typing animation
    setIsTyping(true);
    const typingTimer = setTimeout(() => {
      typeWriter(fullName, 0, () => {
        setIsTyping(false);
      });
    }, 800); // Small delay before starting

    // Initial stats animation on page load
    const statsTimer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        
        animateCount(30, 1500, (value) => {
          setStats(prev => ({ ...prev, projects: Math.floor(value) }));
        });
        
        animateCount(2, 1000, (value) => {
          setStats(prev => ({ ...prev, experience: value.toFixed(1) }));
        });
        
        animateCount(96, 2000, (value) => {
          setStats(prev => ({ ...prev, satisfaction: Math.floor(value) }));
        });
      }
    }, 500); // Small delay for better UX

    // Add scroll listener for animation on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(statsTimer);
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [hasAnimated]);

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Hi, I'm <span className="text-gradient" ref={nameRef}>
                {name}
                {isTyping && <span className="typing-cursor">|</span>}
              </span>
            </h1>
            
            <h2 className="hero-subtitle">
              UI/UX Designer & Full Stack Developer
            </h2>
            
            <p className="hero-description">
              I create beautiful, functional digital experiences that users love. 
              With expertise in both design and development, I bring ideas to life 
              from concept to deployment.
            </p>
            
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
            
            <div className="hero-stats" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number">{stats.projects}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.experience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.satisfaction}%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills section">
        <div className="container">
          <div className="skills-header">
            <h2>Expertise & Technologies</h2>
            <p>I work with modern tools and frameworks to build exceptional digital products</p>
          </div>
          
          <div className="skills-grid">
            {/* Frontend Card */}
            <div className="skill-card">
              <div className="skill-icon">
                <FaPaintBrush size={24} />
              </div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Bootstrap CSS</span>
                <span className="skill-tag">jQuery</span>
              </div>
              <Link to="/skills" className="skill-link">
                Explore more <FaArrowRight />
              </Link>
            </div>
            
            {/* Backend Card */}
            <div className="skill-card">
              <div className="skill-icon">
                <FaServer size={24} />
              </div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">REST APIs</span>
              </div>
              <Link to="/skills" className="skill-link">
                Explore more <FaArrowRight />
              </Link>
            </div>
            
            {/* Database Card */}
            <div className="skill-card">
              <div className="skill-icon">
                <FaDatabase size={24} />
              </div>
              <h3>Database & Storage</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Firebase</span>
              </div>
              <Link to="/skills" className="skill-link">
                Explore more <FaArrowRight />
              </Link>
            </div>
            
            {/* DevOps Card */}
            <div className="skill-card">
              <div className="skill-icon">
                <FaCloud size={24} />
              </div>
              <h3>DevOps & Cloud</h3>
              <div className="skill-tags">
                <span className="skill-tag">Aiven</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Vercel</span>
              </div>
              <Link to="/skills" className="skill-link">
                Explore more <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
<section className="projects section">
  <div className="container">
    <div className="projects-header">
      <h2>Featured Projects</h2>
      <p>Here are some of my recent works that I'm proud of</p>
    </div>
    
    <div className="projects-grid compact">
      {/* Project 1 */}
      <div className="project-card compact">
        <div className="project-image">
          {/* Add image if you have one */}
          {/* <img src="/project1.jpg" alt="Garage Main App" className="project-screenshot" /> */}
        </div>
        <div className="project-content">
          <h3>Garage Main App</h3>
          <div className="project-meta">
            <span className="project-category fullstack">Full Stack</span>
            <span className="project-date">2025</span>
          </div>
          <p className="project-description">
            A comprehensive garage management system with real-time inventory tracking and customer management.
          </p>
          <div className="project-buttons">
            <a 
              href="https://addisgaragemainapp-mu.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary compact"
            >
              <FaRocket /> Live Demo
            </a>
            <a 
              href="https://github.com/belaynehkassie01/abegaragemainapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary compact"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="project-card compact">
        <div className="project-image">
          {/* Add image if you have one */}
          {/* <img src="/project2.jpg" alt="Netflix Clone" className="project-screenshot" /> */}
        </div>
        <div className="project-content">
          <h3>Netflix Clone</h3>
          <div className="project-meta">
            <span className="project-category frontend">Frontend</span>
            <span className="project-date">2024</span>
          </div>
          <p className="project-description">
            A responsive Netflix UI clone with movie browsing, trailer previews, and user authentication.
          </p>
          <div className="project-buttons">
            <a 
              href="https://netflix-clone-flax-two.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary compact"
            >
              <FaRocket /> Live Demo
            </a>
            <a 
              href="https://github.com/belaynehkassie01/Netflix-Clone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary compact"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
      
      {/* Project 3 */}
      <div className="project-card compact">
        <div className="project-image">
          {/* Add image if you have one */}
          {/* <img src="/project3.jpg" alt="Amazon Clone" className="project-screenshot" /> */}
        </div>
        <div className="project-content">
          <h3>Amazon Clone</h3>
          <div className="project-meta">
            <span className="project-category fullstack">Full Stack</span>
            <span className="project-date">2024</span>
          </div>
          <p className="project-description">
            E-commerce platform with shopping cart, payment integration, and user dashboard functionality.
          </p>
          <div className="project-buttons">
            <a 
              href="https://amazon-clone-steel-alpha.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary compact"
            >
              <FaRocket /> Live Demo
            </a>
            <a 
              href="https://github.com/belaynehkassie01/amazon-frontend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary compact"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <Link to="/projects" className="btn btn-primary">
        View All Projects <FaArrowRight />
      </Link>
    </div>
  </div>
</section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Have a project in mind? I'd love to hear about it. 
              Let's connect and discuss how we can bring your ideas to life.
            </p>
            <Link to="/contact" className="btn">
              Start a Project <FaRocket />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;