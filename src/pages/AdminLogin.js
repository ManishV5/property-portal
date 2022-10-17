export const AdminLogin = () => {
    return (
    <div class="container d-flex justify-content-center col-8 mt-5">
        <div className="adminLogin">
            <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" id="email"></input>
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" id="pass"></input>
            </div>
            <div class="mt-3 text-center">
                <button  class="btn btn-outline-danger me-3">Login</button>
            </div>
        </div>
    </div>
    )
}