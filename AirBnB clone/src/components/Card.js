import React from "react";
import starIcon from "../icons/star.png"

function Card(props) {
  const {title, price, coverImg, stats, location, openSpots} = props;
  const {rating, reviewCount} = stats;

  let cardBadgeText;

  if(openSpots === 0) {
    cardBadgeText = "SOLD OUT";
  } else if(location === "Online") {
    cardBadgeText = "ONLINE";
  }

  return (
    <div className="card">
      {cardBadgeText && <div className="card-badge">{cardBadgeText}</div>}
      <img src={`./images/${coverImg}`} />
      <div className="card-stats">
        <div className="flex">
          <img src={starIcon} />
          <p>
            {rating}
            <span className="gray-text">({reviewCount}) • {location}</span>
          </p>
        </div>
        <p className="card-title">{title}</p>
        <p className="card-price">
          <span className="bold-text">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;