import style from "./menu-item.style";
import { NavLink } from "react-router-dom";

const MenuItem = ({ path, caption }) => (
  <div className={style.navBarCenter}>
    <NavLink className={style.menuButton} to={path}>
      {caption}
    </NavLink>
  </div>
);

export default MenuItem;
