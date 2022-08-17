import React from "react";
import twitterIcon from "../images/twitter-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";

function Links() {
  return (
    <div className="links">
      <div>
        <a href="#" className="link">
          <img src={twitterIcon} alt="icon" />
        </a>
        
        <a href="#" className="link">
          <img src={facebookIcon} alt="icon" />
        </a>
        
        <a href="#" className="link">
          <img src={instagramIcon} alt="icon" />
        </a>
        
        <a href="#" className="link">
          <img src={linkedinIcon} alt="icon" />
        </a>
        
        <a href="#" className="link">
          <img src={githubIcon} alt="icon" />
        </a>
      </div>
    </div>
  );
}

export default Links;