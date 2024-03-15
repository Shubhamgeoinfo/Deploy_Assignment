import React from "react";
import "./Image.css";
import house from "./image1.png";

function Image() {
  return (
    <>
      <div className="image">
        <img src={house} alt="home"></img>
      </div>
    </>
  );
}
export default Image;
