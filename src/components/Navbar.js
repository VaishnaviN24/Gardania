import React, { useState } from "react";
import Logo from "../styles/About_image.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo_of_plant"/>
        <h1 className="heading">Gardnia</h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/catalogues"> Catalogues </Link>
          <Link to="/about"> About </Link>
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/catalogues"> Catalogues </Link>
        <Link to="/about"> About </Link>
        

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;