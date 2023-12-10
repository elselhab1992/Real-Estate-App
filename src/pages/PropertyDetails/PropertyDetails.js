import { useGlobalContext } from "../../components/HouseContext/HouseContext";
import { useParams } from "react-router-dom";
import { HouseDetails, ContactAgent } from "../../components";
import { Section, Container } from "./PropertyDetailsStyles";

const PropertyDetails = () => {
  const { houses } = useGlobalContext();

  const { id } = useParams();

  const house = houses.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <Section>
      <div>
        <HouseDetails house={house} />
      </div>
      {/* right */}
      <Container>{/* <ContactAgent house={house} /> */}</Container>
    </Section>
  );
};

export default PropertyDetails;
