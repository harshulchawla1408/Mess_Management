import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#4a76a8',
        color: '#fff',
        padding: '20px 0',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center' }}>

        <div style={{ flex: '1 1 25%', padding: '0 10px', textAlign: 'center' }}>
          <img
            src="/images/logo.png"
            alt="Hostel Logo"
            style={{
              width: '60px',
              height: '60px',
              marginBottom: '8px',
              borderRadius: '50%',
            }}
          />
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Hostel Mess Management</div>

          <p style={{ fontSize: '0.9rem', maxWidth: '200px', margin: '10px auto' }}>
            Delivering healthy, balanced meals with efficient tracking and feedback.
          </p>
        </div>

        <div style={{ flex: '1 1 25%', padding: '0 10px' }}>
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Quick Links</div>
          <div>
            <Link to="/" style={linkStyle}>Home</Link> |{' '}
            <Link to="/menu" style={linkStyle}>Menu</Link> |{' '}
            <Link to="/billmanage" style={linkStyle}>Bill</Link> |{' '}
            <Link to="/feedback" style={linkStyle}>Feedback</Link> |{' '}
          </div>
        </div>

        <div style={{ flex: '1 1 25%', padding: '0 10px' }}>
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Follow Us</div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <img src="/images/l1.png" alt="Facebook" style={iconStyle} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <img src="/images/l2.png" alt="Twitter" style={iconStyle} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <img src="/images/l3.png" alt="Instagram" style={iconStyle} />
            </a>
          </div>
        </div>

        <div style={{ flex: '1 1 25%', padding: '0 10px' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Contact Us</div>
          <p style={{ fontSize: '0.8rem', margin: '5px 0' }}>+123 456 7890</p>
          <p style={{ fontSize: '0.8rem', margin: '5px 0' }}>info@hostelmess.com</p>
          <p style={{ fontSize: '0.8rem', margin: '5px 0' }}>786 Model Town, Jalandhar City, India</p>
        </div>
      </div>

      <div style={{ fontSize: '0.75rem', textAlign: 'center', borderTop: '1px solid #fff', paddingTop: '10px', marginTop: '15px' }}>
        © 2024 Hostel Mess Management System. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '0 5px',
  fontSize: '0.95rem',
};

const socialLinkStyle = {
  display: 'inline-block',
  margin: '0 6px',
};

const iconStyle = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: '1.5px solid #fff',
  padding: '4px',
};

export default Footer;
