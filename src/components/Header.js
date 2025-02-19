import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#4a76a8',
        padding: '20px 0', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        
        <Link to="/" className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
          <img
            src="/images/logo.png"
            alt="Hostel Logo"
            style={{
              width: '70px', 
              height: '70px',
              marginRight: '15px',
              borderRadius: '50%',
              border: '2px solid #ffffff',
            }}
          />
          <span style={titleStyle}>Hostel Mess Management</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" style={linkStyle}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/billmanage" style={linkStyle}>Bill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback" style={linkStyle}>Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

const titleStyle = {
  fontSize: '2rem', 
  fontWeight: 'bold',
  color: '#ffffff',
  letterSpacing: '1.5px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  fontFamily: 'Verdana, sans-serif',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '10px 20px',
  fontSize: '1.1rem', 
  fontFamily: 'Verdana, sans-serif',
  transition: 'color 0.3s ease',
};

const hoverLinkStyle = {
  color: '#d0e0ff',
};

export default Header;
