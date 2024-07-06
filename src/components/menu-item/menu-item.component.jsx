import { NavLink } from "react-router-dom";

const MenuItem = ({ path, caption }) => (
  <div className='navbar-center'>
    <NavLink
      className='btn btn-ghost text-secondary md:text-xl xl:text-2xl'
      to={path}
    >
      {caption}
    </NavLink>
  </div>
);

export default MenuItem;
