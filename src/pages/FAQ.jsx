// src/pages/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', name: 'General', icon: '❓' },
    { id: 'buying', name: 'Buying', icon: '🏠' },
    { id: 'selling', name: 'Selling', icon: '💰' },
    { id: 'renting', name: 'Renting', icon: '🔑' },
    { id: 'legal', name: 'Legal', icon: '⚖️' },
    { id: 'finance', name: 'Finance', icon: '🏦' }
  ];

  const faqs = {
    general: [
      {
        question: "What is PropertyHub and how does it work?",
        answer: "PropertyHub is a comprehensive real estate platform that connects buyers, sellers, and renters. We provide verified property listings, expert guidance, and end-to-end services to make your property journey smooth and transparent."
      },
      {
        question: "Is PropertyHub's service free for users?",
        answer: "Yes, browsing properties and basic services are completely free for users. We charge a small commission only when a transaction is successfully completed, ensuring our interests are aligned with yours."
      },
      {
        question: "How do I create an account on PropertyHub?",
        answer: "You can create an account by clicking on the 'Sign Up' button on our homepage. Fill in your basic details, verify your email, and you're ready to start exploring properties!"
      },
      {
        question: "How can I contact PropertyHub support?",
        answer: "You can reach us through multiple channels: call us at +91 98765 43210, email us at support@propertyhub.com, or use our live chat feature available 24/7 on our website."
      }
    ],
    buying: [
      {
        question: "What documents do I need to buy a property?",
        answer: "Key documents include: PAN card, Aadhaar card, income proof (salary slips, bank statements), bank loan pre-approval letter, and property-related documents like sale deed, NOC, and occupancy certificate."
      },
      {
        question: "How do I get a home loan?",
        answer: "We partner with leading banks to help you get home loans at competitive rates. Our experts will assist you with document preparation, application process, and ensure quick approval."
      },
      {
        question: "What are the additional costs involved in buying a property?",
        answer: "Additional costs include stamp duty (5-10% of property value), registration charges (1-2%), legal fees, home loan processing fees, and maintenance deposits. Budget for 10-15% extra over the property price."
      },
      {
        question: "How do I verify if a property is legally clear?",
        answer: "We provide comprehensive legal verification services. Our experts check title documents, NOCs, approvals, and ensure the property is free from any legal disputes before you proceed with the purchase."
      }
    ],
    selling: [
      {
        question: "How do I determine the right price for my property?",
        answer: "We provide free property valuation based on current market trends, location analysis, and comparable sales. Our experts will help you set a competitive price that attracts buyers while maximizing your returns."
      },
      {
        question: "What documents do I need to sell my property?",
        answer: "Required documents include original sale deed, property tax receipts, NOC from society/builder, occupancy certificate, latest utility bills, and your identity proofs."
      },
      {
        question: "How long does it take to sell a property?",
        answer: "With our marketing reach and expert guidance, properties typically sell within 30-60 days. However, the timeline depends on factors like location, pricing, market conditions, and property condition."
      },
      {
        question: "What is PropertyHub's commission for selling?",
        answer: "Our commission is competitive and transparent, typically 1-2% of the sale price. We only charge when your property is successfully sold, ensuring we're motivated to get you the best deal."
      }
    ],
    renting: [
      {
        question: "How do I find a rental property?",
        answer: "Use our advanced search filters to find properties based on your budget, location, and requirements. You can also set up alerts to get notified when new properties matching your criteria are listed."
      },
      {
        question: "What is the typical security deposit for rental properties?",
        answer: "Security deposits usually range from 2-10 months of rent, depending on the location and property type. In metro cities, it's typically 2-3 months, while in other areas it might be higher."
      },
      {
        question: "What should I check before renting a property?",
        answer: "Verify the landlord's ownership documents, check for any structural issues, ensure all amenities work properly, understand maintenance responsibilities, and carefully read the rental agreement terms."
      },
      {
        question: "Can PropertyHub help with rental agreements?",
        answer: "Yes, we provide assistance with rental agreement preparation, ensuring all legal clauses are covered and both parties' interests are protected. We also help with police verification and other formalities."
      }
    ],
    legal: [
      {
        question: "What legal checks should I do before buying a property?",
        answer: "Essential checks include verifying clear title, checking for any pending litigation, ensuring all approvals are in place, confirming tax payments are up to date, and validating the seller's right to sell."
      },
      {
        question: "What is RERA and how does it protect buyers?",
        answer: "RERA (Real Estate Regulatory Authority) is a law that protects homebuyers' interests. It ensures transparency in the real estate sector, timely delivery of projects, and provides a grievance redressal mechanism."
      },
      {
        question: "What happens if I find legal issues after purchase?",
        answer: "While we conduct thorough legal verification, if any issues arise, we provide legal support and guidance. We also recommend title insurance to protect against unforeseen legal complications."
      },
      {
        question: "Do I need a lawyer for property transactions?",
        answer: "While not mandatory, we highly recommend legal consultation for property transactions. Our network of experienced property lawyers can guide you through the legal aspects and ensure a smooth transaction."
      }
    ],
    finance: [
      {
        question: "What are the current home loan interest rates?",
        answer: "Interest rates vary between 8.5% to 12% depending on the bank, loan amount, and your credit profile. We help you compare rates from multiple lenders and choose the best option for your needs."
      },
      {
        question: "How much home loan can I get?",
        answer: "Typically, banks offer loans up to 80-90% of the property value. The loan amount also depends on your income, existing EMIs, credit score, and repayment capacity. Use our EMI calculator to estimate your eligibility."
      },
      {
        question: "What is the minimum down payment required?",
        answer: "For home loans, you typically need to pay 10-20% as down payment. For properties above ₹30 lakhs, the minimum down payment is 20%. We can help you plan your finances accordingly."
      },
      {
        question: "Can I get tax benefits on home loans?",
        answer: "Yes, you can claim deductions under Section 80C for principal repayment (up to ₹1.5 lakhs) and Section 24 for interest payment (up to ₹2 lakhs). Additional benefits are available for first-time homebuyers."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div style={styles.faqPage}>
      {/* Hero Section */}
      <div style={styles.faqHero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Frequently Asked Questions</h1>
          <p style={styles.heroSubtitle}>
            Find answers to common questions about buying, selling, and renting properties
          </p>
          <div style={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search your question..."
              style={styles.searchInput}
            />
            <button style={styles.searchBtn}>🔍</button>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        {/* Quick Stats */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>❓</div>
              <h3 style={styles.statNumber}>50+</h3>
              <p style={styles.statLabel}>FAQs Answered</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>⏱️</div>
              <h3 style={styles.statNumber}>&lt;24hrs</h3>
              <p style={styles.statLabel}>Response Time</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>💬</div>
              <h3 style={styles.statNumber}>24/7</h3>
              <p style={styles.statLabel}>Support Available</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>👥</div>
              <h3 style={styles.statNumber}>1000+</h3>
              <p style={styles.statLabel}>Queries Resolved</p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section style={styles.categorySection}>
          <h2 style={styles.sectionTitle}>Browse by Category</h2>
          <div style={styles.categoryNav}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  ...styles.categoryBtn,
                  ...(activeCategory === category.id ? styles.categoryBtnActive : {})
                }}
              >
                <span style={styles.categoryIcon}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Content */}
        <section style={styles.faqContent}>
          <div style={styles.faqContainer}>
            <div style={styles.faqList}>
              <h3 style={styles.categoryTitle}>
                {categories.find(cat => cat.id === activeCategory)?.icon} {" "}
                {categories.find(cat => cat.id === activeCategory)?.name} Questions
              </h3>
              {faqs[activeCategory]?.map((faq, index) => (
                <div key={index} style={styles.faqItem}>
                  <button 
                    onClick={() => toggleFAQ(index)}
                    style={styles.faqQuestion}
                  >
                    <span style={styles.questionText}>{faq.question}</span>
                    <span style={{
                      ...styles.faqToggle,
                      ...(openFAQ === index ? styles.faqToggleOpen : {})
                    }}>
                      +
                    </span>
                  </button>
                  <div style={{
                    ...styles.faqAnswer,
                    ...(openFAQ === index ? styles.faqAnswerOpen : {})
                  }}>
                    <p style={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.faqSidebar}>
              <div style={styles.helpCard}>
                <h4 style={styles.helpTitle}>Still have questions?</h4>
                <p style={styles.helpText}>
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div style={styles.helpButtons}>
                  <button style={styles.contactBtn}>Contact Support</button>
                  <button style={styles.chatBtn}>Live Chat</button>
                </div>
              </div>

              <div style={styles.resourceCard}>
                <h4 style={styles.resourceTitle}>Helpful Resources</h4>
                <ul style={styles.resourceList}>
                  <li style={styles.resourceItem}>
                    <a href="/blog" style={styles.resourceLink}>📖 Property Buying Guide</a>
                  </li>
                  <li style={styles.resourceItem}>
                    <a href="/blog" style={styles.resourceLink}>💡 Investment Tips</a>
                  </li>
                  <li style={styles.resourceItem}>
                    <a href="/blog" style={styles.resourceLink}>📋 Legal Checklist</a>
                  </li>
                  <li style={styles.resourceItem}>
                    <a href="/blog" style={styles.resourceLink}>🏦 Loan Calculator</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Need Personal Assistance?</h2>
            <p style={styles.ctaSubtitle}>
              Our property experts are available to answer your specific questions
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.primaryBtn}>Schedule a Call</button>
              <button style={styles.secondaryBtn}>WhatsApp Us</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  faqPage: {
    background: '#f8f9fa',
    minHeight: '100vh'
  },
  faqHero: {
    background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
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
    marginBottom: '2rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto 2rem'
  },
  searchBox: {
    display: 'flex',
    maxWidth: '500px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '25px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  searchInput: {
    flex: 1,
    padding: '1rem 1.5rem',
    border: 'none',
    fontSize: '1rem',
    outline: 'none'
  },
  searchBtn: {
    background: 'linear-gradient(45deg, #9b59b6, #8e44ad)',
    color: 'white',
    border: 'none',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  statsSection: {
    marginBottom: '4rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  statCard: {
    textAlign: 'center',
    padding: '1rem'
  },
  statIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#9b59b6',
    marginBottom: '0.5rem'
  },
  statLabel: {
    color: '#666',
    fontSize: '1rem'
  },
  categorySection: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2c3e50'
  },
  categoryNav: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  categoryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#f8f9fa',
    border: '2px solid #e1e8ed',
    color: '#666',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  categoryBtnActive: {
    background: 'linear-gradient(45deg, #9b59b6, #8e44ad)',
    borderColor: '#9b59b6',
    color: 'white'
  },
  categoryIcon: {
    fontSize: '1.2rem'
  },
  faqContent: {
    marginBottom: '4rem'
  },
  faqContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    alignItems: 'start'
  },
  faqList: {
    background: 'white',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  categoryTitle: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
    color: '#2c3e50',
    borderBottom: '2px solid #9b59b6',
    paddingBottom: '0.5rem'
  },
  faqItem: {
    borderBottom: '1px solid #eee',
    marginBottom: '0'
  },
  faqQuestion: {
    width: '100%',
    background: 'none',
    border: 'none',
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  questionText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    textAlign: 'left'
  },
  faqToggle: {
    fontSize: '1.5rem',
    color: '#9b59b6',
    fontWeight: '600',
    transition: 'transform 0.3s ease'
  },
  faqToggleOpen: {
    transform: 'rotate(45deg)'
  },
  faqAnswer: {
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },
  faqAnswerOpen: {
    maxHeight: '200px',
    paddingBottom: '1.5rem'
  },
  answerText: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '1rem'
  },
  faqSidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  helpCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center'
  },
  helpTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  helpText: {
    marginBottom: '2rem',
    opacity: 0.9,
    lineHeight: '1.6'
  },
  helpButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  contactBtn: {
    background: 'white',
    color: '#667eea',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  chatBtn: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  resourceCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  resourceTitle: {
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  resourceList: {
    listStyle: 'none',
    padding: '0'
  },
  resourceItem: {
    marginBottom: '1rem'
  },
  resourceLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease'
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
  primaryBtn: {
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
  secondaryBtn: {
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

export default FAQ;
