import React from "react";

import projects from "../utils/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Portfolio() {
  return (
    <div className="flexDiv">
      <h1>Portfolio Page</h1>
      <div className="container text-center">
        <div className="row">
          {/* loop through our array of project objects and display a single element per object */}
          {projects.map((project, index) => (
            <React.Fragment key={project.key}>
              <div
                key={project.key}
                className="col d-flex justify-content-center align-items-center position-relative h-100 hover-img mb-2 mr-2"
              >
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link git-icon-portfolio"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="4x"
                    style={{
                      color: "#000",
                    }}
                  />
                  <span className="img-header">{project.imgHeader}</span>
                </a>
                <a href={project.projectLink}>
                  <img src={project.imgSource} alt={project.altText} className="img-fluid w-100 h-100 project-img" />
                </a>
              </div>
              {/* if the index is not divisible by 2 then this will evaluate true and the row break will be rendered */}
              {index % 2 === 1 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
