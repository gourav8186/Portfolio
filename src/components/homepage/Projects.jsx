import React from "react";
import pLogo from "../../assets/images/face-1.jpg";

const Projects = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="card_title">Projects</h4>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6 mb-4">
          <div className="projectBox">
            <img src={pLogo} className="projectLogo" alt="Project Logo" />
            <h5>Paul Trueman</h5>
            <p>Template author</p>
            <div className="aboutProject">
              Working with Artur has been a pleasure. Better yet - I alerted
              them of a minor issue before going to sleep. The issue was fixed
              the next morning. I couldn't ask for better support. Thank you
              Artur! This is easily a 5 star freelancer.
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6 mb-4">
          <div className="projectBox">
            <img src={pLogo} className="projectLogo" alt="Project Logo" />
            <h5>Paul Trueman</h5>
            <p>Template author</p>
            <div className="aboutProject">
              Working with Artur has been a pleasure. Better yet - I alerted
              them of a minor issue before going to sleep. The issue was fixed
              the next morning. I couldn't ask for better support. Thank you
              Artur! This is easily a 5 star freelancer.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
