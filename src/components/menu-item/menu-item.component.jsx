import { navBarCenter, menuButton } from "./menu-item.style";
import { NavLink } from "react-router-dom";

const MenuItem = ({ path, caption }) => (
  <div className={navBarCenter}>
    <NavLink className={menuButton} to={path}>
      {caption}
    </NavLink>
  </div>
);

export default MenuItem;
