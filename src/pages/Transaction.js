import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { auth, db } from '../firebase-config/config'

export const Transaction = (props) => {
    const [allTransactions, setAllTransactions] = useState([])
    const listingsCollectionRef = collection(db, 'transactions')

    let navigate = useNavigate()
    useEffect(() => {
        if(!props.isAuth){
            navigate('/signin')
        }

        const getTransactions = async () => {
          const data = await getDocs(listingsCollectionRef)
          let txns = []
          data.docs.forEach((doc) => {
              txns.push(doc.data())
          })
          setAllTransactions(txns)
        }
        getTransactions()
    }, [])


    
    return (
      
      <div className="container mt-5">
        <p></p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Buyer</th>
                <th scope="col">Seller</th>
                <th scope="col">Listing name</th>
                <th scope="col">Price</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
               {
                  allTransactions.filter(item => (item['buyer']['buyerID'] === auth.currentUser.uid || item['seller']['sellerID'] === auth.currentUser.uid)).map((txn, key) => {
                    return (<tr key={key}>
                      <td>{txn['buyer']['buyer-name']}</td>
                      <td>{txn['seller']['seller-name']}</td>
                      <td>{txn['listing-name']}</td>
                      <td>{txn['price']}</td>
                      <td>{txn['timestamp']}</td>
                    </tr>)
                })
              }
            </tbody>
          </table>
        </div>
    );
}