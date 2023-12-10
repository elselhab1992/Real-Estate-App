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
  const [prices, setPrices] = useState("Price (Any)");
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
      value: "Price (Any)",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
  ];

  const handleSearch = () => {
    //set loading
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(Any)");
    };
    const minPrice = parseInt(prices.split(" ")[0]);
    const maxPrice = parseInt(prices.split(" ")[2]);

    const newHouse = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      //if all default
      if (isDefault(country) && isDefault(property) && isDefault(prices)) {
        return house;
      }
      //if country not default
      if (!isDefault(country) && isDefault(property) && isDefault(prices)) {
        return house.country === country;
      }
      //if property not default
      if (isDefault(country) && !isDefault(property) && isDefault(prices)) {
        return house.type === property;
      }
      //if price not default
      if (isDefault(country) && isDefault(property) && !isDefault(prices)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      //if country and property not default
      if (!isDefault(country) && !isDefault(property) && isDefault(prices)) {
        return house.country === country && house.type === property;
      }

      //if country and price not default
      if (!isDefault(country) && isDefault(property) && !isDefault(prices)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      //if property and price not default
      if (isDefault(country) && !isDefault(property) && !isDefault(prices)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
        setLoading(false)
      );
    }, 200);
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
