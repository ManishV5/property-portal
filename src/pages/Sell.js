import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Sell = (props) => {
    let navigate = useNavigate()
    useEffect(() => {
        if(!props.isAuth){
            navigate('/signin')
        }
    }, [])

    return (
        <div className="container d-flex justify-content-center col-8 mt-5">
            <div className="addNewListing">
                <div class="text-center">
                    <label className="form-label">Add new listing</label>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Listing</span>
                    <input type="text" className="form-control" placeholder="Enter listing name"/>
                    <span className="input-group-text">Location</span>
                    <input type="text" className="form-control" placeholder="Enter location"/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Price (in Rs)</span>
                    <input type="number" className="form-control"/>
                    <span className="input-group-text">Size (in sq.)</span>
                    <input type="number" className="form-control"/>
                    <div class="form-check ms-3">
                        <label class="form-check-label" for="flexCheckDefault">Negotiable</label>
                        <input class="form-check-input" type="checkbox" value=""/>
                    </div>
                    <div class="form-check ms-3">
                        <label class="form-check-label" for="flexCheckDefault">Financing</label>
                        <input class="form-check-input" type="checkbox" value=""/>
                    </div>
                </div>

                
                <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>

                <div className="input-group mb-3">
                    <label class="input-group-text">Upload Images</label>
                    <input type="file" class="form-control"/>
                </div>
                <div class="mt-3 text-center">
                    <button class="btn btn-outline-primary me-3">Add Listing</button>
                </div>
            </div>
        </div>
    )
}