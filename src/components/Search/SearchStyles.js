import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Section = styled.section`
  padding: 0 280px;

  @media (min-width: 300px) {
    padding: 0 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0 7rem;
  }

  @media (min-width: 1200px) {
    padding: 0 280px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 15rem;
  margin: auto;
  padding: 1rem;

  box-shadow: 5px 5px 15px 15px #dde6ed;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: 3fr 3fr 3fr 1fr;
  }
`;

const SearchIcon = styled.div`
  width: 120px;
  padding: 0.7rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 300px) {
    margin: auto;
  }
`;

const Icon = styled(IoSearch)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.small};
`;

export { Section, Container, SearchIcon, Icon };
