import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Admin } from "./pages/Admin";
import { AdminLogin } from "./pages/AdminLogin";
import { Buy } from "./pages/Buy";
import { Home } from "./pages/Home";
import { Sell } from "./pages/Sell";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Subscribe } from "./pages/Subscribe";
import {Navbar} from "./components/Navbar";
import {useState} from "react"
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const [username, setUsername] =  useState(localStorage.getItem("username"))

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} username={username} setUsername={setUsername}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy username={username}/>}/>
          <Route path="/buy/:location" element={<Buy username={username}/>}/>
          <Route path="/sell" element={<Sell isAuth={isAuth}/>}/>
          <Route path="/signin" element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth} setUsername={setUsername}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/subscribe" element={<Subscribe isAuth={isAuth}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
