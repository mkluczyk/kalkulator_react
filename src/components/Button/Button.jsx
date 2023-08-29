import React from "react";
import "./Button.css";

const Button = (onClick) => {
  return (
    <button className="btn-count" onClick={onClick}>
      Przelicz
    </button>
  );
};

export default Button;
