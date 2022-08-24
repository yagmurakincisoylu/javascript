import React from "react";
import starEmpty from "../icons/star-empty.png";
import starFilled from "../icons/star-filled.png";

function Card() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    profile: "images/user.png",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  });

  const {firstName, lastName, profile, phone, email, isFavorite} = contact;

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !isFavorite
    }))
  }

  return (
    <div className="card-container">
      <div>
        <img src={profile} alt="profile" />
      </div>
      <img src={isFavorite ? starFilled : starEmpty} className="star-icon" onClick={toggleFavorite} alt="star icon" />
      <h2>{firstName} {lastName}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}

export default Card;