import React from "react";
import "../style/About.css";
function About(props) {
  return (
    <div className="container">
      <div className="position-relative">
        <h1 className="display-3">Misgana Desalegne</h1>
      </div>
      <div className="content-area mt-3 top-50">
        <p className="lead">
          A paragraph about yourself goes here. You can add more text here to
          describe your achievements, skills, and experiences.
        </p>
      </div>
      <div className="container text-center"></div>
    </div>
  );
}

export default About;
