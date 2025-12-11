import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add email service integration (EmailJS, etc)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "misgana21son@gmail.com",
      link: "mailto:misgana21son@gmail.com"
    },
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+33 7 53 68 17 49",
      link: "https://wa.me/33753681749"
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/misgana-desalegne",
      link: "https://github.com/misgana-desalegne"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "Let's connect",
      link: "https://www.linkedin.com/in/misgana-desalegne/"
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? Let's collaborate and create something amazing together.</p>
      </div>

      <div className="contact-content">
        <div className="contact-methods">
          <h2>Contact Methods</h2>
          <div className="methods-grid">
            {contactMethods.map((method, idx) => (
              <a 
                key={idx}
                href={method.link}
                target={method.link.startsWith("http") && method.link !== "#" ? "_blank" : "_self"}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                className="method-card"
              >
                <div className="method-icon">{method.icon}</div>
                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          {submitted && (
            <div className="success-message">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>

      <div className="social-links-section">
        <h2>Follow Me</h2>
        <div className="social-icons">
          <a 
            href="https://github.com/misgana-desalegne" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <GithubIcon />
          </a>
          <a 
            href="mailto:misgana21son@gmail.com" 
            className="social-icon"
            title="Email"
          >
            <MailIcon />
          </a>
          <a 
            href="https://wa.me/33753681749" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.112.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.34.724-4.042-1.613-4.042-1.613-.545-1.386-1.333-1.755-1.333-1.755-1.088-.745.082-.73.082-.73 1.203.084 1.838 1.235 1.838 1.235 1.07 1.84 2.806 1.307 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.534-1.527.117-3.18 0 0 1.01-.322 3.3 1.233.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.555 3.285-1.233 3.285-1.233.654 1.653.243 2.877.12 3.18.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.375.78 1.107.78 2.23 0 1.61-.015 2.91-.015 3.295 0 .315.192.69.795.575C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.323.194-3.352-.644.656 3.174-.203.319a9.877 9.877 0 001.516 4.753c2.27 3.539 6.289 5.589 10.616 5.589 1.212 0 2.418-.149 3.577-.446 6.365-1.569 10.928-7.569 9.359-13.935-1.569-6.365-7.569-10.928-13.935-9.359z"/>
  </svg>
);

export default Contact;
