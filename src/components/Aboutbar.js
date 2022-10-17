import {Link} from "react-router-dom"

export const AboutBar = () => {
    return (
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav me-auto mb-lg-0">
            <li><Link className="nav-link">About us</Link></li>
            <li><Link className="nav-link">&#169; 2022</Link></li>
        </ul>
      </nav>
      </div>
    );
  };