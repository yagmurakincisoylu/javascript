import React from "react";
import phoneIcon from "./icons/phone-icon.png";
import emailIcon from "./icons/mail-icon.png";

function Contact({img, name, phone, email}) {

  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src={img} />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phoneIcon} />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={emailIcon} />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;