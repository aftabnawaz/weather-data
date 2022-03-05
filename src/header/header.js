import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img className="image" src="./images/logo.png" alt="" />
      <div className="weather-text">Weather</div>
    </div>
  );
}
export default Header;
