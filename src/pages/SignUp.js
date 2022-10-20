import {Link} from "react-router-dom"
import { auth } from "../firebase-config/config";
import { useNavigate } from "react-router-dom";
import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const SignUp = () => {
    let emailRef = React.createRef();
    let passRef = React.createRef();
    let usernameRef = React.createRef();
    let navigate = useNavigate();

    const handleSignup = () => {
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCred) => {
            updateProfile(userCred.user, {
                displayName: username
            }).then(() => navigate('/'))
        }).catch(err => alert(err))
    }

    return (
        <div class="container d-flex justify-content-center col-8 mt-5">
                <div className="signUpForm">
                    <div class="input-group mb-3">
                        <input type="text" ref={usernameRef} class="form-control" placeholder="Name"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" ref={emailRef} class="form-control" placeholder="Email"></input>
                    </div>
                    {/* <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Phone"></input>
                    </div> */}
                    <div class="input-group mb-3">
                        <input type="password" ref={passRef} class="form-control" placeholder="Password"></input>
                    </div>
                    {/* <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Confirm password"></input>
                    </div> */}
                    <div class="mt-3 text-center">
                        <button  class="btn btn-outline-success me-3" onClick={handleSignup}>Sign Up</button>

                    </div>
                    <div className="mt-3">
                       Already have an account ? Sign In <Link to="/signin">here</Link>
                    </div>
                </div>
        </div>
    )
}