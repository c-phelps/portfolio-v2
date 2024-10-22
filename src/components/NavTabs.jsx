import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {/* <img src="https://via.placeholder.com/50" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"> */}
        Chris Phelps 
      </a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
            Resume
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
