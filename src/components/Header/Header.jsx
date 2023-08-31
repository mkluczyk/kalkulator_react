import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <img
        className={styles.img}
        src="exchange_506167.png"
        alt="Logo przelicznika walut"
      />
      <h1 className={styles.title}>PRZELICZNIK WALUT</h1>
    </>
  );
};
export default Header;
