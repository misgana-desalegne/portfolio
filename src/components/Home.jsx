import React from "react";
import "../style/TitleBar.css";
import ProjectItem from "./ProjectItem";
function Home(props) {
  return (
    <>
      <div className="row py-5"></div>

      <div className="row">
        {" "}
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="title-bar">
                <h1 className="display-4 font-weight-bolder">
                  Misgana Desalegne
                </h1>
              </div>{" "}
              <div className="row intro py-5 jc-center">
                <h5 className="font-weight-bolder tp-20">
                  Hi welcome to my page, you can know more about me and the work
                  I do in this website. I do a lot of staff!{"  "}
                </h5>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <ProjectItem />
    </>
  );
}

export default Home;
