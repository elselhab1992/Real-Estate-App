import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 80px;
  /* left: 0; */
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  padding-top: 5rem;
  left: ${(props) => (props.menu ? "0" : "-100%")};
  transition: 700ms;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
`;

export { SideBar, MobileLink };
