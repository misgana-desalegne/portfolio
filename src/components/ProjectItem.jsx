import React from "react";
import "../style/Project.css";
import backgroundImage from "../assets/VR.png";
import image from "../assets/signal.png";
import image2 from "../assets/fsgif.gif";
function ProjectItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-dark card-has-bg click-col"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            //style="background-image:url('src\assets\VR.png');"
          >
            <img
              className="card-img d-none"
              src="src\assets\VR.png"
              alt="biosignals representation"
            />
            <div className="card-img-overlay d-flex flex-column">
              <div className="card-body">
                <small className="card-meta mb-2">
                  Virtual Reality on Psychology
                </small>
                <h4 className="card-title mt-0 ">
                  <a
                    className="text-light"
                    herf="https://misgana-desalegne.github.io/vr-env/"
                  >
                    Virtual Reality applications on Psychological interventions
                  </a>
                </h4>
                <small>
                  <i className="far fa-clock"></i> May 10, 2023
                </small>
              </div>
              <div className="card-footer">
                <div className="media">
                  <div className="media-body">
                    <h6 className="my-0 text-dark d-block"> Virtual Reality</h6>
                    <small>Unity C#</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-dark card-has-bg click-col"
            style={{
              backgroundImage: `url(${image2})`,
            }}
            //style="background-image:url('src\assets\VR.png');"
          >
            <img
              className="card-img d-none"
              src="src\assets\fsgif.gif"
              alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
            />
            <div className="card-img-overlay d-flex flex-column">
              <div className="card-body">
                <small className="card-meta mb-2">
                  Web and mobile applications
                </small>
                <h4 className="card-title mt-0 ">
                  <a className="text-light" herf="https://creativemanner.com">
                    Fullstack Development for Cross-platform applications
                  </a>
                </h4>
                <small>
                  <i className="far fa-clock"></i> July, 2023
                </small>
              </div>
              <div className="card-footer">
                <div className="media">
                  <div className="media-body">
                    <h6 className="my-0 text-dark d-block">
                      Reactjs Nextjs mongoDB
                    </h6>
                    <small>JS CSS React</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-dark card-has-bg click-col"
            style={{
              backgroundImage: `url(${image})`,
            }}
            //style="background-image:url('src\assets\VR.png');"
          >
            <img
              className="card-img d-none"
              src="src\assets\Signal Procesing and ML.png"
              alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
            />
            <div className="card-img-overlay d-flex flex-column">
              <div className="card-body">
                <small className="card-meta mb-2">
                  Biosignals and Machine Learning
                </small>
                <h4 className="card-title mt-0 ">
                  <a
                    className="text-light"
                    herf="https://github.com/misgana-desalegne"
                  >
                    Using machine learning to predict and detect conditions from
                    biosignals.
                  </a>
                </h4>
                <small>
                  <i className="far fa-clock"></i> July, 2023
                </small>
              </div>
              <div className="card-footer">
                <div className="media">
                  <div className="media-body">
                    <h6 className="my-0 text-dark d-block">
                      Biosignals and ML
                    </h6>
                    <small>Python Jupyter</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
