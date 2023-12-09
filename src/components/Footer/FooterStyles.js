import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export { FooterContainer };
