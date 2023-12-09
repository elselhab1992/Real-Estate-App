import React, { useState } from "react";
import {
  Container,
  Icon,
  UpIcon,
  DownIcon,
  CountryList,
  Country,
} from "./PriceRangeDropdownStyles";
import { useGlobalContext } from "../HouseContext/HouseContext";

const PriceRangeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { prices, setPrices, priceRange } = useGlobalContext();

  return (
    <div>
      <Container onClick={toggle}>
        <Icon />
        <div>
          <h4>{prices}</h4>
          {isOpen && (
            <CountryList>
              {priceRange.map((item, i) => {
                return (
                  <Country key={i} onClick={() => setPrices(item.value)}>
                    {item.value}
                  </Country>
                );
              })}
            </CountryList>
          )}
        </div>
        <div>{isOpen ? <UpIcon /> : <DownIcon />}</div>
      </Container>
    </div>
  );
};

export default PriceRangeDropdown;
