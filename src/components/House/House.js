import {
  Container,
  TypeContainer,
  ImgContainer,
  Img,
  Type,
  Country,
  RoomsContainer,
  Bed,
  Bath,
  Dimensions,
  HouseInfo,
  Price,
} from "./HouseStyles";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <Container>
      <ImgContainer>
        <Img src={image} alt="house" />
      </ImgContainer>
      <TypeContainer>
        <Type>{type}</Type>
        <Country>{country}</Country>
      </TypeContainer>
      <h4>{address}</h4>
      <RoomsContainer>
        <HouseInfo>
          <span>
            <Bed />
          </span>
          {bedrooms}
        </HouseInfo>
        <HouseInfo>
          <span>
            <Bath />
          </span>
          {bathrooms}
        </HouseInfo>
        <HouseInfo>
          <span>
            <Dimensions />
          </span>
          {surface}
        </HouseInfo>
      </RoomsContainer>
      <Price>${price}</Price>
    </Container>
  );
};

export default House;
