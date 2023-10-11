import React from "react";
import "../styles/About.css";
import Aloe from "../styles/OIP.jpg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aloe})` }}
      ></div>
        <h1> ABOUT US</h1>
        <p>
          Our plant catalogue website is an online platform dedicated to
          showcasing a diverse range of plants, often for gardening and
          landscaping purposes. These websites typically provide detailed
          information about many plant, including photos and descriptions . 
          Plant catalogue websites are valuable resources for both amateur and
          experienced gardeners, helping them discover new plant varieties, plan
          their gardens. 
        </p>
      </div>
    // </div>
  );
}

export default About;

