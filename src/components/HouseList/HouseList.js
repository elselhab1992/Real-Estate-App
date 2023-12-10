import { useGlobalContext } from "../HouseContext/HouseContext";
import { House } from "../index";
import { Section, Loading, Div } from "./HouseListStyles";
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses, loading } = useGlobalContext();

  if (loading) {
    return (
      <Div>
        <Loading />
      </Div>
    );
  }
  if (houses.length < 1) {
    return (
      <Div>
        <h2>Sorry, Nothing Found</h2>
      </Div>
    );
  }

  return (
    <Section>
      {houses.map((house) => {
        return (
          <Link to={`/property/${house.id}`} key={house.id}>
            <House house={house} />
          </Link>
        );
      })}
    </Section>
  );
};

export default HouseList;
