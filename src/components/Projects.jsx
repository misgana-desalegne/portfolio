import React, { useState } from "react";
import "../style/Projects.css";
import signaImg from "../assets/signal.png";
import VRImg from "../assets/VR.png";
import devImg from "../assets/dev.png";

const projectsData = [
  {
    id: 1,
    title: "Virtual Reality Applications on Psychological Interventions",
    category: "vr",
    description: "Immersive VR experiences designed for psychological interventions and therapy. Built with Unity and C# for optimal performance.",
    image: VRImg,
    tags: ["Unity", "C#", "VR", "Psychology"],
    date: "May 2023",
    link: "https://misgana-desalegne.github.io/vr-env/"
  },
  {
    id: 2,
    title: "Fullstack Development for Cross-platform Applications",
    category: "development",
    description: "Modern web and mobile applications built with React, Next.js, and MongoDB. Focus on responsive design and user experience.",
    image: devImg,
    tags: ["React", "Next.js", "MongoDB", "JavaScript"],
    date: "July 2023",
    link: "#"
  },
  {
    id: 3,
    title: "Biosignals Processing and Analysis",
    category: "research",
    description: "Research project focused on biosignal processing, feature extraction, and analysis using advanced algorithms and machine learning.",
    image: signaImg,
    tags: ["Python", "Signal Processing", "Research", "ML"],
    date: "Ongoing",
    link: "#"
  },
  {
    id: 4,
    title: "Web Development Portfolio",
    category: "development",
    description: "Modern portfolio website showcasing projects and skills with beautiful UI/UX design and responsive layout.",
    image: devImg,
    tags: ["React", "CSS", "Vite", "Web Design"],
    date: "2024",
    link: "#"
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "development", label: "Development" },
    { id: "vr", label: "Virtual Reality" },
    { id: "research", label: "Research" }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my latest work and research projects</p>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-meta">
                <span className="project-category">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <span className="project-date">{project.date}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
