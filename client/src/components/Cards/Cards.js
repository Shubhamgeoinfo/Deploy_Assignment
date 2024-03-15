import React from "react";
import { Card } from "../Card/Card";
import data from "./data";

function Cards() {
  return (
    <>
      {data.map((currentData, index) => (
        <Card
          img={currentData.img}
          imgTitle={currentData.imgTitle}
          para={currentData.para}
          key={index}
          alignment={index % 2 ? "rightAlign" : "leftAlign"}
        />
      ))}
    </>
  );
}
export default Cards;
