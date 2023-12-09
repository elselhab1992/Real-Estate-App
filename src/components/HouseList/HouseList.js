import { useGlobalContext } from "../HouseContext/HouseContext";
import { House } from "../index";
import { Container } from "./HouseListStyles";

const HouseList = () => {
  const { houses } = useGlobalContext();

  return (
    <section>
      <Container>
        {houses.map((house) => {
          return <House house={house} key={house.id} />;
        })}
      </Container>
    </section>
  );
};

export default HouseList;
