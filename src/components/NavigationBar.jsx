import React from "react";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav class="navbar navbar-expand-lg bg-dark sticky-top navbar-dark">
      <div className="nav-container px-20">
        <a class="navbar-brand" href="http://127.0.0.1:5173/?#">
          <img
            src="public\icon.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Portfolio
        </a>
      </div>
      <div className="navbar px-20"></div>
      <div class="container-fluid justify-content-between">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {"        "}
            <button
              className="nav-link"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </button>
            {"       "}
            <button
              className="nav-link"
              onClick={() => handleScrollToSection("projects")}
            >
              {"       "}
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => handleScrollToSection("about")}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => handleScrollToSection("contact")}
            >
              Contact
            </button>
            <p>Contact me in email</p>
            <a className="nav-link" href="mailto:misgana21son@gmail.com">
              <Gmail />
            </a>
            <p>github</p>
            <a className="nav-link" href="https://github.com/misgana-desalegne">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

const GitHubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GitHub"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.112.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.34.724-4.042-1.613-4.042-1.613-.545-1.386-1.333-1.755-1.333-1.755-1.088-.745.082-.73.082-.73 1.203.084 1.838 1.235 1.838 1.235 1.07 1.84 2.806 1.307 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.534-1.527.117-3.18 0 0 1.01-.322 3.3 1.233.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.555 3.285-1.233 3.285-1.233.654 1.653.243 2.877.12 3.18.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.375.78 1.107.78 2.23 0 1.61-.015 2.91-.015 3.295 0 .315.192.69.795.575C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
};
const Gmail = () => {
  return (
    <svg
      fill="#fff"
      height="20"
      width="20"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 75.294 75.294"
      xml:space="preserve"
    >
      <g>
        <path
          d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
        />
      </g>
    </svg>
  );
};
