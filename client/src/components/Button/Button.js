import React from "react";
import "./Button.css";

export const Button = ({ label, variant = "primary" }) => {
  return <button className={`hero-button ${variant}`}>{label}</button>;
};
