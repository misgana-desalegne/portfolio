import React, { useState } from 'react';
import '../style/Services.css';

const services = [
  {
    id: 'iot-home',
    title: 'IOT Home Integration',
    summary: 'Home Assistant-based smart home setup for security, automation and sustainability.',
    details: 'Full Home Assistant setup, sensor and device integration (ESPHome/Tasmota), automation scripting (YAML/Python), energy monitoring and optional camera integrations.',
    tags: ['Home Assistant', 'Python', 'IoT', 'YAML', 'MQTT'],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & ML (Projet Vélib)',
    summary: 'Real-time station telemetry analysis, forecasting and anomaly detection to optimize operations.',
    details: 'Data ingestion, time-series storage, short-term availability forecasting, anomaly detection, and operator dashboards (Python, Django, TimescaleDB, ML).',
    tags: ['Python', 'Django', 'ML', 'Data Analysis', 'React'],
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    summary: 'Full-stack web & mobile application development tailored to your needs.',
    details: 'React frontends, Python/Django or Node backends, APIs, deployments and monitoring. Design, implementation and hand-off included.',
    tags: ['React', 'Django', 'API', 'Deployment'],
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    timeline: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSubmitted(false);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form
    if (!formData.name || !formData.email || !formData.description) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      // Send email via FormSubmit.co (free service - no backend needed)
      const response = await fetch('https://formsubmit.co/ajax/misgana21son@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedService.title,
          description: formData.description,
          timeline: formData.timeline || 'Not specified',
          budget: formData.budget || 'Not specified',
          _captcha: false,
          _next: window.location.href,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          description: '',
          timeline: '',
          budget: '',
        });
        setTimeout(() => {
          setSelectedService(null);
        }, 2000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Error sending message. Please try email directly: misgana21son@gmail.com');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Service Packages</h1>
        <p>Click on a package to request a service. Fill out the form and I'll get back to you soon.</p>
      </div>

      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.id}>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-summary">{s.summary}</p>
            <p className="service-details">{s.details}</p>

            <div className="service-tags">
              {s.tags.map((t, i) => (
                <span className="service-tag" key={i}>{t}</span>
              ))}
            </div>

            <div className="service-actions">
              <button 
                onClick={() => handleServiceClick(s)} 
                className="btn primary"
              >
                Request This Service
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <h2>Request: {selectedService.title}</h2>
            
            {submitted ? (
              <div className="success-message">
                <h3>✓ Message Sent!</h3>
                <p>Thank you for your interest. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Project Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Timeline</label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g., 3 months, ASAP, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g., $5,000 - $10,000"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn primary submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
