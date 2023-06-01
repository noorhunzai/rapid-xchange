import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context/context";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Exchange = () => {
  const [amount, setAmount] = useState("1");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("JPY");
  const [exchangeRates, setExchangeRates] = useState(null);

  // Access the chartURL value from the context
  const { updateUrl, updateBaseCurrency, updateToCurrency } =
    useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${baseCurrency}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      setExchangeRates(null);
    }
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyClick = (currency) => {
    setQuoteCurrency(currency);

    // Construct the URL for the new page
    const today = new Date().toISOString().split("T")[0];
    const startDate = new Date().getTime() - 90 * 24 * 60 * 60 * 1000;
    const startDateFormatted = new Date(startDate).toISOString().split("T")[0];
    // const chartUrl = `/chart?base=${baseCurrency}&quote=${currency}&start=${startDateFormatted}&end=${today}`;
    const chartUrl = `https://api.frankfurter.app/${startDateFormatted}..${today}?from=${baseCurrency}&to=${currency}`;
    updateUrl(chartUrl);
    updateBaseCurrency(baseCurrency);
    updateToCurrency(currency);
    navigate(`/chart/${currency}`);
  };

  return (
    <div className="exchange-main-con">
      <div className="exchnage-con">
        <div>
          <select
            id="base-currency"
            name="base-currency"
            className="amount-input"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            className="amount-input"
          />
        </div>
      </div>
      <div className="exchange-rates-con">
        {!exchangeRates ? (
          <p>Loading exchange rates...</p>
        ) : (
          <>
            <div className="exchange-rates-left">
              {Object.entries(exchangeRates)
                .slice(0, Object.keys(exchangeRates).length / 2)
                .map(([currency, rate]) => (
                  <p key={currency} className="rates">
                    {" "}
                    {amount} {baseCurrency} to {currency}:{" "}
                    <span
                      className="chart-link"
                      onClick={() => handleCurrencyClick(currency)}
                    >
                      {rate * amount}
                    </span>
                  </p>
                ))}
            </div>
            <div className="exchange-rates-right">
              {Object.entries(exchangeRates)
                .slice(Object.keys(exchangeRates).length / 2)
                .map(([currency, rate]) => (
                  <p key={currency} className="rates">
                    {amount} {baseCurrency} to {currency}:{" "}
                    <span
                      className="chart-link"
                      onClick={() => handleCurrencyClick(currency)}
                    >
                      {rate * amount}
                    </span>
                  </p>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exchange;
