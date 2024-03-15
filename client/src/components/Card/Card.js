import React from "react";
import "./Card.css";

export const Card = ({ img, imgTitle, para, alignment }) => {
  return (
    <div className={`card ${alignment}`}>
      <div className="card-image-container">
        <img src={img} alt={imgTitle} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{imgTitle}</h2>
        <p>{para}</p>
        <a href="#" className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};
