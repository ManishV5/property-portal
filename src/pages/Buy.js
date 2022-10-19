import { useEffect, useState } from "react"
import { db, storage } from '../firebase-config/config'
import { collection, getDocs } from "firebase/firestore"
import { ref, listAll, getDownloadURL } from "firebase/storage"

function ListingComponent(props){
   const [imagesUrl, setImagesUrl] = useState([])
    
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
                <div id={`${props.listing['listing-name']}`} class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        {imagesUrl.map((image, key)=>{
                            let isFirst = key === 0;
                            return isFirst ? (
                            <div class="carousel-item active">
                                <img src={image} style={{height:"360px", width: "640px"}} alt="..."/>
                            </div>
                            ) : (
                            <div class="carousel-item">
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
                </div>
            </div>
    </>)
}

export const Buy = () => {
    const [allListings, setAllListings] = useState([])
    const listingsCollectionRef = collection(db, 'listings')

    useEffect(() => {
        const getListings = async () => {
            const data = await getDocs(listingsCollectionRef)
            let listings = []

            data.docs.forEach((doc) => {
                listings.push(doc.data())
            })
            setAllListings(listings)
        }
        getListings()
    }, [])

    
    return (
        <div className="container col-6 mt-5">
            {allListings.map((listing, key) => {
                return (<div key={key}><ListingComponent listing={listing}/></div>)
            })}
        </div>
    )
}