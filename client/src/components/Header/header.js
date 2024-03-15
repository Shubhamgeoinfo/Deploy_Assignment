import React from "react";
import "./header.css";
import { Button } from "../Button/Button";
function Header() {
  return (
    <>
      <div className="container">
        <div className="name">
          <span className="n_one">XYZ</span>
          <span className="n_two">INDUSTRIES</span>
        </div>
        <div className="menu">
          <button className="menu-button">Home</button>
          <button className="menu-button">About us</button>
          <button className="menu-button">Property</button>
          <button className="menu-button">Services</button>
          <button className="menu-button">Contact</button>
        </div>
        <div className="button">
          <Button label={"Sign Up"} variant="secondary" />
          <Button label={"Sign In"} />
        </div>
      </div>
    </>
  );
}
export default Header;
