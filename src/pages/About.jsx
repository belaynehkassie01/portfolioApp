import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaMapMarkerAlt,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaGlobe,
  FaStar
} from 'react-icons/fa';

import '../assets/styles/pages/About.css';
import AboutImage from '../assets/images/About.jpg';
import About1 from '../assets/images/About1.jpg';
import MyCV from '../assets/Files/Belayneh-kassie-CV.pdf';


const About = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', link:'belaynehkassie01', url: 'https://github.com/belaynehkassie01', color: '#6e5494' },
    { icon: <FaLinkedin />, name: 'LinkedIn', link:'belayneh-kassie', url: 'https://linkedin.com/in/belayneh-kassie', color: '#0077b5' },
    { icon: <FaTwitter />, name: 'Twitter', link:'bel84583kassie', url: 'https://twitter.com/bel84583kassie', color: '#1da1f2' },
    { icon: <FaBehance />, name: 'Behance', link:'belaynehkassie', url: 'https://behance.net/belaynehkassie', color: '#1769ff' },
  ];

  const stats = [
    { value: '30+', label: 'Projects Completed', icon: <FaCode /> },
    { value: '2+', label: 'Years Experience', icon: <FaBriefcase /> },
    { value: '95%', label: 'Client Satisfaction', icon: <FaHeart /> },
    { value: '10+', label: 'Happy Clients', icon: <FaUser /> }
  ];

  const skills = [
    { name: 'UI/UX Design', level: 73 },
    { name: 'Frontend Development', level: 95 },
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 94 },
    { name: 'Node.js', level: 90 },
    { name: 'Figma & Adobe XD', level: 80 },
    { name: 'Bootstrap CSS', level: 96 },
    { name: 'REST APIs', level: 89 }
  ];

  useEffect(() => {
    // Animate skills when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            const level = skills[skillId].level;
            
            setAnimatedSkills(prev => ({
              ...prev,
              [skillId]: level
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all skill items
    document.querySelectorAll('.skill-item').forEach((el, index) => {
      el.dataset.skillId = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <div className="tg">About Me</div>
              <h1 className="hero-title">
                Designing & Developing <span className="text-gradient">Digital Excellence</span>
              </h1>
              <p className="hero-description">
                I'm Belayneh Kassie, a passionate UI/UX Designer and Full Stack Developer dedicated 
                to creating exceptional digital experiences. With over 3 years of professional 
                experience, I combine technical expertise with creative design to build 
                solutions that users love.
              </p>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="hero-stat">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <a href={MyCV} download className="btn btn-primary">
                  <FaDownload /> Download CV
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <FaEnvelope /> Contact Me
                </Link>
              </div>
            </div>

            <div className="about-hero-image">
              <div className="profile-container">
                <div className="profile-image-wrapper">
                  <img 
                    src={About1} 
                    alt="Belayneh kassie" 
                    className="profile-image"
                  />
                  <div className="image-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIOGRAPHY SECTION ===== */}
      <section className="biography section">
        <div className="container">
          <div className="section-header">
            <h2>My Journey</h2>
            <p>From code to creative design</p>
          </div>

          <div className="biography-content">
            <div className="bio-text">
              <h3>Who I Am</h3>
              <p>
                I'm a creative problem solver at heart, passionate about building digital 
                products that not only look great but also solve real-world problems. 
                My journey began with a Computer Science degree, but I quickly discovered 
                my love for the intersection of design and development.
              </p>
              <p>
                What sets me apart is my ability to understand both the technical and 
                aesthetic aspects of digital products. I believe that great design and 
                clean code go hand in hand, and I'm committed to mastering both.
              </p>
            </div>

            <div className="bio-details">
              <div className="detail-card">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                  <span className="detail-sub">Remote & On-site</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h4>Availability</h4>
                  <p>Open for Opportunities</p>
                  <span className="detail-sub">Freelance & Full-time</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <FaEnvelope />
                </div>
                <div className="email">
                  <h4>Email</h4>
                  <a href="mailto:belaynehkassie01@gmail.com">
                    belaynehkassie01@gmail.com
                  </a>
                  <br />
                  <span className="detail-sub">Response within 24h</span>
                </div>
              </div>


                <div className="detail-card">
                <div className="detail-icon">
                  <FaPhone />
                </div>
                <div className="phone-detail">
                  <h4>Phone</h4>
                  <a href="tel:+251985979631" className="contact-value">
                    +251 985 979 631
                  </a>
                  <span className="detail-sub">Mon–Fri, 9AM–6PM PST</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills-section section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>My expertise across the stack</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">
                    {animatedSkills[index] || 0}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${animatedSkills[index] || 0}%`,
                      transition: `width 1.5s ease ${index * 0.1}s`
                    }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="experience section">
        <div className="container">
          <div className="experience-grid">
            <div className="experience-column">
              <div className="section-header">
                <h3><FaGraduationCap /> Education</h3>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2024 - Present</div>
                  <div className="timeline-content">
                    <h4>B.Sc. Computer Science</h4>
                    <p className="timeline-subtitle">Gondar University</p>
                    <p>Specializing in Human-Computer Interaction & Web Technologies</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">2024 - 2025</div>
                  <div className="timeline-content">
                    <h4>Full-Stack Development  Certification</h4>
                    <p className="timeline-subtitle">Evangadi Tech</p>
                    <p>Frontend & Backend Web Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-column">
              <div className="section-header">
                <h3><FaBriefcase /> Experience</h3>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2024 - Present</div>
                  <div className="timeline-content">
                    <h4>junior Full Stack Developer</h4>
                    <p className="timeline-subtitle">TechVision Inc.</p>
                    <p>Developing and maintaining web applications</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">2024 - 2025</div>
                  <div className="timeline-content">
                    <h4>UI/UX Designer & Developer</h4>
                    <p className="timeline-subtitle">Digital Creatives</p>
                    <p>Designing and developing responsive websites & applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT & SOCIAL SECTION ===== */}
      <section className="contact-social section">
        <div className="container">
          <div className="contact-social-grid">
            <div className="contact-card card">
              <div className="contact-header">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Get In Touch</h3>
                  <p>Let's discuss your next project</p>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaEnvelope />
                  </div>
                  <div className="email">
                    <span className="contact-label">Email</span>
                    <a href="mailto:belaynehkassie01@gmail.com" className="contact-value">
                      belaynehkassie01@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="contact-label">Phone</span>
                    <a href="tel:+251 985 969 631" className="contact-value">
                      +251 985 969 631
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary btn-full">
                <FaEnvelope /> Send Message
              </Link>
            </div>

            <div className="social-card card">
              <div className="social-header">
                <div className="social-icon">
                  <FaGlobe />
                </div>
                <div>
                  <h3>Connect With Me</h3>
                  <p>Follow my work and updates</p>
                </div>
              </div>
              
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-link-icon" style={{ backgroundColor: social.color }}>
                      {social.icon}
                    </div>
                    <div className="social-link-content">
                      <span className="social-link-name">{social.name}</span>
                      <span className="social-link-handle">@{social.link.toLowerCase()}</span>
                    </div>
                    <div className="social-link-arrow">
                      <FaStar />
                    </div>
                  </a>
                ))}
              </div>
              
              <p className="social-note">
                Feel free to reach out for collaboration, opportunities, or just to say hi!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's collaborate and create something amazing together. 
                Whether you need a website, web application, or design system, 
                I'm here to help bring your vision to life.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Start a Project
                </Link>
                <Link to="/projects" className="btn btn-secondary btn-large">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;