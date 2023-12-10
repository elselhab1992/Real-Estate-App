import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/img/logo.svg";
import { Header, NavIcons, NavLinks, NavLink } from "./NavbarStyles";
import { Link } from "react-router-dom";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
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
