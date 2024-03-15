import React from "react";
import "./Hero.css";
import { Button } from "../Button/Button";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="one">
          <div className="one-text">CONNECTING DREAMS TO REALITY</div>
          <div className="two-text">YOUR PREMIER</div>
          <div className="one-text">REAL ESTATE MARKETPLACE</div>
          <div className="one-inside">Where every search ends with a home</div>
        </div>
        <div className="two">
          <Button label="Find Your Home" />
          <Button label="List Your Property" />
        </div>
      </div>
    </>
  );
}
export default Hero;
