import React from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcomeContainer">
        <h2> MENU</h2>
        <Link to="/browse-catalogue">
          <img
            src="./assets/branding/ArtFlipLogo.png"
            className="mainLogo"
          ></img>
        </Link>

        <h3> DATE</h3>
      </div>
    </>
  );
};

export default Welcome;
