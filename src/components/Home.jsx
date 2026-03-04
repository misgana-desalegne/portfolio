import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../style/Home.css";
import backgroundImage from "../assets/homepage.jpg";
import VRImg from "../assets/VR.png";
import devImg from "../assets/dev.png";
import iotImg from "../assets/image.png";

function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const [playingVideo, setPlayingVideo] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: t.home.projects.paris.title,
      category: t.home.projects.paris.category,
      description: t.home.projects.paris.description,
      image: devImg,
      tags: ["Python", "Django", "Machine Learning", "React"],
      youtubeId: "mR6Y-cFmZB0"
    },
    {
      id: 2,
      title: t.home.projects.iot.title,
      category: t.home.projects.iot.category,
      description: t.home.projects.iot.description,
      image: iotImg,
      tags: ["Home Assistant", "Python", "IoT", "APIs"],
      link: "/homeintegration"
    },
    {
      id: 3,
      title: t.home.projects.vr.title,
      category: t.home.projects.vr.category,
      description: t.home.projects.vr.description,
      image: VRImg,
      tags: ["Unity", "C#", "VR", "Psychology"],
      youtubeId: "gGrgsg204jU"
    }
  ];

  const handleProjectClick = (project) => {
    if (project.youtubeId) {
      setPlayingVideo(project.youtubeId);
    } else if (project.link) {
      if (project.link.startsWith('/')) {
        navigate(project.link);
      } else {
        window.open(project.link, '_blank', 'noopener noreferrer');
      }
    }
  };

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
            <h1 className="hero-title">{t.home.title}</h1>
            <p className="hero-subtitle">{t.home.subtitle}</p>
            <p className="hero-description">
              {t.home.description}
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                {t.home.viewWork}
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t.home.getInTouch}
              </Link>
            </div>
          </div>
        </div>

        <section className="featured-projects-section">
          <div className="section-header">
            <h2 className="section-title">{t.home.featuredProjects}</h2>
            <p className="section-subtitle">{t.home.featuredSubtitle}</p>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="featured-project-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => playingVideo !== project.youtubeId && handleProjectClick(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    playingVideo !== project.youtubeId && handleProjectClick(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View project: ${project.title}`}
              >
                <div className="featured-project-image">
                  {project.youtubeId && playingVideo === project.youtubeId ? (
                    <div className="youtube-embed">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : project.youtubeId ? (
                    <div className="youtube-thumbnail">
                      <img 
                        src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  {playingVideo !== project.youtubeId && (
                    <div className="featured-overlay">
                      <span className="view-project-btn">{t.projects.viewProject} →</span>
                    </div>
                  )}
                </div>

                <div className="featured-project-content">
                  <span className="featured-category">{project.category}</span>
                  <h3 className="featured-project-title">{project.title}</h3>
                  <p className="featured-project-description">{project.description}</p>
                  
                  <div className="featured-project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={`${project.id}-${tag}`} className="featured-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-view-all">
              {t.home.viewAllProjects} <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        <div className="scroll-indicator">
          <span>{t.home.scrollToExplore}</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      <section className="highlights-section">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="highlight-icon">💻</div>
            <h3>{t.home.highlights.development}</h3>
            <p>{t.home.highlights.developmentDesc}</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎮</div>
            <h3>{t.home.highlights.dataAnalysis}</h3>
            <p>{t.home.highlights.dataAnalysisDesc}</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🔬</div>
            <h3>{t.home.highlights.innovation}</h3>
            <p>{t.home.highlights.innovationDesc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
