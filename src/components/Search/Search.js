import { useGlobalContext } from "../HouseContext/HouseContext";
import {
  CountryDropdown,
  PriceRangeDropdown,
  PropertyDropdown,
} from "../index";
import { Section, Container, SearchIcon, Icon } from "./SearchStyles";

const Search = () => {
  const { handleSearch } = useGlobalContext();

  return (
    <Section>
      <Container>
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
        <SearchIcon>
          <Icon onClick={handleSearch} />
        </SearchIcon>
      </Container>
    </Section>
  );
};

export default Search;
