import React from "react";
import styles from "./OutputValue.module.css";

const OutputValue = ({ value }) => {
  return <span className={styles.outputValue}>{value}</span>;
};

export default OutputValue;
