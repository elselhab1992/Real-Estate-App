import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.white};
`;

const PropertyType = styled.p`
  background-color: ${(props) => props.theme.colors.green};
  padding: 3px;
  border-radius: 5px;
`;

const Country = styled.p`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3px;
  border-radius: 5px;
`;

const Price = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
  color: ${(props) => props.theme.colors.primary};
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImgContainer = styled.div`
  width: 62%;
`;

const Img = styled.img`
  width: 100%;
`;

const AgentContainer = styled.div`
  border: 1px solid #ccc;
  padding: 2rem 1rem;
  width: 25%;
`;

const RoomsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 1rem 0;
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

export {
  Section,
  MainContainer,
  ImgContainer,
  Bed,
  Bath,
  Dimensions,
  Price,
  TopInfo,
  Type,
  Img,
  AgentContainer,
  RoomsContainer,
  PropertyType,
  Country,
};
