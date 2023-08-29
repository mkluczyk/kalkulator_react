export const calculatedValue = (currencyData, inputValue) => {
  const currencyValue = currencyData.mid;
  return currencyValue * inputValue;
};

export default calculatedValue;
