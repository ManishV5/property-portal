import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Admin } from "./pages/Admin";
import { AdminLogin } from "./pages/AdminLogin";
import { Buy } from "./pages/Buy";
import { Home } from "./pages/Home";
import { Sell } from "./pages/Sell";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Subscribe } from "./pages/Subscribe";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/sell" element={<Sell/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/subscribe" element={<Subscribe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
