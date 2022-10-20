import { useEffect, useState } from "react"
import { db } from '../firebase-config/config'
import { collection, getDocs } from "firebase/firestore"
import { ListingComponent } from "../components/ListingComponent"
import {useParams}  from "react-router-dom"

export const Buy = (props) => {
    const [allListings, setAllListings] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const location = useParams()

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
        if(Boolean(location['location'])){
            setIsSearch(true)
        }
    }, [])

    
    return (
        <div className="container col-6 mt-5">
            {isSearch ? (<>
                {
                    allListings.filter(item => item['location'] === location['location']).map((listing, key) => {
                        return (<div key={key}>
                            <p class="h3 text-center">Properties at {location['location']}</p>
                            <ListingComponent listing={listing} isSearch={isSearch} isAuth={props.isAuth} location={location['location']}/>
                        </div>)
                    })
                }
            </>) : (<>
                {allListings.map((listing, key) => {
                    return (<div key={key}><ListingComponent isAuth={props.isAuth} listing={listing}/></div>)
                })}
            </>)}
        </div>
    )
}