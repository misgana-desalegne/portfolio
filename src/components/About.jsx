
import React from "react";
import "../style/About.css";


function IntroSection({ text }) {
  return (
    <section className="about-intro">
      <div className="about-text">
        {text.map((paragraph, idx) => (
          <p key={idx} className="intro-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function SkillsSection({ skills }) {
  return (
    <section className="skills-section">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map((group, idx) => (
          <div key={idx} className="skill-group">
            <h3>{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item, i) => (
                <li key={i}>
                  <span className="skill-dot">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ experience }) {
  return (
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
  );
}

function EducationSection({ education }) {
  return (
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
  );
}

function CTASection({ title, description, email }) {
  return (
    <section className="about-cta">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={`mailto:${email}`} className="cta-button">
        Get In Touch
      </a>
    </section>
  );
}

/* ---------------------------------------------
   Main About Component (Parent)
---------------------------------------------- */

function About() {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "Java", "SQL"] },
    { category: "Frameworks", items: ["React.js", "Django", "PostgreSQL"] },
    { category: "Tools", items: ["Git/GitHub", "VS Code", "Jira", "Docker"] },
    {
      category: "Specialized",
      items: [
        "Python Full-Stack Development",
        "Signal Processing",
        "Prompt Engineering",
        "Machine Learning",
        "OOP & Algorithms"
      ]
    }
  ];

  const experience = [
    
    {
      role: "IOT Integrator",
      company: "Home Integration",
      period: "2025/08 - _______",
      description: "IOT integration and automation of homes, for security and optimimum use of resources"
    },
    {
      role: "Research Internship",
      company: "Labpsitec",
      period: "2023 - 2024",
      description: "Conducted research on biosignals and data analysis."
    },
    {
      role: "React Developer",
      company: "AC Group",
      period: "2021 - 2022",
      description: "Developed and maintained web applications using modern technologies."
    },
     {
      role: "Microsoft Tech Support Engineer-Internship",
      company: "Microsoft",
      period: "2021",
      description: "Developed and maintained web applications using modern technologies."
    }
  ];

  const education = [
    {
      program: "Erasmus Master's in Cyberspace and Ergonomie",
      institutions: "Paris Cité Université, France — Barcelona University",
      period: "2022 - 2024"
    },
    {
      program: "BSc in Electronic Information Engineering",
      institutions: "University of Electronic Science and Technology of China (UESTC)",
      period: "2017 - 2021"
    }
  ];

  const introText = [
    "Hi! I'm a passionate full-stack developer and researcher with a strong background in building innovative applications. I love exploring new technologies and creating seamless digital experiences that solve real-world problems.",
    "With expertise spanning web development, VR applications, and research, I combine technical skills with creativity to craft efficient and beautiful solutions. I'm always eager to learn, collaborate, and push the boundaries of what's possible in tech."
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="header-line"></div>
      </div>

      <IntroSection text={introText} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <CTASection
        title="Ready to Work Together?"
        description="Feel free to reach out if you'd like to discuss a project, collaboration, or just want to say hello!"
        email="misgana21son@gmail.com"
      />
    </div>
  );
}

export default About;
