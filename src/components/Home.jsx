import React from "react";
import "../style/TitleBar.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
function Home(props) {
  return (
    <Container className="py-5">
      <div className="row py-5"></div>

      <div className="row">
        {" "}
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="title-bar">
                <h1 className=" title-bar display-4 font-weight-bolder">
                  Misgana Desalegne
                </h1>
              </div>{" "}
              <div className="row intro py-5 jc-center">
                <h3 className="font-weight-bolder tp-25 title-bar">
                  !{"  "}
                </h3>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <ProjectItem />
    </Container>
  );
}

export default Home;
