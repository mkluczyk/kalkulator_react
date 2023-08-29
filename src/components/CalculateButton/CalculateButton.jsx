import React from "react";
import "./CalculateButton.css";

const CalculateButton = ({ onClick }) => {
  return (
    <button className="btn-count" onClick={onClick}>
      Przelicz
    </button>
  );
};

export default CalculateButton;
