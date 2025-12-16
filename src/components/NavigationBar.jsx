import React, { useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [visitCount, setVisitCount] = useState(0);
  const [visitHistory, setVisitHistory] = useState([]);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("visits") || "0", 10);
    const storedHistory = JSON.parse(localStorage.getItem("visitHistory") || "[]");

    const newCount = storedCount + 1;
    const newEntry = {
      time: new Date().toLocaleString(),
      page: window.location.pathname
    };

    localStorage.setItem("visits", newCount.toString());
    localStorage.setItem(
      "visitHistory",
      JSON.stringify([...storedHistory, newEntry])
    );

    setVisitCount(newCount);
    setVisitHistory([...storedHistory, newEntry]);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo on left */}
        <Link to="/" className="navbar-brand" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div className="brand-icon" style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#6366F1",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.25rem"
          }}>K</div>
          <span className="brand-text">Kiros</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>

        <div className="navbar-right" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <a href="https://github.com/misgana-desalegne" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <GithubIcon />
          </a>
          <a href="mailto:misgana21son@gmail.com" className="social-link" title="Email">
            <MailIcon />
          </a>

          {/* Three-dot button on far right */}
          <button
            onClick={openModal}
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            ...
          </button>

          {isOpen && (
            <div style={{
              position: "fixed",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000
            }}>
              <div style={{
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "12px",
                width: "90%",
                maxWidth: "400px",
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                position: "relative"
              }}>
                <h2 style={{ marginTop: 0 }}>History</h2>
                <p>Total Visits: <strong>{visitCount}</strong></p>
                <div style={{
                  maxHeight: "250px",
                  overflowY: "auto",
                  backgroundColor: "#1a1a1a",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginTop: "1rem"
                }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {visitHistory.map((v, i) => (
                      <li key={i} style={{ padding: "0.25rem 0", borderBottom: "1px solid #222" }}>
                        {v.time} — <span style={{ color: "#38bdf8" }}>{v.page}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#EF4444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
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
