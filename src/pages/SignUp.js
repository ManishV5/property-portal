import {Link} from "react-router-dom"

export const SignUp = () => {
    return (
        <div class="container d-flex justify-content-center col-8 mt-5">
                <div className="signUpForm">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Phone"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Confirm password"></input>
                    </div>
                    <div class="mt-3 text-center">
                        <button  class="btn btn-outline-success me-3">Sign Up</button>
                    </div>
                    <div className="mt-3">
                       Already have an account ? Sign In <Link to="/signin">here</Link>
                    </div>
                </div>
        </div>
    )
}