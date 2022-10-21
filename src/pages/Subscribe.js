import smallImage from "../assets/small.jpg"
import mediumImage from "../assets/medium.jpg"
import largeImage from "../assets/large.jpg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { db, auth } from '../firebase-config/config'
import { addDoc, collection } from "firebase/firestore"

function SubscribeModal(props) {
    let navigate = useNavigate()
    const subscribeCollectionRef = collection(db, "subscriptions")
    const handleSubscribing = async () => {
        await addDoc(subscribeCollectionRef, {
            "buyer" : {
                "buyerID" : auth.currentUser.uid,
                "buyer-name": auth.currentUser.displayName
            },
            "price" : props.price,
            "plan" : props.type,
            "timestamp" : new Date().toLocaleString()
        }).then(() => {
            navigate('/')
        })
    }

    return (
      <div class="modal fade" id={props.type} tabIndex="-1">
      <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5">Buying Subscription</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
              You are buying <b>{props.type} subscription</b> at  price of Rs <b>{props.price}</b>
          </div>
          <div class="mb-3 text-center">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal" onClick={handleSubscribing}>Continue</button>
          </div>
      </div>
      </div>
      </div>
    )
}


export const Subscribe = (props) => {
    const [isModalOpen, setModal] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        if(!props.isAuth){
            navigate('/signin')
        }
    }, [props.isASub])
    return (
        <div className="container">
            {!props.isASub && <div class="row row-cols-1 row-cols-md-3 g-4">
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
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#basic" onClick={() => {setModal(true)}}>Subscribe</button>
                            {isModalOpen && <SubscribeModal type="basic" price="99"/>}
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
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#plus" onClick={() => {setModal(true)}}>Subscribe</button>
                            {isModalOpen && <SubscribeModal type="plus" price="199"/>}
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
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ultimate" onClick={() => {setModal(true)}}>Subscribe</button>
                            {isModalOpen && <SubscribeModal type="ultimate" price="499"/>}
                        </div>
                    </div>
                    </div>
                </div>
            </div>}
            {props.isASub && <div class="text-center mt-5">
                <h1 class="display-2">Thank you for subscribing with us.</h1>
            </div>}
        </div>
    )
}