import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">MD</div>
          <span className="brand-text">Kiros</span>
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span> </span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-social">
          <a 
            href="https://github.com/misgana-desalegne" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <GithubIcon />
          </a>
          <a 
            href="mailto:misgana21son@gmail.com" 
            className="social-link"
            title="Email"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.112.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.34.724-4.042-1.613-4.042-1.613-.545-1.386-1.333-1.755-1.333-1.755-1.088-.745.082-.73.082-.73 1.203.084 1.838 1.235 1.838 1.235 1.07 1.84 2.806 1.307 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.534-1.527.117-3.18 0 0 1.01-.322 3.3 1.233.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.555 3.285-1.233 3.285-1.233.654 1.653.243 2.877.12 3.18.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.375.78 1.107.78 2.23 0 1.61-.015 2.91-.015 3.295 0 .315.192.69.795.575C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default NavigationBar;
