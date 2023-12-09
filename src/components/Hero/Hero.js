import hero from "../../assets/img/house-banner.png";
import {
  Container,
  Heading,
  Span,
  ImgContainer,
  Img,
  Text,
} from "./HeroStyles";

const Hero = () => {
  return (
    <section>
      <Container>
        <Text>
          <Heading>
            <Span>Rent</Span>your dream house with us
          </Heading>
          <p>
            powerfull, self-service product and growth analatyics to help you
            convert, engage, and retain more.
          </p>
        </Text>
        <ImgContainer>
          <Img src={hero} alt="home" />
        </ImgContainer>
      </Container>
    </section>
  );
};

export default Hero;
