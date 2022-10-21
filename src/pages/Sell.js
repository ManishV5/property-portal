import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config/config";
import { storage } from "../firebase-config/config";
import { ref, uploadBytes } from "firebase/storage";
import "../assets/css/style.css"; 

export const Sell = (props) => {
  const [images, setImages] = useState(null);
  const [flag, setFlag] = useState(true);

  let navigate = useNavigate();
  const listingCollectionRef = collection(db, "listings");

  useEffect(() => {
    if (!props.isAuth) {
      navigate("/signin");
    }
  }, []);

  let listingNameRef = React.createRef();
  let locationRef = React.createRef();
  let priceRef = React.createRef();
  let sizeRef = React.createRef();
  let negotaibleRef = React.createRef();
  let financingRef = React.createRef();
  let descriptionRef = React.createRef();

  const handleAddListing = async () => {
    await addDoc(listingCollectionRef, {
      seller: {
        sellerID: auth.currentUser.uid,
        "seller-name": `${props.username}`,
      },
      "listing-name": listingNameRef.current.value,
      location: locationRef.current.value,
      price: priceRef.current.value,
      size: sizeRef.current.value,
      negotiable: negotaibleRef.current.value,
      financing: financingRef.current.value,
      description: descriptionRef.current.value,
      imageRef: `${auth.currentUser.uid}_${listingNameRef.current.value}`,
      timestamp: new Date().toLocaleString(),
      "sold-out": "false"
    }).then(() => {
      for (let i = 0; i < images.length; i++) {
        uploadBytes(
          ref(
            storage,
            `${auth.currentUser.uid}_${listingNameRef.current.value}/${i}`
          ),
          images[i]
        );
      }
      navigate("/");
    });
  };

  return (
    <>
        <div className="container d-flex justify-content-center col-8 mt-5">
           <div className="addNewListing">
                <div class="text-center mb-3">
                    <label className="display-5 mb-3"> Add New Listing</label>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Listing</span>
                    <input type="text" className="form-control" placeholder="Enter listing name" ref={listingNameRef}/>
                    <span className="input-group-text">Location</span>
                    <input type="text" className="form-control" placeholder="Enter location" ref={locationRef}/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Price (in Rs)</span>
                    <input type="number" className="form-control" ref={priceRef}/>
                    <span className="input-group-text">Size (in sq.)</span>
                    <input type="number" className="form-control" ref={sizeRef}/>
                    <div class="form-check ms-3">
                        <label class="form-check-label" for="flexCheckDefault">Negotiable</label>
                        <select class="form-select" ref={negotaibleRef}>
                            <option selected value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </div>
                    <div class="form-check ms-3">
                        <label class="form-check-label" for="flexCheckDefault">Financing</label>
                        <select class="form-select" ref={financingRef}>
                            <option selected value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </div>
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <textarea className="form-control" aria-label="With textarea" ref={descriptionRef}></textarea>
                </div>

                <div className="input-group mb-3">
                    <label class="input-group-text">Upload Images</label>
                    <input type="file" multiple class="form-control" onChange={(e) => {setImages(e.target.files)}}/>
                </div>
                <div class="mt-3 text-center">
                    <button class="btn btn-outline-primary me-3" onClick={handleAddListing}>Add Listing</button>
                </div>
            </div>
        </div>
    </>
  );
};
