import React from 'react'
import { useNavigate } from "react-router-dom"
import { db, auth } from '../firebase-config/config'
import { addDoc, collection } from "firebase/firestore"
function Modal(props) {
    let navigate = useNavigate()
    const listingCollectionRef = collection(db, "transactions")
    const handleBuying = async () => {
        await addDoc(listingCollectionRef, {
            "seller": props.listing['seller'],
            "buyer" : {
                "buyerID" : auth.currentUser.uid,
                "buyer-name": auth.currentUser.displayName
            },
            "listing-name": props.listing['listing-name'],
            "price" : props.listing['price'],
            "timestamp" : new Date().toLocaleString()
        }).then(() => {
            navigate('/transaction')
        })
    }

  return (
    <div class="modal fade" id={`${props.listing['listing-name']}_modal`} tabIndex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5">Buying</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            You are buying <b>{props.listing['listing-name']}</b> at <b>{props.listing['location']}</b> for price of Rs <b>{props.listing['price']}</b>
        </div>
        <div class="mb-3 text-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary ms-1" onClick={handleBuying} data-bs-dismiss="modal">Continue</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Modal