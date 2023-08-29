import React from "react";
import "./InputValue.css";

const InputValue = ({ onChange }) => {
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

export default InputValue;
