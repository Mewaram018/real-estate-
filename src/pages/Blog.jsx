// src/pages/Blog.jsx
import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'buying', name: 'Buying Guide' },
    { id: 'selling', name: 'Selling Tips' },
    { id: 'investment', name: 'Investment' },
    { id: 'trends', name: 'Market Trends' },
    { id: 'legal', name: 'Legal Advice' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for First-Time Home Buyers in India',
      excerpt: 'Navigate the complex world of real estate with confidence. Learn the essential steps every first-time buyer should know before making their dream purchase.',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'buying',
      author: 'Rajesh Sharma',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['Home Buying', 'Tips', 'First-time Buyers']
    },
    {
      id: 2,
      title: 'Real Estate Market Trends 2024: What to Expect',
      excerpt: 'Comprehensive analysis of the Indian real estate market trends for 2024, including price predictions, emerging locations, and investment opportunities.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'trends',
      author: 'Priya Patel',
      date: 'March 12, 2024',
      readTime: '12 min read',
      tags: ['Market Analysis', 'Trends', 'Investment']
    },
    {
      id: 3,
      title: 'How to Sell Your Property Fast: 7 Proven Strategies',
      excerpt: 'Discover effective strategies to sell your property quickly and at the best price. From staging to pricing, learn what works in today\'s market.',
      image: 'https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'selling',
      author: 'Amit Kumar',
      date: 'March 10, 2024',
      readTime: '6 min read',
      tags: ['Selling Tips', 'Property Sale', 'Marketing']
    },
    {
      id: 4,
      title: 'Understanding Home Loan EMI: Complete Guide',
      excerpt: 'Everything you need to know about home loan EMIs, interest rates, and how to choose the best loan option for your financial situation.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'buying',
      author: 'Sneha Reddy',
      date: 'March 8, 2024',
      readTime: '10 min read',
      tags: ['Home Loan', 'EMI', 'Finance']
    },
    {
      id: 5,
      title: 'Real Estate Investment: Commercial vs Residential',
      excerpt: 'Compare commercial and residential real estate investments. Learn about returns, risks, and which option suits your investment goals better.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'investment',
      author: 'Karan Singh',
      date: 'March 5, 2024',
      readTime: '15 min read',
      tags: ['Investment', 'Commercial', 'Residential']
    },
    {
      id: 6,
      title: 'Legal Documents Required for Property Purchase',
      excerpt: 'Complete checklist of legal documents you need to verify before buying any property. Avoid legal complications with this comprehensive guide.',
      image: 'https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'legal',
      author: 'Legal Team',
      date: 'March 3, 2024',
      readTime: '9 min read',
      tags: ['Legal', 'Documents', 'Property Purchase']
    }
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const filteredPosts = selectedCategory === 'all' 
    ? otherPosts 
    : otherPosts.filter(post => post.category === selectedCategory);

  return (
    <div style={styles.blogPage}>
      {/* Hero Section */}
      <div style={styles.blogHero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>PropertyHub Blog</h1>
          <p style={styles.heroSubtitle}>
            Stay updated with the latest real estate news, tips, and market insights
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Featured Post */}
        <section style={styles.featuredSection}>
          <div style={styles.featuredPost}>
            <div style={styles.featuredImage}>
              <img src={featuredPost.image} alt={featuredPost.title} style={styles.featuredImg} />
              <div style={styles.featuredBadge}>Featured</div>
            </div>
            <div style={styles.featuredContent}>
              <div style={styles.postMeta}>
                <span style={styles.category}>{categories.find(cat => cat.id === featuredPost.category)?.name}</span>
                <span style={styles.readTime}>{featuredPost.readTime}</span>
              </div>
              <h2 style={styles.featuredTitle}>{featuredPost.title}</h2>
              <p style={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div style={styles.authorInfo}>
                <div style={styles.authorDetails}>
                  <span style={styles.authorName}>By {featuredPost.author}</span>
                  <span style={styles.postDate}>{featuredPost.date}</span>
                </div>
                <button style={styles.readMoreBtn}>Read Full Article</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section style={styles.filterSection}>
          <div style={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  ...styles.categoryBtn,
                  ...(selectedCategory === category.id ? styles.categoryBtnActive : {})
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section style={styles.postsSection}>
          <div style={styles.postsGrid}>
            {filteredPosts.map(post => (
              <article key={post.id} style={styles.blogCard}>
                <div style={styles.cardImage}>
                  <img src={post.image} alt={post.title} style={styles.cardImg} />
                  <div style={styles.cardCategory}>
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.cardMeta}>
                    <span style={styles.cardDate}>{post.date}</span>
                    <span style={styles.cardReadTime}>{post.readTime}</span>
                  </div>
                  <h3 style={styles.cardTitle}>{post.title}</h3>
                  <p style={styles.cardExcerpt}>{post.excerpt}</p>
                  <div style={styles.cardTags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} style={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div style={styles.cardFooter}>
                    <span style={styles.cardAuthor}>By {post.author}</span>
                    <button style={styles.cardReadBtn}>Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={styles.newsletterSection}>
          <div style={styles.newsletterContent}>
            <h2 style={styles.newsletterTitle}>Stay Updated</h2>
            <p style={styles.newsletterSubtitle}>
              Get the latest real estate insights delivered to your inbox
            </p>
            <form style={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                style={styles.newsletterInput}
              />
              <button type="submit" style={styles.newsletterBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Popular Topics */}
        <section style={styles.topicsSection}>
          <h2 style={styles.sectionTitle}>Popular Topics</h2>
          <div style={styles.topicsGrid}>
            <div style={styles.topicCard}>
              <div style={styles.topicIcon}>🏠</div>
              <h3 style={styles.topicTitle}>Home Buying Guide</h3>
              <p style={styles.topicDescription}>Complete guides for first-time and experienced buyers</p>
            </div>
            <div style={styles.topicCard}>
              <div style={styles.topicIcon}>💰</div>
              <h3 style={styles.topicTitle}>Investment Tips</h3>
              <p style={styles.topicDescription}>Smart strategies for real estate investment</p>
            </div>
            <div style={styles.topicCard}>
              <div style={styles.topicIcon}>📊</div>
              <h3 style={styles.topicTitle}>Market Analysis</h3>
              <p style={styles.topicDescription}>Latest trends and market insights</p>
            </div>
            <div style={styles.topicCard}>
              <div style={styles.topicIcon}>⚖️</div>
              <h3 style={styles.topicTitle}>Legal Advice</h3>
              <p style={styles.topicDescription}>Legal guidance for property transactions</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  blogPage: {
    background: '#f8f9fa',
    minHeight: '100vh'
  },
  blogHero: {
    background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
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
  featuredSection: {
    marginBottom: '4rem'
  },
  featuredPost: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '0'
  },
  featuredImage: {
    position: 'relative',
    height: '400px'
  },
  featuredImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  featuredBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  featuredContent: {
    padding: '3rem'
  },
  postMeta: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem'
  },
  category: {
    background: '#e8f4f8',
    color: '#2980b9',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  readTime: {
    color: '#666',
    fontSize: '0.9rem'
  },
  featuredTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#2c3e50',
    lineHeight: '1.3'
  },
  featuredExcerpt: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '2rem'
  },
  authorInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  authorDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem'
  },
  authorName: {
    fontWeight: '600',
    color: '#333'
  },
  postDate: {
    color: '#666',
    fontSize: '0.9rem'
  },
  readMoreBtn: {
    background: 'linear-gradient(45deg, #f39c12, #e67e22)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  filterSection: {
    marginBottom: '3rem'
  },
  categoryFilter: {
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
    background: 'linear-gradient(45deg, #f39c12, #e67e22)',
    borderColor: '#f39c12',
    color: 'white'
  },
  postsSection: {
    marginBottom: '4rem'
  },
  postsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  blogCard: {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  cardImage: {
    position: 'relative',
    height: '200px'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardCategory: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  cardContent: {
    padding: '2rem'
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  cardDate: {
    color: '#666',
    fontSize: '0.9rem'
  },
  cardReadTime: {
    color: '#f39c12',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50',
    lineHeight: '1.4'
  },
  cardExcerpt: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  },
  cardTags: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  tag: {
    background: '#f8f9fa',
    color: '#666',
    padding: '0.3rem 0.8rem',
    borderRadius: '12px',
    fontSize: '0.8rem'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardAuthor: {
    color: '#333',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  cardReadBtn: {
    background: 'transparent',
    color: '#f39c12',
    border: '2px solid #f39c12',
    padding: '0.6rem 1.2rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  newsletterSection: {
    background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
    padding: '4rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '4rem'
  },
  newsletterContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  newsletterTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  newsletterSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  newsletterForm: {
    display: 'flex',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto'
  },
  newsletterInput: {
    flex: 1,
    padding: '1rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem'
  },
  newsletterBtn: {
    background: 'white',
    color: '#8e44ad',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  topicsSection: {
    marginBottom: '4rem'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2c3e50'
  },
  topicsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  topicCard: {
    background: 'white',
    padding: '2.5rem 2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  topicIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  topicTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  topicDescription: {
    color: '#666',
    lineHeight: '1.6'
  }
};

export default Blog;
