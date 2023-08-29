export const calculatedValue = (currencyData, inputValue) => {
  const currencyValue = currencyData.mid;
  return `${(currencyValue * inputValue).toFixed(2)} PLN`;
};

export default calculatedValue;
