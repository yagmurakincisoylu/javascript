import React from "react";
import logo from "../icons/airbnb-logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}

export default Navbar;