import logo from "../assets/logo.jpg"
import {Link, useNavigate, useLocation} from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase-config/config"

export const Navbar = (props) => {
  const location = useLocation()
  let navigate = useNavigate()

  const handleAdminSignIn = () => {
    navigate('/adminlogin')
  }

  const handleSignIn = () => {
    navigate('/signin')
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      props.setIsAuth(false)
      navigate("/")
    })
  }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-1">
                <Link to="/"><img src={logo} style={{height:"40px", width:"60px"}}/></Link>
                <span className="brand">Property Portal</span>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" to="/buy">Buy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">Sell</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subscribe">Subscription</Link>
              </li>
            </ul>
            {props.isAuth ? (
              <>
              <div className="me-2"> Hello, {props.username} !</div>
              <button className="btn btn-outline-danger" onClick={handleSignOut}>Sign Out</button>
            </>
            
            ) : (
              <>
              {
                location.pathname !== "/adminlogin" && 
                <button className="btn btn-outline-danger" onClick={handleAdminSignIn}>Admin</button>
              }

              {
                location.pathname !== "/signin" &&
                <button className="btn btn-outline-success ms-2" onClick={handleSignIn}>Sign In</button>
              }

              {
                location.pathname !== "/signup" &&
                <button className="btn btn-outline-success ms-2" onClick={handleSignUp}>Sign Up</button>
              }
              </>
            )}
  
          </div>
        </div>
      </nav>
    )
}