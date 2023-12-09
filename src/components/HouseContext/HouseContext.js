/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";
import { housesData } from "../../data";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (Any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property (Any)");
  const [properties, setProperties] = useState([]);
  const [prices, setPrices] = useState("Price (All)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (Any)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Property (Any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const priceRange = [
    {
      value: "Price (All)",
    },
    {
      value: "$10,000 - $30,000",
    },
    {
      value: "$30,000 - $40,000",
    },
    {
      value: "$100,000 - $130,000",
    },
    {
      value: "$130,000 - $160,000",
    },
    {
      value: "$160,000 - $190,000",
    },
    {
      value: "$190,000 - $220,000",
    },
  ];

  const handleSearch = () => {
    console.log("click");
  };

  const contextValue = {
    houses,
    setHouses,
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    setProperties,
    prices,
    setPrices,
    priceRange,
    loading,
    setLoading,
    handleSearch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
