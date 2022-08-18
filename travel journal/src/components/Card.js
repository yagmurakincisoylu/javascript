import React from "react";
import markerIcon from "../icons/marker-icon.png"

function Card(props) {
  const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props;

  return (
    <div className="card">
      <img src={imageUrl} alt={`${title} photo`} />
      <div className="card-info">
        <div className="card-location">
          <img src={markerIcon} />
          <p>{location}</p>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card-text">
          <h2>{title}</h2>
          <p className="bold-text">{startDate} - {endDate}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;