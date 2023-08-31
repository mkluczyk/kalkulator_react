import React, { useState } from "react";
import styles from "./CurrencyConverter.module.css";
import Header from "../Header/Header";
import InputValue from "../InputValue/InputValue";
import SelectCurrency from "../SelectCurrency/SelectCurrency";
import CalculateButton from "../CalculateButton/CalculateButton";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import OutputValue from "../OutputValue/OutputValue";
import { calculatedValue } from "../../utils/calculatedValue";
import fetchCurrencyData from "../../services/apiCurrencies";

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("eur");
  const [outputValue, setOutputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleConversion = async () => {
    setOutputValue("");

    if (isNaN(inputValue) || inputValue <= 0) {
      window.alert("Wpisz poprawną wartość");
      return;
    }

    setIsLoading(true);
    try {
      const currencyData = await fetchCurrencyData(selectedCurrency);
      const calculatedResult = calculatedValue(currencyData, inputValue);
      setOutputValue(calculatedResult);
    } catch (error) {
      setOutputValue("Wystąpił błąd");
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.bgImg}>
      <div className={styles.box}>
        <div className={styles.container}>
          <Header />
        </div>
        <div className={styles.container}>
          <InputValue value={inputValue} onChange={handleInputChange} />
          <SelectCurrency
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          />
          <CalculateButton onClick={handleConversion} isDisabled={isLoading} />
          <OutputValue value={outputValue} />
        </div>
        <div className={styles.loaderDiv}>{isLoading ? <Loader /> : null}</div>
        <Footer />
      </div>
    </div>
  );
};

export default CurrencyConverter;
