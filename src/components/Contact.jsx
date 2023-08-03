import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <hr />
      <div className="row">
        <div className="col" style={{ color: "green" }}>
          <strong>Phone:</strong> +33753681749
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "green" }}>
          <strong>WhatsApp:</strong> +33753681749
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "blue" }}>
          <strong>Email:</strong>{" "}
          <a href="misgana21son@gmail.com">misgana21son@gmail.com</a>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "black" }}>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/misgana-desalegne">
            github.com/misgana-desalegne
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
