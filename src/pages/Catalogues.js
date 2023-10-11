import React from "react";
import { PlantList } from "../components/PlantList"
import { Link } from "react-router-dom";
import "../styles/Catalogues.css";

function Catalogues() {
  return (
    <div className="catalogues">
      <h1 className="plant-Title">Plants List</h1>
      <div className="PlantLists">
        {PlantList.map(
          (PlantList) => (
            <Link to={`/plants/${PlantList.id}`}>
            <div className="plants" key={PlantList.id}>
              <img src={PlantList.url} alt={PlantList.name}  className="plant-img"  />
              <h2 className="Plant-name">{PlantList.name}</h2>
              <div className="card"></div>
              
            </div>
            </Link>
          )
          
          
        )}
      </div>
    </div>
  );
}

export default Catalogues;