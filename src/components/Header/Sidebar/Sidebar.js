import { SideBar, MobileLink } from "./SidebarStyles";

const Sidebar = ({ click, closeMenu }) => {
  return (
    <aside>
      <SideBar menu={+click}>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
