import React, { useState } from "react";
import "./styles.css";
export const Exchange = () => {
  const [amount, setAmount] = useState("1");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState(null);

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

  return (
    <div className="exchange-main-con">
      <div className="exchnage-con ">
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
        <div>
          <button onClick={fetchExchangeRates} className="convert-btn">
            Convert
          </button>
        </div>
      </div>
      <div className="exchange-rates-con">
        {!exchangeRates ? (
          <>
            <p>Enter amount and click convert to see exchange rates</p>
          </>
        ) : (
          <>
            <div>
              <div>
                {Object.entries(exchangeRates).map(([currency, rate]) => (
                  <p key={currency} className="rates">
                    {amount} {baseCurrency} to {currency}: {rate * amount}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exchange;
