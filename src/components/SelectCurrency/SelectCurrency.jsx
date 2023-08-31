import React from "react";
import styles from "./SelectCurrency.module.css";
import currencies from "../../data/currencies";

const SelectCurrency = ({ value, onChange }) => {
  return (
    <select className={styles.selectCurrency} value={value} onChange={onChange}>
      {currencies.map((currency) => (
        <option
          className={styles.option}
          key={currency.code}
          value={currency.code}
        >
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCurrency;
