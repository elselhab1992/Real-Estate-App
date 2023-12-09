import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 1rem;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    gap: 12rem;
    padding: 3rem;
  }
`;

const Text = styled.div`
  width: 30%;

  @media (min-width: 300px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.secondary};
  line-height: 1;
  margin-bottom: 2rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Span = styled.span`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.5rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const ImgContainer = styled.div`
  width: 600px;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export { Container, Heading, Span, ImgContainer, Img, Text };
