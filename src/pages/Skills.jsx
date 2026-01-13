import React, { useState, useEffect } from 'react';
import { 
  FaCode, 
  FaPaintBrush, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaChartBar, 
  FaTools, 
  FaLayerGroup, 
  FaRocket,
  FaAws,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaGit,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDocker
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiBootstrap,
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiRedis,
  SiAdobexd
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import '../assets/styles/pages/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <FaLayerGroup /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'design', name: 'UI/UX Design', icon: <FaPaintBrush /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'database', name: 'Database', icon: <FaDatabase /> },
    { id: 'devops', name: 'DevOps & Tools', icon: <FaCloud /> }
  ];

  const skills = [
    // Frontend Skills
    { 
      name: 'React', 
      level: 95, 
      category: 'frontend', 
      icon: <FaReact />,
      color: '#61DAFB',
      experience: '2+ years'
    },
    { 
      name: 'Next.js', 
      level: 80, 
      category: 'frontend', 
      icon: <SiNextdotjs />,
      color: '#000000',
      experience: '2+ years'
    },
    { 
      name: 'TypeScript', 
      level: 77, 
      category: 'frontend', 
      icon: <SiTypescript />,
      color: '#3178C6',
      experience: '2+ years'
    },
    { 
      name: 'JavaScript', 
      level: 94, 
      category: 'frontend', 
      icon: <SiJavascript />,
      color: '#F7DF1E',
      experience: '2+ years'
    },
    { 
      name: 'Bootstrap CSS', 
      level: 96, 
      category: 'frontend', 
      icon: <SiBootstrap />,
      color: '#06B6D4',
      experience: '2+ years'
    },
    { 
      name: 'React Native', 
      level: 70, 
      category: 'frontend', 
      icon: <TbBrandReactNative />,
      color: '#61DAFB',
      experience: '1+ years'
    },

    // Design Skills
    { 
      name: 'Figma', 
      level: 91, 
      category: 'design', 
      icon: <FaFigma />,
      color: '#F24E1E',
      experience: '1+ years'
    },
    { 
      name: 'UI/UX Design', 
      level: 73, 
      category: 'design', 
      icon: <FaPaintBrush />,
      color: '#FF6B6B',
      experience: '2+ years'
    },
    { 
      name: 'Adobe XD', 
      level: 70, 
      category: 'design', 
      icon: <SiAdobexd />,
      color: '#FF61F6',
      experience: '1+ years'
    },
    { 
      name: 'Prototyping', 
      level: 91, 
      category: 'design', 
      icon: <FaRocket />,
      color: '#4ECDC4',
      experience: '1+ years'
    },
    { 
      name: 'User Research', 
      level: 87, 
      category: 'design', 
      icon: <FaChartBar />,
      color: '#45B7D1',
      experience: '2+ years'
    },

    // Backend Skills
    { 
      name: 'Node.js', 
      level: 90, 
      category: 'backend', 
      icon: <FaNodeJs />,
      color: '#339933',
      experience: '2+ years'
    },
    { 
      name: 'Express.js', 
      level: 90, 
      category: 'backend', 
      icon: <SiExpress />,
      color: '#000000',
      experience: '2+ years'
    },
    { 
      name: 'Python', 
      level: 75, 
      category: 'backend', 
      icon: <FaPython />,
      color: '#3776AB',
      experience: '1+ years'
    },
    { 
      name: 'REST APIs', 
      level: 89, 
      category: 'backend', 
      icon: <FaServer />,
      color: '#FF6B6B',
      experience: '2+ years'
    },
    // Database Skills
    { 
      name: 'MongoDB', 
      level: 91, 
      category: 'database', 
      icon: <SiMongodb />,
      color: '#47A248',
      experience: '3+ years'
    },
    { 
      name: 'MySQL', 
      level: 95, 
      category: 'database', 
      icon: <SiMysql />,
      color: '#4169E1',
      experience: '2+ years'
    },
    { 
      name: 'Firebase', 
      level: 86, 
      category: 'database', 
      icon: <SiFirebase />,
      color: '#FFCA28',
      experience: '2+ years'
    },
    { 
      name: 'Redis', 
      level: 84, 
      category: 'database', 
      icon: <SiRedis />,
      color: '#DC382D',
      experience: '1+ years'
    },

    // DevOps & Tools
    { 
      name: 'Git', 
      level: 94, 
      category: 'devops', 
      icon: <FaGit />,
      color: '#2496ED',
      experience: '2+ years'
    },
    { 
      name: 'AWS', 
      level: 83, 
      category: 'devops', 
      icon: <FaAws />,
      color: '#FF9900',
      experience: '2+ years'
    },
    { 
      name: 'GitHub', 
      level: 94, 
      category: 'devops', 
      icon: <FaGithub />,
      color: '#181717',
      experience: '2+ years'
    },
    { 
      name: 'CI/CD', 
      level: 85, 
      category: 'devops', 
      icon: <FaTools />,
      color: '#4ECDC4',
      experience: '2+ years'
    },
    { 
      name: 'Testing', 
      level: 89, 
      category: 'devops', 
      icon: <FaTools />,
      color: '#FF6B6B',
      experience: '2+ years'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            const skill = skills[skillId];
            
            setAnimatedSkills(prev => ({
              ...prev,
              [skillId]: skill.level
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.skill-card').forEach((el, index) => {
      el.dataset.skillId = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-page">
      {/* ===== HERO SECTION ===== */}
      <section className="skills-hero section">
        <div className="container">
          <div className="skills-hero-content">
            <div className="text-tag">Expertise</div>
            <h1 className="hero-title">
              Technical <span className="text-gradient">Skills</span> & Expertise
            </h1>
            <p className="hero-description">
              With over 2 years of professional experience, I've developed expertise 
              across the full stack. From pixel-perfect designs to scalable backend 
              systems, I bring a comprehensive skill set to every project.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS OVERVIEW ===== */}
      <section className="skills-overview section">
        <div className="container">
          <div className="section-header center">
            <h2>My Skillset</h2>
            <p>A comprehensive overview of my technical capabilities</p>
          </div>

          <div className="skills-categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS GRID ===== */}
      <section className="skills-grid-section section">
        <div className="container">
          <div className="skills-container">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card" data-skill-id={index}>
                <div className="skill-card-header">
                  <div 
                    className="skill-icon"
                    style={{ color: skill.color, backgroundColor: `${skill.color}20` }}
                  >
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                </div>

                <div className="skill-progress-section">
                  <div className="skill-level">
                    <span className="level-label">Proficiency</span>
                    <span className="level-percent">
                      {animatedSkills[index] || 0}%
                    </span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill"
                      style={{ 
                        width: `${animatedSkills[index] || 0}%`,
                        backgroundColor: skill.color,
                        transition: `width 1.5s ease ${index * 0.05}s`
                      }}
                    ></div>
                  </div>
                </div>

                <div className="skill-tags">
                  <span className="skill-tag">{skill.category}</span>
                  <span className="skill-tag">Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS BREAKDOWN ===== */}
      <section className="skills-breakdown section">
        <div className="container">
          <div className="section-header center">
            <h2>Skills Breakdown</h2>
            <p>Detailed overview of my expertise across different domains</p>
          </div>

          <div className="breakdown-grid">
            <div className="breakdown-card">
              <div className="breakdown-header">
                <div className="breakdown-icon">
                  <FaCode />
                </div>
                <h3>Frontend Development</h3>
              </div>
              <p className="breakdown-description">
                Building responsive, interactive user interfaces with modern frameworks 
                and libraries. Expertise in React ecosystem and performance optimization.
              </p>
              <div className="breakdown-stats">
                <div className="breakdown-stat">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">React</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">94%</span>
                  <span className="stat-label">JavaScript</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">96%</span>
                  <span className="stat-label">Bootstrap</span>
                </div>
              </div>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-header">
                <div className="breakdown-icon">
                  <FaPaintBrush />
                </div>
                <h3>UI/UX Design</h3>
              </div>
              <p className="breakdown-description">
                Creating intuitive, user-centered designs with a focus on usability 
                and aesthetics. From wireframes to high-fidelity prototypes.
              </p>
              <div className="breakdown-stats">
                <div className="breakdown-stat">
                  <span className="stat-value">91%</span>
                  <span className="stat-label">Figma</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">73%</span>
                  <span className="stat-label">UI Design</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">91%</span>
                  <span className="stat-label">Prototyping</span>
                </div>
              </div>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-header">
                <div className="breakdown-icon">
                  <FaServer />
                </div>
                <h3>Backend Development</h3>
              </div>
              <p className="breakdown-description">
                Building scalable server-side applications, APIs, and microservices. 
                Focus on performance, security, and maintainability.
              </p>
              <div className="breakdown-stats">
                <div className="breakdown-stat">
                  <span className="stat-value">90%</span>
                  <span className="stat-label">Node.js</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">89%</span>
                  <span className="stat-label">REST APIs</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">90%</span>
                  <span className="stat-label">Express</span>
                </div>
              </div>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-header">
                <div className="breakdown-icon">
                  <FaCloud />
                </div>
                <h3>DevOps & Tools</h3>
              </div>
              <p className="breakdown-description">
                Implementing CI/CD pipelines, containerization, and cloud infrastructure. 
                Ensuring smooth deployment and reliable operations.
              </p>
              <div className="breakdown-stats">
                <div className="breakdown-stat">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">Git</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">85%</span>
                  <span className="stat-label">CI/CD</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-value">83%</span>
                  <span className="stat-label">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEARNING SECTION ===== */}
      <section className="learning-section section">
        <div className="container">
          <div className="learning-content">
            <div className="learning-text">
              <h2>Currently Learning</h2>
              <p>
                Technology never stands still, and neither do I. I'm constantly exploring 
                new tools and techniques to stay at the forefront of web development.
              </p>
              <div className="learning-list">
                <div className="learning-item">
                  <div className="learning-icon">⚡</div>
                  <div>
                    <h4>Advanced React Patterns</h4>
                    <p>Mastering performance optimization and advanced hooks</p>
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">🚀</div>
                  <div>
                    <h4>Web3 & Blockchain</h4>
                    <p>Exploring decentralized applications and smart contracts</p>
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">🧠</div>
                  <div>
                    <h4>Machine Learning</h4>
                    <p>Integrating AI capabilities into web applications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learning-image">
              <div className="learning-visual">
                <div className="visual-circle circle-1"></div>
                <div className="visual-circle circle-2"></div>
                <div className="visual-circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="skills-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Leverage These Skills?</h2>
              <p>
                Let's put my expertise to work on your next project. Whether you need 
                a beautiful website, a powerful web application, or a complete digital 
                transformation, I've got the skills to make it happen.
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn btn-primary btn-large">
                  Start a Project
                </a>
                <a href="/projects" className="btn btn-secondary btn-large">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;