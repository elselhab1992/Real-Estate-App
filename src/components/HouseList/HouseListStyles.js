import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Section = styled.section`
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
    padding: 0 175px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  text-align: center;
`;

const Loading = styled(AiOutlineLoading3Quarters)`
  color: ${(props) => props.theme.colors.primary};
  border-width: 0.5rem;
  border-style: solid;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Section, Loading, Div };
