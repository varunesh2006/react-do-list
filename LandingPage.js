import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="logo">MyCompany</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to MyCompany</h1>
          <p>Your success is our priority. Let's achieve greatness together.</p>
          <a href="#services" className="cta-button">Learn More</a>
        </section>
        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>We are a leading company in our industry, committed to providing top-quality services to our clients.</p>
        </section>
        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services">
            <div className="service">
              <h3>Service One</h3>
              <p>Description of service one.</p>
            </div>
            <div className="service">
              <h3>Service Two</h3>
              <p>Description of service two.</p>
            </div>
            <div className="service">
              <h3>Service Three</h3>
              <p>Description of service three.</p>
            </div>
          </div>
        </section>
        <section id="team" className="team-section">
          <h2>Our Team</h2>
          <p>Meet the talented individuals behind MyCompany.</p>
        </section>
        <section id="clients" className="clients-section">
          <h2>Our Clients</h2>
          <p>Discover some of the esteemed clients we've had the pleasure to work with.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
