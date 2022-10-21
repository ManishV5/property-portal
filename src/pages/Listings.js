import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../assets/css/style.css"; 
import AllUserListingsComponent from "../components/AllUserListingsComponent";
import Update from "../components/Update";
import { addDoc, collection,getDocs } from "firebase/firestore";
import { db, auth } from "../firebase-config/config";

export const Listings = (props) => {
    const [allListings, setAllListings] = useState([])
    const [flag, setFlag] = useState(true);

    const listingCollectionRef = collection(db, "listings");
    let navigate = useNavigate();

    useEffect(() => {
      const getListings = async () => {
        const data = await getDocs(listingCollectionRef)
        setAllListings(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getListings()
      if (!props.isAuth) {
      navigate("/signin");
      }
    }, []);

    console.log(allListings)
    return (
        <>
          <div className="container d-flex justify-content-center col-3 mt-2">
            <ul class="nav nav-pills" >
              <li class="nav-item" >
                <a class={`nav-link  ${flag ? "active1" : ""}`} onClick={() => {
                    setFlag(true);
                  }}
                  aria-current="page" href="#"
                >
                  My Listings
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${!flag ? "active1" : ""} `}
                  onClick={() => {
                    setFlag(false);
                  }}
                  href="#"
                >
                  Update
                </a>
              </li>
            </ul>
          </div>
          {flag ? (
            <div><AllUserListingsComponent/></div>
          ) : (
            <div><Update allListings={allListings}/></div>
          )}
        </>
      );
}