// src/pages/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Properties Sold' },
    { number: '2500+', label: 'Happy Customers' },
    { number: '25+', label: 'Cities Covered' }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years in real estate industry with expertise in property development and investment.'
    },
    {
      name: 'Priya Patel',
      position: 'Head of Sales',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading our sales team with 12+ years of experience in luxury property sales.'
    },
    {
      name: 'Amit Kumar',
      position: 'Marketing Director',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Digital marketing expert specializing in real estate promotion and lead generation.'
    },
    {
      name: 'Sneha Reddy',
      position: 'Customer Relations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ensuring exceptional customer service and satisfaction in every transaction.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Transparency',
      description: 'We believe in complete honesty and transparency in all our dealings'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Striving for excellence in every aspect of our service delivery'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building long-term relationships based on trust and reliability'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing technology and innovative solutions for better service'
    }
  ];

  const milestones = [
    { year: '2013', event: 'PropertyHub founded in Mumbai' },
    { year: '2015', event: 'Expanded to Delhi and Bangalore' },
    { year: '2018', event: 'Launched online property portal' },
    { year: '2020', event: 'Reached 1000+ property sales milestone' },
    { year: '2022', event: 'Introduced virtual property tours' },
    { year: '2024', event: 'Expanded to 25+ cities across India' }
  ];

  return (
    <div style={styles.aboutPage}>
      {/* Hero Section */}
      <div style={styles.aboutHero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>About PropertyHub</h1>
          <p style={styles.heroSubtitle}>
            Your trusted partner in finding the perfect property for over a decade
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <h3 style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section style={styles.storySection}>
          <div style={styles.storyGrid}>
            <div style={styles.storyContent}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={styles.storyText}>
                Founded in 2013, PropertyHub began with a simple vision: to make real estate 
                transactions transparent, efficient, and hassle-free for everyone. What started 
                as a small team of passionate real estate professionals in Mumbai has now grown 
                into one of India's most trusted property platforms.
              </p>
              <p style={styles.storyText}>
                Over the years, we have helped thousands of families find their dream homes, 
                assisted investors in making smart property decisions, and enabled property 
                owners to get the best value for their assets. Our commitment to excellence 
                and customer satisfaction has been the driving force behind our success.
              </p>
              <p style={styles.storyText}>
                Today, we operate in 25+ cities across India, with a team of over 100 
                experienced professionals who are dedicated to providing you with the best 
                real estate experience possible.
              </p>
            </div>
            <div style={styles.storyImage}>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Story" 
                style={styles.storyImg}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={styles.missionSection}>
          <div style={styles.missionGrid}>
            <div style={styles.missionCard}>
              <div style={styles.missionIcon}>🚀</div>
              <h3 style={styles.missionTitle}>Our Mission</h3>
              <p style={styles.missionText}>
                To revolutionize the real estate industry by providing transparent, 
                technology-driven solutions that make property transactions simple, 
                secure, and satisfying for all parties involved.
              </p>
            </div>
            <div style={styles.missionCard}>
              <div style={styles.missionIcon}>👁️</div>
              <h3 style={styles.missionTitle}>Our Vision</h3>
              <p style={styles.missionText}>
                To become India's most trusted and comprehensive real estate platform, 
                empowering millions of people to make informed property decisions and 
                achieve their real estate dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={styles.valuesSection}>
          <h2 style={styles.sectionTitle}>Our Core Values</h2>
          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} style={styles.valueCard}>
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section style={styles.teamSection}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <p style={styles.teamSubtitle}>
            Dedicated professionals committed to your real estate success
          </p>
          <div style={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={styles.teamImageContainer}>
                  <img src={member.image} alt={member.name} style={styles.teamImage} />
                </div>
                <div style={styles.teamInfo}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamPosition}>{member.position}</p>
                  <p style={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section style={styles.timelineSection}>
          <h2 style={styles.sectionTitle}>Our Journey</h2>
          <div style={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineYear}>{milestone.year}</div>
                <div style={styles.timelineEvent}>{milestone.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Start Your Property Journey?</h2>
            <p style={styles.ctaSubtitle}>
              Let our experienced team help you find the perfect property
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.ctaButton}>Browse Properties</button>
              <button style={styles.ctaButtonSecondary}>Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  aboutPage: {
    background: '#f8f9fa',
    minHeight: '100vh'
  },
  aboutHero: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
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
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto'
  },
  statsSection: {
    marginBottom: '5rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
  },
  statCard: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#3498db',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '500'
  },
  storySection: {
    marginBottom: '5rem'
  },
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  storyContent: {
    padding: '2rem'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#2c3e50'
  },
  storyText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '1.5rem'
  },
  storyImage: {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
  },
  storyImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  },
  missionSection: {
    marginBottom: '5rem'
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem'
  },
  missionCard: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  missionIcon: {
    fontSize: '4rem',
    marginBottom: '1.5rem'
  },
  missionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  missionText: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#666'
  },
  valuesSection: {
    marginBottom: '5rem'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  valueCard: {
    background: 'white',
    padding: '2.5rem 2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  valueIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  valueTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  valueDescription: {
    color: '#666',
    lineHeight: '1.6'
  },
  teamSection: {
    marginBottom: '5rem'
  },
  teamSubtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '3rem'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  teamCard: {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  teamImageContainer: {
    height: '250px',
    overflow: 'hidden'
  },
  teamImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  teamInfo: {
    padding: '2rem'
  },
  teamName: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  teamPosition: {
    fontSize: '1rem',
    color: '#3498db',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  teamBio: {
    color: '#666',
    lineHeight: '1.6'
  },
  timelineSection: {
    marginBottom: '5rem'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '2rem'
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    position: 'relative'
  },
  timelineYear: {
    background: 'linear-gradient(45deg, #3498db, #2980b9)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    fontWeight: '600',
    minWidth: '80px',
    textAlign: 'center',
    marginRight: '2rem'
  },
  timelineEvent: {
    background: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    flex: 1,
    color: '#666'
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
    padding: '4rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '4rem'
  },
  ctaContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  ctaSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  ctaButton: {
    background: 'white',
    color: '#27ae60',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  ctaButtonSecondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default About;
