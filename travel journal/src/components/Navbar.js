import React from "react";
import logo from "../icons/earth-icon.png"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <p>my travel journal.</p>
    </nav>
  );
}

export default Navbar;