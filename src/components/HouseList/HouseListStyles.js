import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem;
  padding: 0 220px;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1rem;
    padding: 10px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 50px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem;
    padding: 0 220px;
  }
`;

export { Container };
