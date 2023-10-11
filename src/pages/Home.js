import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    
    <div className="home" >
      <div className="headerContainer">
        <h1> Gardenia </h1>
        <p> Plant Related Information</p>
        <Link to="/catalogues">
          <button> Show Details</button>
        </Link>
      </div>
    </div>
  ); 
}

export default Home;