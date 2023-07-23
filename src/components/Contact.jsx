import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <hr />
      <div className="row">
        <div className="col" style={{ color: "green" }}>
          <strong>Phone:</strong> +1 555-1234-5678
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "green" }}>
          <strong>WhatsApp:</strong> +1 555-9876-5432
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "blue" }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "black" }}>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/yourusername">github.com/yourusername</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
