import logo from "../assets/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config/config";

export const Navbar = (props) => {
  const location = useLocation();
  let navigate = useNavigate();

  const handleAdminSignIn = () => {
    navigate("/adminlogin");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setIsAuth(false);
      props.setIsASub(false);
      navigate("/");
    });
  };

  const toggleMenu = () => {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
  };

  const handleTransaction = () => {
    navigate("/transaction");
  };

  const handleListings = () => {
    navigate("/listings");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mt-1">
              <Link to="/">
                <img src={logo} style={{ height: "40px", width: "60px" }} />
              </Link>
              <span className="brand">Property Portal</span>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/buy">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/subscribe">
                Subscription
              </Link>
            </li>
          </ul>
          {props.isAuth ? (
            <>
            <ul>
              <li class="nav-item dropdown" style={{listStyleType: "none", marginRight: "1rem", marginTop: "10px"}}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Hello, {props.username} !

                </a>
                <ul class="dropdown-menu" style={{paddingLeft:"1.1rem", marginTop: "1.4rem"}}>
                  <li>
                    <a href="" className="sub-menu-link">
                      <p onClick={handleTransaction}>My transactions</p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="sub-menu-link">
                      <p onClick={handleListings}>My listings</p>
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              <button className="btn btn-outline-danger" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              {location.pathname !== "/signin" && (
                <button
                  className="btn btn-outline-success ms-2"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              )}

              {location.pathname !== "/signup" && (
                <button
                  className="btn btn-outline-success ms-2"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
