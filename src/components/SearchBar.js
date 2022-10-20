import searchlogo from "../assets/search-logo.jpg";
import "../assets/css/style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("")
    const navigate = useNavigate()
    let locationRef = React.createRef()

    const handleSearchEvent = () => {
        navigate(`/buy/${locationRef.current.value}`)
    }
  return (
    <>
      <div className="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <div className="input-group form-container">
          <input
            type="text"
            name="search"
            className="form-control search-input"
            placeholder="Enter location to search"
            autoFocus="autofocus"
            autoComplete="off"
            ref={locationRef}
          />
          <span className="input-group-btn">
            <button className="btn btn-search" onClick={handleSearchEvent}>
              <img src={searchlogo} width={30} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
