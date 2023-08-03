import React from "react";

function Projects(props) {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 py-20">
      <div class="col">
        <div class="card h-100">
          <img src="src\assets\signal.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Biosignals</h5>
            <p class="card-text">This is about signal</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="src\assets\VR.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Virtual Reality</h5>
            <p class="card-text">This is about VR</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="src\assets\dev.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Development</h5>
            <p class="card-text">This is about other projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
