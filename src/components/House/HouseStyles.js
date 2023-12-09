import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0 1rem;
  margin: auto;
  width: 350px;
  height: 500px;
  box-shadow: 5px 5px 5px 5px #e4e6ed;
  border-radius: 10px;
  transition: 700ms;

  &:hover {
    box-shadow: 5px 5px 15px 15px #dde6ed;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  color: ${(props) => props.theme.colors.white};
`;

const Type = styled.p`
  background-color: ${(props) => props.theme.colors.green};
  padding: 3px;
  border-radius: 5px;
`;

const Country = styled.p`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3px;
  border-radius: 5px;
`;

const RoomsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const HouseInfo = styled.p`
  color: ${(props) => props.theme.colors.grey};
`;

const Bed = styled(FaBed)`
  font-size: ${(props) => props.theme.fontSize.small};
  margin-right: 7px;
`;

const Bath = styled(FaBath)`
  font-size: ${(props) => props.theme.fontSize.small};
  margin-right: 7px;
`;

const Dimensions = styled(RxDimensions)`
  font-size: ${(props) => props.theme.fontSize.small};
  margin-right: 7px;
`;

const Price = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
`;

export {
  Container,
  TypeContainer,
  ImgContainer,
  Img,
  Type,
  Country,
  RoomsContainer,
  HouseInfo,
  Bed,
  Bath,
  Dimensions,
  Price,
};
