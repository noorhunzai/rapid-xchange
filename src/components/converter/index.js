import React, { useState, useEffect } from "react";
import "./styles.css";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AUD");
  const [exchangeRate, setExchangeRate] = useState(null);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const apiUrl = `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`;

  const handleConvert = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const rates = data.rates;
        const exchangeRate = rates[toCurrency];
        setExchangeRate(exchangeRate * amount);
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
        setExchangeRate(null);
      });
  };

  useEffect(() => {
    handleConvert();
  }, [fromCurrency, toCurrency]); // Trigger conversion when the "From" or "To" currency changes

  return (
    <div className="main-con">
      <div className="data-con">
        <div>
          <h1>Rapid Currency Converter</h1>
          <p>Powered by Rapid Xchange</p>
        </div>
        <div className="inputs-con">
          <div className="basecoin-con column">
            <div>
              <p>From</p>
            </div>
            <div>
              <select
                id="from-currency"
                name="from-currency"
                className="amount-input"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="CZK">CZK</option>
              </select>
            </div>
          </div>
          <div className="toCoin-con column">
            <div>
              <p>To</p>
            </div>
            <div>
              <select
                id="to-currency"
                name="to-currency"
                value={toCurrency}
                className="amount-input"
                onChange={handleToCurrencyChange}
              >
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="ISK">ISK</option>
                <option value="INR">INR</option>
                <option value="KRW">KRW</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
              </select>
            </div>
          </div>
          <div className="amount-con column">
            <div>
              <p>Amount</p>
            </div>
            <div className="amount-con">
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                className="amount-input"
                onChange={handleAmountChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="exchange-con">
          <div>
            <label htmlFor="exchange-rate">
              {amount} {fromCurrency} to {toCurrency}:{" "}
            </label>
            <span id="exchange-rate">{exchangeRate}</span>
          </div>
          <div>
            <button onClick={handleConvert} className="convert-btn">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;