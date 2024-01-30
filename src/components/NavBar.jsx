import { NavLink } from "react-router-dom";
import "./navbar.css";
import resume from "/assets/MJ-FrontEnd.pdf";

function NavBar() {
  const resumeBtn = "/assets/MJ-FrontEnd.pdf";
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MJ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects-gallery" end>
                Projects Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" end>
                Contact
              </NavLink>
            </li>
            <a href={resume} download={resume}>
              <button type="button" className="btn btn-success btn-sm">RESUME</button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;