import {Link} from "react-router-dom"

export const AboutBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center">
              <li className="nav-item ms-3">
                <Link className="nav-link">About us</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link">&#169; 2022</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };