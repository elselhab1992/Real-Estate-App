import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/img/logo.svg";
import { Header, NavIcons, NavLinks, NavLink } from "./NavbarStyles";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <NavLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </NavLinks>
      </nav>
      <NavIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000", cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ color: "#000", cursor: "pointer" }} />
        )}
      </NavIcons>
    </Header>
  );
}

export default Navbar;
