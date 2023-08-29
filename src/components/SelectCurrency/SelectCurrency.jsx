import React from "react";
import "./SelectCurrency.css";
import currencies from "../../data/currencies";

const SelectCurrency = ({ value, onChange }) => {
  return (
    <select className="select-currency" value={value} onChange={onChange}>
      {currencies.map((currency) => (
        <option className="option" key={currency.code} value={currency.code}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCurrency;
