import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Buy } from "./pages/Buy";
import { Home } from "./pages/Home";
import { Sell } from "./pages/Sell";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Subscribe } from "./pages/Subscribe";
import {Navbar} from "./components/Navbar";
import {useEffect, useState} from "react"
import { Transaction } from "./pages/Transaction";
import { Listings } from "./pages/Listings";
import { auth, db } from "./firebase-config/config";
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const [username, setUsername] =  useState(localStorage.getItem("username"))
  const [isASub, setIsASub] = useState(false)
  const [allSubscribers, setAllSubscribers] = useState([])

  const listingSubscribersRef = collection(db, 'subscriptions')
  useEffect(() => {
      const getSubscribers = async () => {
        const data = await getDocs(listingSubscribersRef)
        let subs = []
        data.docs.forEach((doc) => {
          subs.push(doc.data())
        })
        setAllSubscribers(subs)
    }
    const isASubcriber = () => {
      setIsASub(Boolean(allSubscribers.filter(item => item['buyer']['buyerID'] === auth.currentUser.uid)))
    }
    getSubscribers().then(() => {isASubcriber()}) 
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} username={username} setUsername={setUsername} setIsASub={setIsASub}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy username={username} isAuth={isAuth}/>}/>
          <Route path="/buy/:location" element={<Buy username={username} isAuth={isAuth} />}/>
          <Route path="/sell" element={<Sell isAuth={isAuth} username={username}/>}/>
          <Route path="/signin" element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth} setUsername={setUsername}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/subscribe" element={<Subscribe isAuth={isAuth} isASub={isASub}/>}/>
          <Route path="/transaction" element={<Transaction isAuth={isAuth}/>}/>
          <Route path="/listings" element={<Listings isAuth={isAuth}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
