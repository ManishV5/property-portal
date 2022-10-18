import {Link, useNavigate} from "react-router-dom"
import {auth, provider} from "../firebase-config/config"
import {signInWithPopup} from "firebase/auth"

export const SignIn = (props) => {
    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            localStorage.setItem('username', auth.currentUser.displayName)
            props.setIsAuth(true)
            navigate("/")
        })
    }    

    return (
    <div class="container d-flex justify-content-center col-8 mt-5">
        <div className="loginWithPass">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Email" id="email"></input>
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" id="pass"></input>
            </div>
            <div class="mt-3 text-center">
                <button  class="btn btn-outline-success me-3">Login</button>
            </div>
            <div class="mt-3 text-center">
                <button class="btn btn-outline-success me-3" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <div className="mt-3">
                Don't have an account ? Sign Up <Link to="/signup">here</Link>
            </div>
        </div>
    </div>
    )
}