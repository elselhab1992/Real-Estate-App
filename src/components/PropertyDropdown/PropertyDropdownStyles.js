import styled from "styled-components";
import { FaHouseUser } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 250px;
  position: relative;
  border: 1px solid #ccc;
  padding: 0.7rem 0.3rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 300px) {
    width: 300px;
    margin: auto;
  }

  @media (min-width: 1200px) {
    width: 250px;
    margin: 0;
  }
`;

const Icon = styled(FaHouseUser)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const UpIcon = styled(IoMdArrowDropup)`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const DownIcon = styled(IoMdArrowDropdown)`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const CountryList = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 2px #ccc;
  width: 100%;
  padding: 1rem;
  position: absolute;
  top: 3rem;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const Country = styled.li`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export { Container, Icon, UpIcon, DownIcon, CountryList, Country };
