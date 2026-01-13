import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaComment,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaInstagram
} from 'react-icons/fa';
import emailjs from 'emailjs-com';

import '../assets/styles/pages/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'belaynehkassie01@gmail.com',
      subtext: 'Response within 24 hours',
      link: 'mailto:belaynehkassie01@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+251 985 979 631 ',
      subtext: 'Mon - Fri, 9AM - 6PM PST',
      link: 'tel:+251985979631'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Addis Ababa, Ethiopia',
      subtext: 'Open to remote work worldwide'
    },
    {
      icon: <FaClock />,
      title: 'Availability',
      details: 'Open for Projects',
      subtext: 'Freelance & Full-time'
    }
  ];

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
      url: 'https://linkedin.com/in/belayneh-kassie/',
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
      url: 'https://behance.net/alexmorgan',
      color: '#1769ff'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/bini.k21/',
      color: '#e1306c'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get current date and time
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      
      // EmailJS configuration - MATCHES YOUR TEMPLATE
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        date: date,
        time: time,
        message_id: Math.random().toString(36).substr(2, 9)
      };

      console.log('📤 Sending email with:', templateParams);

      // ✅ FINAL CORRECTED LINE WITH ALL IDs
      await emailjs.send(
        'service_yx1zo4m',      // Your Service ID
        'template_z4eeszt',     // ✅ YOUR TEMPLATE ID
        templateParams,
        'cfYc2RzMeqUBQHM-d'     // Your User ID
      );

      // Success state
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      console.error('❌ Status:', error?.status);
      console.error('❌ Text:', error?.text);
      
      let errorMsg = 'Sorry, there was an error sending your message. ';
      
      if (error?.status === 400) {
        errorMsg += 'Please check your template variables match. ';
      } else if (error?.status === 401) {
        errorMsg += 'Authentication failed. Check your IDs. ';
      }
      
      errorMsg += 'Please try again or email me directly.';
      
      setSubmitStatus({
        success: false,
        message: errorMsg
      });
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* ===== HERO SECTION ===== */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="section-title">Contact Me</div>
            <h1 className="hero-title">
              Let's <span className="text-gradient">Work Together</span>
            </h1>
            <p className="hero-description">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO SECTION ===== */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">
                  {info.icon}
                </div>
                <div className="info-content">
                  <h3 className="info-title">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="info-details">
                      {info.details}
                    </a>
                  ) : (
                    <p className="info-details">{info.details}</p>
                  )}
                  <p className="info-subtext">{info.subtext}</p>
                </div>
              </div>
            ))}
          </div>          
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2>Send Me a Message</h2>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            {submitStatus.message && (
              <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                <FaCheckCircle /> {submitStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser /> Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project inquiry, collaboration, etc."
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    <FaComment /> Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="contact-faq">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your typical response time?</h3>
              <p>I usually respond within 24 hours during weekdays. For urgent inquiries, please mention "URGENT" in your subject line.</p>
            </div>

            <div className="faq-item">
              <h3>What information should I include in my message?</h3>
              <p>Please include: project overview, timeline, budget range, and any specific requirements or preferences.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer free consultations?</h3>
              <p>Yes, I offer a free 30-minute consultation call to discuss your project requirements and how I can help.</p>
            </div>

            <div className="faq-item">
              <h3>What types of projects do you take on?</h3>
              <p>Web applications, websites, UI/UX design, and full-stack development projects across various industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's schedule a call to discuss your requirements and how I can help bring your vision to life.
              </p>
              <div className="cta-actions">
                <a href="mailto:belaynehkassie01@gmail.com" className="btn btn-primary btn-large">
                  <FaEnvelope /> Email Me Directly
                </a>
                <a href="tel:+251985979631" className="btn btn-secondary btn-large">
                  <FaPhone /> Call Me
                </a>
              </div>
              
              {/* Social Links in CTA */}
              <div className="cta-social">
                <p className="cta-social-text">Or connect with me on social media:</p>
                <div className="cta-social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-social-icon"
                      style={{ color: social.color }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;