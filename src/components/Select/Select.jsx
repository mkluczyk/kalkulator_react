import React from "react";
import "./Select.css";
import currencies from "../../data/currencies";

const Select = ({ value, onChange }) => {
  return (
    <select className="select-currency" value={value} onChange={onChange}>
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
