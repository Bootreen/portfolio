import {
  navBarContainer,
  navBarStart,
  navBarEnd,
  themeSwitcher,
} from "./navbar.style";

import { usePortfolioActions } from "../../store/store";
import { Day, Night } from "../theme-icons/theme-icons.component";
import MenuItem from "../menu-item/menu-item.component";

const NavBar = () => {
  const { switchTheme } = usePortfolioActions();
  return (
    <div className={navBarContainer}>
      <div className={navBarStart}></div>
      <MenuItem path='/' caption='Home' />
      <MenuItem path='/about' caption='About' />
      <MenuItem path='/projects' caption='Projects' />
      <MenuItem path='/contact' caption='Contact' />
      <div className={navBarEnd}>
        <label className={themeSwitcher}>
          <input type='checkbox' onChange={() => switchTheme()} />
          <Day />
          <Night />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
