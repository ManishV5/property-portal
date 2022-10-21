import React from 'react'
import { db, auth } from "../firebase-config/config";
import { storage } from "../firebase-config/config";
import { ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection,getDocs, updateDoc, doc } from "firebase/firestore";

function Update(props) {
    const [currSelectedListingID, setCurrSelectedListingID] = useState('')
    const [listingName, setListingName] = useState("")
    const [location, setLocation] = useState("")
    const [soldOut, setSoldOut] = useState("")
    const [price, setPrice] = useState("")
    const [size, setSize] = useState("")
    const [negotiable, setNegotiable] = useState("")
    const [financing, setFinancing] = useState("")
    const [description, setDescription] = useState("")


    const [images, setImages] = useState(null);

    let navigate = useNavigate();
    const listingCollectionRef = collection(db, "listings");

  useEffect(() => {
      if(Boolean(currSelectedListingID)){
        const data = props.allListings.filter(item => item.id === currSelectedListingID)
        setListingName(data[0]['listing-name'])
        setLocation(data[0]['location'])
        setSoldOut(data[0]['sold-out'])
        setPrice(data[0]['price'])
        setSize(data[0]['size'])
        setNegotiable(data[0]['negotiable'])
        setFinancing(data[0]['financing'])
        setDescription(data[0]['description'])
      }
  }, [currSelectedListingID])

  const handleUpdate = () => {
      const listRef = doc(db, 'listings', currSelectedListingID)
      updateDoc(listRef, {
        'listing-name': listingName,
        'location': location,
        'price': price,
        'size': size,
        'sold-out': soldOut,
        'description': description,
        'negotiable': negotiable,
        'financing': financing
      }).then(() => {
        navigate("/")
      })
  }

  return (
    <div className="container d-flex justify-content-center col-8 mt-3">
              <div className="addNewListing">
                <div class="text-center mx-auto col-6 mt-4">
                    <select class="form-select mb-3" onChange={(event) => {setCurrSelectedListingID(event.target.value)}}>
                        <option disabled selected>Select a listing name</option>
                        {props.allListings.filter(item => item['seller']['sellerID'] === auth.currentUser.uid).map((listing, key) => {
                          return (<option value={listing['id']} key={key}>{listing['listing-name']}</option>)
                        })}
                    </select>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Listing</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter listing name"
                    value={listingName}
                    onChange={(e) => setListingName(e.target.value)}
                  />
                  <span className="input-group-text">Location</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <div class="form-check ms-3">
                    <label class="form-check-label" for="flexCheckDefault">
                      Sold Out
                    </label>
                    <select class="form-select" value={soldOut} onChange={(e) => setSoldOut(e.target.value)}>
                      <option selected value="false">
                        false
                      </option>
                      <option value="true">true</option>
                    </select>
                  </div>
                </div>
    
                <div className="input-group mb-3">
                  <span className="input-group-text">Price (in Rs)</span>
                  <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
                  <span className="input-group-text">Size (in sq.)</span>
                  <input type="number" className="form-control" value={size} onChange={(e) => setSize(e.target.value)} />
                  <div class="form-check ms-3">
                    <label class="form-check-label" for="flexCheckDefault">
                      Negotiable
                    </label>
                    <select class="form-select" value={negotiable} onChange={(e) => setNegotiable(e.target.value)}>
                      <option selected value="false">
                        false
                      </option>
                      <option value="true">true</option>
                    </select>
                  </div>
                  <div class="form-check ms-3">
                    <label class="form-check-label" for="flexCheckDefault">
                      Financing
                    </label>
                    <select class="form-select" value={financing} onChange={(e) => setFinancing(e.target.value)}>
                      <option selected value="false">
                        false
                      </option>
                      <option value="true">true</option>
                    </select>
                  </div>
                </div>
    
                <div className="input-group mb-3">
                  <span className="input-group-text">Description</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
    
                <div class="mt-3 text-center">
                  <button
                    class="btn btn-outline-warning me-3"
                    onClick={handleUpdate}
                  >
                    Add Listing
                  </button>
                </div>
              </div>
            </div>
  )
}

export default Update