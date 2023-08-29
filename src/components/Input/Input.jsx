import React from "react";
import "./Input.css";

const Input = ({ onChange }) => {
  return (
    <input
      className="input-amount"
      placeholder="Kwota PLN"
      min="0"
      type="number"
      onChange={onChange}
    />
  );
};

export default Input;
