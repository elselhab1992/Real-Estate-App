import { useGlobalContext } from "../../components/HouseContext/HouseContext";
import { useParams } from "react-router-dom";
import { HouseDetails } from "../../components";
import { Section } from "./PropertyDetailsStyles";

const PropertyDetails = () => {
  const { houses } = useGlobalContext();

  const { id } = useParams();

  const house = houses.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <Section>
      <HouseDetails house={house} />
    </Section>
  );
};

export default PropertyDetails;
