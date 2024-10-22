import workoutwizards from "../assets/workout-wizards.png";
import readmegen from "../assets/readme-gen.png";
export default function Portfolio() {
  return (
    <div className="flexDiv">
      <h1>Portfolio Page</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center w-100 h-100">
            <a href="https://workout-wizardz.onrender.com/">
              <img
                src={workoutwizards}
                alt="workout wizards"
                className="img-fluid w-100 h-100"
                style={{ objectFix: "cover" }}
              />
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center w-100 h-100">
            <a href="https://github.com/c-phelps/readme-generator">
              <img
                src={readmegen}
                alt="readme generator"
                className="img-fluid w-100 h-100"
                style={{ objectFix: "cover" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
