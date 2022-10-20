import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Transaction = (props) => {
    let navigate = useNavigate()
    useEffect(() => {
        if(!props.isAuth){
            navigate('/signin')
        }
    }, [])

    return (
      <div className="container mt-5">
        {/* <h1 style={{ textAlign: "center" }}>My Transaction(s)</h1> */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Buyer</th>
                <th scope="col">Seller</th>
                <th scope="col">Listing name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>500000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}