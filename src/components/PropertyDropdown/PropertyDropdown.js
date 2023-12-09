import React, { useState } from "react";
import { useGlobalContext } from "../HouseContext/HouseContext";
import {
  Container,
  Icon,
  UpIcon,
  DownIcon,
  CountryList,
  Country,
} from "./PropertyDropdownStyles";

const PropertyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { property, setProperty, properties } = useGlobalContext();

  return (
    <div>
      <Container onClick={toggle}>
        <Icon />
        <div>
          <h4>{property}</h4>
          {isOpen && (
            <CountryList>
              {properties.map((item, i) => {
                return (
                  <Country key={i} onClick={() => setProperty(item)}>
                    {item}
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

export default PropertyDropdown;
