import searchlogo from "../assets/search-logo.jpg";
import "../assets/css/style.css";
import { useState } from "react";

export const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("")

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
          />
          <span className="input-group-btn">
            <button className="btn btn-search">
              <img src={searchlogo} width={30} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
