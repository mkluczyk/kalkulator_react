import React from "react";
import "./CalculateButton.css";

const CalculateButton = ({ onClick, isDisabled }) => {
  return (
    <button className="btn-count" onClick={onClick} disabled={isDisabled}>
      Przelicz
    </button>
  );
};

export default CalculateButton;
