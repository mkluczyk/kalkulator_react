import React, { useState } from "react";
import "./CurrencyConverter.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Output from "../Output/Output";
import { calculatedValue } from "../../utils/calculatedValue";
import fetchCurrencyData from "../../services/apiCurrencies";

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("eur");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleConversion = async () => {
    setOutput("");

    if (isNaN(inputValue) || inputValue <= 0) {
      window.alert("Wpisz poprawną wartość");
      return;
    }

    setIsLoading(true);
    try {
      const currencyData = await fetchCurrencyData(selectedCurrency);
      const calculatedResult = calculatedValue(currencyData, inputValue);
      setOutput(`${calculatedResult.toFixed(2)} PLN`);
    } catch (error) {
      setOutput("Wystąpił błąd");
    }
    setIsLoading(false);
  };

  return (
    <div className="box">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Input value={inputValue} onChange={handleInputChange} />
        <Select value={selectedCurrency} onChange={handleCurrencyChange} />
        <Button onClick={handleConversion} />
        <Output value={output} />
      </div>
      {isLoading ? <Loader /> : null};
      <Footer />
    </div>
  );
};

export default CurrencyConverter;
