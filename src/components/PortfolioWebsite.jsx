import React from 'react';
import './style.css';

const PortfolioWebsite = () => {
  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="navbar">
          <img src={require('./logo.png')} alt="Logo" className="logo" />

          <nav className="nav-links">
            <ul>
              <li><a href="#hero" className="nav-link">HOME</a></li>
              <li><a href="#about" className="nav-link">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Welcome to</h2>
              <h1>The Importance of Web Development</h1>
              <p>Explore how websites enhance user experience, drive engagement, and build credibility.</p>
              <button type="button" className="btn">LEARN MORE</button>
            </div>
            <div className="hero-image">
              <img src={require('./tpbg.png')} alt="Web Design Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
            <img src={require('./lastna.png')} alt="Web Design" />
            </div>
            <div className="about-text">
              <h2>The Importance of Web Development</h2>
              <h3>Why Good Web Development Matters</h3>
              <p>Good Web Development is crucial for creating a positive user experience and ensuring that a website is easy to navigate. Here’s why good web design is essential:</p>
              <ul>
                <li><strong>First Impressions Matter:</strong> Your website is often the first point of contact with potential customers. A well-designed website creates a strong first impression and establishes credibility.</li>
                <li><strong>User Experience:</strong> Good design enhances usability, ensuring that visitors can easily find what they’re looking for, leading to higher satisfaction and retention rates.</li>
                <li><strong>Mobile Responsiveness:</strong> With the rise of mobile browsing, responsive design ensures that your website looks and functions well on all devices, improving accessibility and reach.</li>
                <li><strong>Brand Identity:</strong> Effective web design reinforces your brand identity through visual elements, colors, and layout, helping to create a cohesive brand image.</li>
                <li><strong>SEO Benefits:</strong> Well-structured websites with optimized design elements improve search engine rankings, making it easier for users to find you online.</li>
              </ul>
              <button type="button" className="btn">EXPLORE FURTHER</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; All rights reserved!</p>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioWebsite;