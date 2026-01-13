import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaHome,
  FaUser,
  FaCode,
  FaFolder
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/belaynehkassie01',
      color: '#6e5494'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/belayneh-kassie',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://x.com/bel84583kassie',
      color: '#1da1f2'
    },
  
    {
      icon: <FaBehance />,
      name: 'Behance',
      url: 'https://behance.net/belaynehkassie',
      color: '#1769ff'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/bini.k21',
      color: '#e1306c'
    }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', to: '/', icon: <FaHome /> },
        { name: 'About', to: '/about', icon: <FaUser /> },
        { name: 'Skills', to: '/skills', icon: <FaCode /> },
        { name: 'Projects', to: '/projects', icon: <FaFolder /> },
        { name: 'Contact', to: '/contact', icon: <FaEnvelope /> }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'GitHub', to: 'https://github.com/belaynehkassie01', external: true },
        { name: 'LinkedIn', to: 'https://www.linkedin.com/in/belayneh-kassie', external: true },
        { name: 'Twitter', to: 'https://x.com/bel84583kassie', external: true },
        { name: 'Resume', to: '/assets/files/resume.pdf', external: true }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { name: 'belaynehkassie01@gmail.com', to: 'mailto:belaynehkassie01@gmail.com', external: true },
        { name: '+251 985 979 631', to: 'tel:+251985979631', external: true },
        { name: 'Addis Ababa, Ethiopia', to: '#', external: false }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Belayneh Kassie</h3>
            <p className="footer-tagline">
              UI/UX Designer & Full Stack Developer creating exceptional digital experiences.
            </p>
            
            {/* Social Media Icons */}
            <div className="footer-social">
              <p className="social-label">Follow Me</p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="footer-links-grid">
            {footerLinks.map((column, index) => (
              <div key={index} className="footer-column">
                <h4 className="column-title">{column.title}</h4>
                <ul className="column-links">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="link-item">
                      {link.external ? (
                        <a 
                          href={link.to} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                          {link.icon && <span className="link-icon">{link.icon}</span>}
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.to} className="footer-link">
                          {link.icon && <span className="link-icon">{link.icon}</span>}
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Belayneh Kassie. Made with <FaHeart className="heart-icon" /> 
              All rights reserved.
            </p>
          </div>
          
          <div className="footer-actions">
            <button 
              onClick={scrollToTop} 
              className="back-to-top"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;