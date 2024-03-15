import React from "react";
import "./Choose.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="why-choose-us__title">WHY CHOOSE XYZ?</h2>
      <div className="why-choose-us__grid">
        <div className="why-choose-us__grid-item">
          <span className="why-choose-us__grid-item__number">01</span>
          <div className="why-choose-us__grid-item__text">
            SEARCH AND FILTERS
          </div>
          <p className="why-choose-us__grid-item__description">
            Tailored Searches to meet your needs. Find what you're looking for
            with precision.
          </p>
        </div>
        <div className="why-choose-us__grid-item">
          <span className="why-choose-us__grid-item__number">02</span>
          <div className="why-choose-us__grid-item__text">
            DETAILED LISTINGS
          </div>
          <p className="why-choose-us__grid-item__description">
            Every Detail Matters. Sellers can list, and buyers can explore
            properties that meet their exact specifications.
          </p>
        </div>
        <div className="why-choose-us__grid-item">
          <span className="why-choose-us__grid-item__number">03</span>
          <div className="why-choose-us__grid-item__text">DIRECT MESSAGING</div>
          <p className="why-choose-us__grid-item__description">
            Seamless Communication. Connect directly with sellers or buyers to
            ask questions, negotiate, and make decisions.
          </p>
        </div>
        <div className="why-choose-us__grid-item">
          <span className="why-choose-us__grid-item__number">04</span>
          <div className="why-choose-us__grid-item__text">SECURE PAYMENTS</div>
          <p className="why-choose-us__grid-item__description">
            Trust in Every Transaction. Our secure payment system ensures your
            peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
