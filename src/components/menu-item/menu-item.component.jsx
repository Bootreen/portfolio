import { styleNavBarCenter, styleMenuButton } from "./menu-item.style";
import { NavLink } from "react-router-dom";

const MenuItem = ({ path, caption }) => (
  <div className={styleNavBarCenter}>
    <NavLink className={styleMenuButton} to={path}>
      {caption}
    </NavLink>
  </div>
);

export default MenuItem;
