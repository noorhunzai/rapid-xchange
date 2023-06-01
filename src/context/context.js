import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [url, setUrl] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const updateUrl = (value) => {
    setUrl(value);
  };
  const updateBaseCurrency = (value) => {
    setBaseCurrency(value);
  };
  const updateToCurrency = (value) => {
    setToCurrency(value);
  };

  const ContextData = {
    url,
    baseCurrency,
    toCurrency,
    updateBaseCurrency,
    updateToCurrency,
    updateUrl,
  };

  return (
    <MyContext.Provider value={ContextData}>{children}</MyContext.Provider>
  );
};