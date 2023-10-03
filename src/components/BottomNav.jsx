import React from "react";
import "../styles/bottomNav.css";

const BottomNav = () => {
  return (
    <>
      <section className="bottomNav">
        <div className="bottomNavContainer">
          <div>
            <img
              className="bottomNavIcons"
              src="./assets/icons/browse.svg"
            ></img>
          </div>
          <div>
            <img
              className="bottomNavIcons"
              src="public/assets/icons/profile.svg"
            ></img>
          </div>
          <div>
            <img
              className="bottomNavIcons"
              src="public/assets/icons/add.svg"
            ></img>
          </div>
          <div>
            <img
              className="bottomNavIcons"
              src="public/assets/icons/save.svg"
            ></img>
          </div>
          <div>
            <img
              className="bottomNavIcons"
              src="public/assets/icons/swap.svg"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomNav;
