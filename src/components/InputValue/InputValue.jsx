import React from "react";
import styles from "./InputValue.module.css";

const InputValue = ({ onChange }) => {
  return (
    <input
      className={styles.inputAmount}
      placeholder="Kwota PLN"
      min="0"
      type="number"
      onChange={onChange}
    />
  );
};

export default InputValue;
