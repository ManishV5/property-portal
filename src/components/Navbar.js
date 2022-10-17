import logo from "../assets/logo.jpg"
import {Link, useNavigate} from "react-router-dom"



export const Navbar = () => {
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
            <button className="btn btn-outline-danger" onClick={handleAdminSignIn}>Admin</button>
            <button className="btn btn-outline-success ms-2" onClick={handleSignIn}>Sign In</button>
            <button className="btn btn-outline-success ms-2" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </nav>
    )
}