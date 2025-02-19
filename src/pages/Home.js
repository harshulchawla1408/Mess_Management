import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-image">
          <h1 className="hero-title">Hostel Mess Management</h1>
          <p className="hero-description">Bringing you nutritious, delicious meals every day in a clean, welcoming environment.</p>
          <Link to="/menu" className="btn btn-primary hero-button">Explore Menu</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content" >
          <img src="/images/mess.png" alt="Hostel Mess" className="about-image" />
          <div className="about-text">
            <h2>About Our Hostel Mess</h2>
            <p>Our hostel mess is committed to delivering fresh, wholesome meals tailored to student preferences. With a menu crafted to balance taste and nutrition, we aim to create a home-like dining experience. Each meal is prepared with quality ingredients and hygienic practices to ensure both flavor and health, making your daily dining experience something to look forward to.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h1 className="section-title">Our Services</h1>
        <div className="services-cards">
          <div className="service-card">
            <img src="/images/menu.jpg" alt="Menu" />
            <h3>Daily Menu</h3>
            <p>Enjoy a diverse selection of meals crafted for health and taste.</p>
            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
          </div>
          <div className="service-card">
            <img src="/images/bill.jpg" alt="Bill" />
            <h3>Billing</h3>
            <p>Easy billing system to track your meal expenses and keep records.</p>
            <Link to="/billmanage" className="btn btn-secondary">Check Bill</Link>
          </div>
          <div className="service-card">
            <img src="/images/feedback.jpg" alt="Feedback" />
            <h3>Feedback</h3>
            <p>Your feedback helps us improve our service continually.</p>
            <Link to="/feedback" className="btn btn-secondary">Give Feedback</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
