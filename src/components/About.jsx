import React from "react";
import "../style/About.css";

function About() {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "C#", "SQL"] },
    { category: "Web", items: ["React.js", "Next.js", "Node.js", "MongoDB"] },
    { category: "Tools", items: ["Git/GitHub", "VS Code", "Unity", "Docker"] },
    { category: "Specialized", items: ["VR Development", "Signal Processing", "MATLAB", "Machine Learning"] }
  ];

  const experience = [
    {
      role: "Junior Developer",
      company: "AC Group",
      period: "2021 - 2022",
      description: "Developed and maintained web applications using modern technologies"
    },
    {
      role: "Research Internship",
      company: "Labpsitec - Valencia University",
      period: "2023",
      description: "Conducted research on biosignals and data analysis"
    }
  ];

  const education = [
    {
      program: "Erasmus Mundus Master's in Cyber-Security",
      institutions: "Lusófona University (Portugal), UPC (Spain), Burgundy University (France)",
      period: "2022-2024"
    },
    {
      program: "Bachelor of Science in Electronic Information Engineering",
      institutions: "University of Electronic Science and Technology of China (UESTC)",
      period: "2017-2021"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="header-line"></div>
      </div>

      <section className="about-intro">
        <div className="about-text">
          <p className="intro-paragraph">
            Hi! I'm a passionate full-stack developer and researcher with a strong background in building innovative applications. I love exploring new technologies and creating seamless digital experiences that solve real-world problems.
          </p>
          <p className="intro-paragraph">
            With expertise spanning web development, VR applications, and research, I combine technical skills with creativity to craft efficient and beautiful solutions. I'm always eager to learn, collaborate, and push the boundaries of what's possible in tech.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, index) => (
                  <li key={index}>
                    <span className="skill-dot">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-header">
                <h3>{edu.program}</h3>
              </div>
              <p className="education-institutions">{edu.institutions}</p>
              <p className="education-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Work Together?</h2>
        <p>Feel free to reach out if you'd like to discuss a project, collaboration, or just want to say hello!</p>
        <a href="mailto:misgana21son@gmail.com" className="cta-button">Get In Touch</a>
      </section>
    </div>
  );
}

export default About;
