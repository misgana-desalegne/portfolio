import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import backgroundImage from "../assets/homepage.jpg";

function Home() {
  return (
    <div className="home-container">
      <div 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 31, 46, 0.85) 0%, rgba(22, 33, 62, 0.85) 100%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Misgana Desalegne</h1>
            <p className="hero-subtitle">Full-Stack Developer & Researcher</p>
            <p className="hero-description">
              Crafting innovative digital experiences with modern technologies.
              <br />
              Passionate about coding, VR, and pushing boundaries.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      <section className="highlights-section">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="highlight-icon">💻</div>
            <h3>Development</h3>
            <p>Full-stack web and mobile applications with React, Node.js, and modern frameworks</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎮</div>
            <h3>VR & Graphics</h3>
            <p>Virtual Reality applications and 3D environments using Unity and C#</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🔬</div>
            <h3>Research</h3>
            <p>Technology research and innovative solutions for complex problems</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
