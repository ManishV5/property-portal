import React from "react";
import backgroundImageHome from "../assets/backgroundImageHome.jpg";
import { AboutBar } from "../components/Aboutbar";
import { SearchBar } from "../components/SearchBar";
import "../assets/css/style.css"

export const Home = () => {
  const myStyle = {
    backgroundImage: `url(${backgroundImageHome})`,
    height: "92vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div class="container-float" style={myStyle} />
      <SearchBar />
      <AboutBar />
    </>
  );
};
