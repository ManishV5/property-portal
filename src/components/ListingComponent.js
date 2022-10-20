import { useEffect, useState } from "react"
import {  storage, auth } from '../firebase-config/config'
import { ref, listAll, getDownloadURL } from "firebase/storage"
import Modal from "./Modal"

export const ListingComponent = (props) => {
    const [imagesUrl, setImagesUrl] = useState([])
    const [isModelOpen, setModal] = useState(false);
     
    useEffect(() => {
         const getImages = async () => {
             const listingImageRef = ref(storage, props.listing['imageRef'])
             listAll(listingImageRef).then((response) => {
                 response.items.forEach((item) => {
                     getDownloadURL(item).then((url) => {
                         setImagesUrl((prev) => [...prev, url])
                     })
                 })
             })
         }
         getImages()
    }, [])
 
     return(<>
             <div class="card mb-3">
                {props.isSearch && <h5 class="card-header text-center">Location : {props.location}</h5>}
                 <div id={`${props.listing['listing-name']}`} class="carousel slide" data-bs-ride="carousel">
                     <div class="carousel-inner">
                         {imagesUrl.map((image, key)=>{
                             let isFirst = key === 0;
                             return isFirst ? (
                             <div class="carousel-item active" key={key}>
                                 <img src={image} style={{height:"360px", width: "640px"}} alt="..."/>
                             </div>
                             ) : (
                             <div class="carousel-item" key={key}>
                                 <img src={image}  style={{height:"360px", width: "640px"}} alt="..."/>
                             </div>
                             ) 
                         })}
                     </div>
                     <button class="carousel-control-prev" type="button" data-bs-target={`#${props.listing['listing-name']}`} data-bs-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target={`#${props.listing['listing-name']}`} data-bs-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                     </button>
                 </div>
                 <div class="card-body">
                     <h5 class="card-title">{props.listing['listing-name']}</h5>
                     <p class="card-text">{props.listing['description']}</p>
                     <ul>
                         <li>Location: {props.listing['location']}</li>
                         <li>Price: Rs {props.listing['price']}</li>
                         <li>Size: {props.listing['size']} sq. feet</li>
                         {props.listing['negotiable'] === "true" && <li>Negotiable</li>}
                         {props.listing['financing'] === "true" && <li>Financing</li>}
                     </ul>
                    <div class="mt-3 text-center">
                        {auth.currentUser.uid !== props.listing['seller']['sellerID'] && <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${props.listing['listing-name']}_modal`} onClick={() => {setModal(true)}}>Buy Now</button>}
                        {isModelOpen && <Modal setModal={setModal} listing={props.listing}/>}
                    </div>
                 </div>
             </div>
     </>)
 }