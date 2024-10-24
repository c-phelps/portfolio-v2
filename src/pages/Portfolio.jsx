import workoutwizards from "../assets/workout-wizards.png";
import readmegen from "../assets/readme-gen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <div className="flexDiv">
      <h1>Portfolio Page</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center position-relative w-100 h-100 hover-img">
            <a
              href="https://github.com/c-phelps/workout-wizardz"
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
              <span className="img-header">Workout Wizards</span>
            </a>
            <a href="https://workout-wizardz.onrender.com/">
              <img src={workoutwizards} alt="workout wizards" className="img-fluid w-100 h-100 project-img" />
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center position-relative w-100 h-100 hover-img">
            <a
              href="https://github.com/c-phelps/readme-generator"
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
              <span className="img-header">Readme Generator</span>
            </a>
            <a href="https://github.com/c-phelps/readme-generator">
              <img src={readmegen} alt="readme generator" className="img-fluid w-100 h-100 project-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
