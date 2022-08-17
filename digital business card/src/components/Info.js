import React from "react";
import profileImg from "../images/profile-picture.png";
import emailIcon from "../images/email-icon.png"

function Info() {
  return (
    <div className="info">
      <img src={profileImg} alt="profile" />

      <div className="info--text">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <p>laurasmith.website</p>
        <button>
          <img src={emailIcon} alt="icon" />
          Email
        </button>
      </div>
    </div>
  );
}

export default Info;