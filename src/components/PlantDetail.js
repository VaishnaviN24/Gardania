import React from "react";
import { useParams } from "react-router-dom";
import "../styles/PlantDetail.css"; 
function PlantDetail() {
  const { id } = useParams();

  
  const plantDetails = {
    1: {
      name: "Aloevera",
      sunExposure: "Full sun to partial shade",
      soilType: "Well-drained soil",
      bloomTime: "Spring to early summer",
      flowerColor: "Yellow",
      url:'/image/Aloe.jpg'
    },
    2: {
      name: "Bamboo",
      sunExposure: "Full sun to part shade",
      soilType: "Moist, well-drained soil",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",
      url:'/image/Bamboo_Plant.jpg'
    },
    3: {
      name: "Christmas Cactus",
      sunExposure: "Indirect light or filtered sun",
      soilType: "Well-drained, slightly acidic soil",
      bloomTime: "Late fall to winter",
      flowerColor: "Various colors (e.g., red, pink, white)",
      url:"/image/Christmas_cactus.jpg"
    },
    4: {
      name: "Cycas",
      sunExposure: "Full sun to partial shade",
      soilType: "Well-drained sandy soil",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
      url:'/image/Cycas_Plant.jpg'
    },
    5: {
      name: "Areca Palms",
      sunExposure: "Bright indirect light to low light",
      soilType: "Well-drained, slightly acidic soil",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",
      url :'/image/Areca_Palms.jpg'

    },
    6: {
      name: "Golden Pothos",
      sunExposure: "Indirect light to low light",
      soilType: "Well-draining potting mix",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",
      url :'/image/Golden_Pothos.jpg'
    },
    7: {
      name: "Prayer Plant",
      sunExposure: "Indirect light to low light",
      soilType: "Well-draining potting mix",
      bloomTime: "Spring to early summer",
      flowerColor: "White with green stripes",
      url :'/image/Prayer_Plants.jpg'
    },
    8: {
      name: "Snake Plant",
      sunExposure: "Low to bright indirect light",
      soilType: "Well-drained potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
      url :'/image/Snake_Plant.jpg'
    },
    9: {
      name: "Spider Plant",
      sunExposure: "Indirect light to bright, indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Summer",
      flowerColor: "White with green stripes",
      url :'/image/Spider_Plant.jpg'
    },
    10: {
      name: "Tropical Monstera Plant",
      sunExposure: "Indirect light to bright, indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
      url :'/image/Tropical_Monstera_Plant.jpg'
    },
    11: {
      name: "ZZ Plant",
      sunExposure: "Low to bright indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
      url :'/image/ZZ_plant.jpg'
    },
  };

  const selectedPlant = plantDetails[id];

  if (!selectedPlant) {
    return <div>Plant not found</div>;
  }

  return (
    <div className="plant-detail">
      <h2>{selectedPlant.name}</h2>
      <div className="plant-info">
        <div className="details">
        <h3>Sun Exposure:</h3>
        <p>{selectedPlant.sunExposure}</p>
        <h3>Soil Type:</h3>
        <p>{selectedPlant.soilType}</p>
        <h3>Bloom Time:</h3>
        <p>{selectedPlant.bloomTime}</p>
        <h3>Flower Color:</h3>
        <p>{selectedPlant.flowerColor}</p>
        </div>
        <div className="plant-img_detail">
          <img src={selectedPlant.url} alt={selectedPlant.name}  className="plant-img"/>
        </div>
      </div>
    </div>
  );
}

export default PlantDetail;

