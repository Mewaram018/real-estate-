// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: '#3498db'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['info@propertyhub.com', 'support@propertyhub.com'],
      color: '#e74c3c'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Business District', 'Mumbai, Maharashtra 400001'],
      color: '#27ae60'
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat - Sun: 10:00 AM - 5:00 PM'],
      color: '#f39c12'
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Business District, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      email: 'mumbai@propertyhub.com'
    },
    {
      city: 'Delhi',
      address: '456 Corporate Hub, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43211',
      email: 'delhi@propertyhub.com'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Koramangala, Bangalore 560034',
      phone: '+91 98765 43212',
      email: 'bangalore@propertyhub.com'
    }
  ];

  return (
    <div style={styles.contactPage}>
      {/* Hero Section */}
      <div style={styles.contactHero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Get In Touch</h1>
          <p style={styles.heroSubtitle}>We're here to help you find your perfect property</p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Contact Info Cards */}
        <section style={styles.contactInfoSection}>
          <div style={styles.contactInfoGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} style={{...styles.infoCard, borderTop: `4px solid ${info.color}`}}>
                <div style={styles.infoIcon}>{info.icon}</div>
                <h3 style={styles.infoTitle}>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} style={styles.infoDetail}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section style={styles.contactFormSection}>
          <div style={styles.formContainer}>
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <p style={styles.formSubtitle}>Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying Property</option>
                      <option value="selling">Selling Property</option>
                      <option value="renting">Renting Property</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    style={styles.textarea}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" style={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            <div style={styles.mapSection}>
              <h3 style={styles.mapTitle}>Find Us Here</h3>
              <div style={styles.mapPlaceholder}>
                <div style={styles.mapContent}>
                  <h4>PropertyHub Head Office</h4>
                  <p>123 Business District<br />Bandra West, Mumbai 400050</p>
                  <button style={styles.directionsBtn}>Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section style={styles.officesSection}>
          <h2 style={styles.sectionTitle}>Our Office Locations</h2>
          <div style={styles.officesGrid}>
            {offices.map((office, index) => (
              <div key={index} style={styles.officeCard}>
                <h3 style={styles.officeCity}>{office.city}</h3>
                <div style={styles.officeDetails}>
                  <p style={styles.officeAddress}>
                    <span style={styles.officeIcon}>📍</span>
                    {office.address}
                  </p>
                  <p style={styles.officeContact}>
                    <span style={styles.officeIcon}>📞</span>
                    {office.phone}
                  </p>
                  <p style={styles.officeContact}>
                    <span style={styles.officeIcon}>📧</span>
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section style={styles.quickLinksSection}>
          <div style={styles.quickLinksContent}>
            <h2 style={styles.quickLinksTitle}>Need Quick Answers?</h2>
            <p style={styles.quickLinksSubtitle}>Check out our frequently asked questions</p>
            <div style={styles.quickLinksButtons}>
              <button style={styles.faqBtn}>View FAQ</button>
              <button style={styles.chatBtn}>Live Chat</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  contactPage: {
    background: '#f8f9fa',
    minHeight: '100vh'
  },
  contactHero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '5rem 0',
    textAlign: 'center',
    marginBottom: '4rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '700'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    opacity: 0.9
  },
  contactInfoSection: {
    marginBottom: '4rem'
  },
  contactInfoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  infoCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  infoIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  infoTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  infoDetail: {
    color: '#666',
    marginBottom: '0.5rem',
    lineHeight: '1.6'
  },
  contactFormSection: {
    marginBottom: '4rem'
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    alignItems: 'start'
  },
  formContent: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
  },
  formTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  formSubtitle: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#333'
  },
  input: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  select: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
  },
  textarea: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'all 0.3s ease'
  },
  submitBtn: {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '10px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem'
  },
  mapSection: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '2rem'
  },
  mapTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  mapPlaceholder: {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: '300px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ddd'
  },
  mapContent: {
    textAlign: 'center'
  },
  directionsBtn: {
    background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  officesSection: {
    marginBottom: '4rem'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2c3e50'
  },
  officesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  officeCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  officeCity: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#667eea',
    borderBottom: '2px solid #667eea',
    paddingBottom: '0.5rem'
  },
  officeDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  officeAddress: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    color: '#666',
    lineHeight: '1.6'
  },
  officeContact: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666'
  },
  officeIcon: {
    fontSize: '1.2rem'
  },
  quickLinksSection: {
    background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
    padding: '4rem 2rem',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
    marginBottom: '4rem'
  },
  quickLinksContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  quickLinksTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  quickLinksSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  quickLinksButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  faqBtn: {
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  chatBtn: {
    background: 'white',
    color: '#8e44ad',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  }
};

export default Contact;
