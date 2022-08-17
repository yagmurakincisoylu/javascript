import React from "react";
import icon from "../images/icon.png"

function Header() {
  return (
    <header>
      <div>
        <img src={icon} alt="logo" />
        <h1>ReactFacts</h1>
      </div>

      <p>React Course- Poject 1</p>
    </header>
  );
}

export default Header;
