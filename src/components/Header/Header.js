import { useState } from "react";
import { Navbar, Sidebar } from "../index";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <Navbar click={click} handleClick={handleClick} />
      <Sidebar click={click} closeMenu={closeMenu} />
    </>
  );
};

export default Header;
