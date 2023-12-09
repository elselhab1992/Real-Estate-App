import { useGlobalContext } from "../HouseContext/HouseContext";
import { useState } from "react";
import {
  Container,
  Icon,
  UpIcon,
  DownIcon,
  CountryList,
  Country,
} from "./CountryDropdownStyles";

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { country, setCountry, countries } = useGlobalContext();

  return (
    <div>
      <Container onClick={toggle}>
        <Icon />
        <div>
          <h4>{country}</h4>
          {isOpen && (
            <CountryList>
              {countries.map((item, i) => {
                return (
                  <Country key={i} onClick={() => setCountry(item)}>
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

export default CountryDropdown;
