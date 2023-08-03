import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/About.css";
function About(props) {
  const containerStyle = {
    background: "linear-gradient(135deg, #fff, #687374)",
    padding: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <Container className="py-5" style={containerStyle}>
      <Row>
        <Col>
          <h2 className="mb-4 text-black">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-black">
            Hi, I'm a passionate developer and aspiring researcher with a strong
            background in building and implementing innovative applications. I
            love coding and exploring new technologies to create exciting and
            new applications. With a blend of technical skills and creativity, I
            strive to craft seamless and efficient solutions that push the
            boundaries of the digital world.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="mb-3 text-black">Experience</h2>
          <ul>
            <li>
              <span style={linkStyle}>
                <a href="https://www.example.com/companyxyz">AC Group</a>
              </span>{" "}
              - Junier Developer (2021 - 2022)
            </li>
            <li>
              <span style={linkStyle}>
                <a href="https://www.example.com/techinc">
                  Labpsitec-Valencia University
                </a>
              </span>{" "}
              - Research Internship (2023)
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-3 text-black">Education</h2>
          <ul>
            <li>
              Attending Erasmus Program in Cyber-t{" "}
              <span style={linkStyle}>
                <a href="https://www.example.com/universityabc">
                  LU-Portugal, UPC-France, BU-Spain
                </a>
              </span>{" "}
              (2022-2024)
            </li>
            <li>
              Bachelor of Science in Elctronic Information Eng. -{" "}
              <span style={linkStyle}>
                <a href="https://www.example.com/universityabc">UESTC-China</a>
              </span>{" "}
              (2017-2021)
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-3 text-black">Skills</h2>
          <ul>
            <li>Python</li>
            <li>Unity/C#</li>
            <li>JavaScript</li>
          </ul>
        </Col>
        <Col>
          <h2 className="mb-3 text-black">{"  "}</h2>
          <ul>
            <li>React.js, MongoDB, APIs</li>
            <li>Git/github</li>
            <li>Matlab</li>
          </ul>
        </Col>
      </Row>
    </Container>

    // <div className="container">
    //   <div className="position-relative">
    //     <h1 className="display-3">Misgana Desalegne</h1>
    //   </div>
    //   <div className="content-area mt-3 top-50">
    //     <p className="lead">
    //       A paragraph about yourself goes here. You can add more text here to
    //       describe your achievements, skills, and experiences.
    //     </p>
    //   </div>
    //   <div className="container text-center"></div>
    // </div>
  );
}

export default About;
