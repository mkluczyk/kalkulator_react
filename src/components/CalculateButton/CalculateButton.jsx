import React from "react";
import styles from "./CalculateButton.module.css";

const CalculateButton = ({ onClick, isDisabled }) => {
  return (
    <button className={styles.btnCount} onClick={onClick} disabled={isDisabled}>
      Przelicz
    </button>
  );
};

export default CalculateButton;
