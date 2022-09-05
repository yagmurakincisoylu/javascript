import React from "react";
import icon from "../images/icon.png"

function Header({toggleDarkMode, darkMode}) {
  return (
    <header className={darkMode ? "dark" : ""}>
      <div>
        <img src={icon} alt="logo" />
        <h1>ReactFacts</h1>
      </div>

      <div className="toggler">
        <p className="toggler-light">Light</p>

        <div className="toggler-slider" onClick={toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>

        <p className="toggler-dark">Dark</p>
      </div>
    </header>
  );
}

export default Header;
