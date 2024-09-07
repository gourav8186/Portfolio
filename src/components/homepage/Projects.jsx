import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="card_title mb-1">Projects</h4>
        </div>
      </div>
      <div className="projectContainer">
        <Link to="https://woodbine.co.in/" className="projectBox">
          <span>Woodbine furniture</span>
        </Link>
        <Link
          to="https://highlevelpassword.netlify.app/"
          className="projectBox"
        >
          <span>Password Generator</span>
        </Link>
        <Link to="https://coursesarea.netlify.app/" className="projectBox">
          <span>Course Hub</span>
        </Link>
        <Link to="https://grvhere.netlify.app/" className="projectBox">
          <span>Portfolio</span>
        </Link>
        <Link
          to="https://github.com/gourav8186/notes-app"
          className="projectBox"
        >
          <span>Note Down</span>
        </Link>
        <Link
          to="https://github.com/gourav8186/cost-estimation-service"
          className="projectBox"
        >
          <span>CES</span>
        </Link>
        <Link
          to="https://github.com/gourav8186/prompt_clones"
          className="projectBox"
        >
          <span>Prompt Blogs</span>
        </Link>
        <Link
          to="https://genuine-tiramisu-6bb3ad.netlify.app/"
          className="projectBox"
        >
          <span>React Form</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
