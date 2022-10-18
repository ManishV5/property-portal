import smallImage from "../assets/small.jpg"
import mediumImage from "../assets/medium.jpg"
import largeImage from "../assets/large.jpg"

export const Subscribe = () => {
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src={smallImage} class="card-img-top" alt="plan logo"/>
                    <div class="card-body">
                        <h5 class="card-title">Basic (Rs 99/Month)</h5>
                        <p class="card-text">Makes it easier for you to contact property seller</p>
                        <ul>
                            <li>Basic limit of contacting 10 sellers a month</li>
                            <li>Listing property limit of 1 per month</li>
                            <li>Get seller details to contact</li>
                        </ul>
                        <div className="text-center">
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src={mediumImage} class="card-img-top" alt="plan logo"/>
                    <div class="card-body">
                        <h5 class="card-title">Plus (Rs 199/Month)</h5>
                        <p class="card-text">Upgraded limits to improve your experience even more</p>
                        <ul>
                            <li>Increased limit of contacting 25 sellers a month</li>
                            <li>Listing property limit of 2 per month</li>
                            <li>includes benefits of previous tier</li>
                        </ul>
                        <div className="text-center">
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src={largeImage} class="card-img-top" alt="plan logo"/>
                    <div class="card-body">
                        <h5 class="card-title">Ultimate (Rs 499/Month)</h5>
                        <p class="card-text">Unlocks your potential.</p>
                        <ul>
                            <li>No limits for either contacting seller or posting listings</li>
                            <li>Dedicated 24 x 7 support line to resolve your issues</li>
                            <li>includes benefits of previous tier</li>
                        </ul>
                        <div className="text-center">
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}