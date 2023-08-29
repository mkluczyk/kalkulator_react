const API_URL = "https://api.nbp.pl/api/exchangerates/rates/a/";

const fetchCurrencyData = async (currencyCode) => {
  const URL = `${API_URL}${currencyCode}/`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.rates[0];
  } catch (error) {
    throw new Error("Wystąpił błąd");
  }
};

export default fetchCurrencyData;
