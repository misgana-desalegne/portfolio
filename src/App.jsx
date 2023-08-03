import { useState } from "react";
import About from "./components/About";
import backgroundImage from "./assets/hompage.png";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Adjust the height according to your needs
        }}
      >
        <div id="home">
          <Home />
        </div>
      </div>
      <div id="projects" style={{ padding: 20, background: "#d0d0d0" }}>
        <Projects />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
