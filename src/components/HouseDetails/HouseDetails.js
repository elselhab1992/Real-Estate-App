import {
  Section,
  MainContainer,
  ImgContainer,
  Bed,
  Bath,
  Dimensions,
  TopInfo,
  Type,
  Price,
  Img,
  AgentContainer,
  RoomsContainer,
  PropertyType,
  Country,
} from "./HouseDetailsStyles";
import { ContactAgent } from "../index";

const HouseDetails = ({ house }) => {
  const {
    name,
    description,
    imageLg,
    address,
    country,
    type,
    price,
    bedrooms,
    bathrooms,
    surface,
  } = house;
  return (
    <Section>
      <h3>{name}</h3>
      <TopInfo>
        <p>{address}</p>
        <Type>
          <PropertyType>{type}</PropertyType>
          <Country>{country}</Country>
        </Type>
        <Price>${price}</Price>
      </TopInfo>
      <MainContainer>
        <ImgContainer>
          <Img src={imageLg} alt={name} />
          <RoomsContainer>
            <p>
              <span>
                <Bed />
              </span>
              {bedrooms}
            </p>
            <p>
              <span>
                <Bath />
              </span>
              {bathrooms}
            </p>
            <p>
              <span>
                <Dimensions />
              </span>
              {surface}
            </p>
          </RoomsContainer>
          <p>{description}</p>
        </ImgContainer>
        <AgentContainer>
          <ContactAgent house={house} />
        </AgentContainer>
      </MainContainer>
    </Section>
  );
};

export default HouseDetails;
