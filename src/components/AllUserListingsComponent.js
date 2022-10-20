import React from 'react'
import { useEffect, useState } from "react"
import { db } from '../firebase-config/config'
import { collection, getDocs } from "firebase/firestore"
import {auth} from "../firebase-config/config"

function AllUserListingsComponent(props) {
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
    <div className="container mt-1">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Listing name</th>
                <th scope="col">Location</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Financing</th>
                <th scope="col">Negotiable</th>
                <th scope="col">Time</th>
                <th scope="col">Sold Out</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
               {
                  allListings.filter(item => (item['seller']['sellerID'] === auth.currentUser.uid)).map((listing, key) => {
                    return (<tr key={key}>
                      <td>{listing['listing-name']}</td>
                      <td>{listing['location']}</td>
                      <td>{listing['size']}</td>
                      <td>{listing['price']}</td>
                      <td>{listing['financing']}</td>
                      <td>{listing['negotiable']}</td>
                      <td>{listing['timestamp']}</td>
                      <td>{listing['sold-out']}</td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>)
                })
              }
            </tbody>
          </table>
        </div>
  )
}

export default AllUserListingsComponent