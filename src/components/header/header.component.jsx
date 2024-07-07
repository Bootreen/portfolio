import {
  headerContainer,
  navBarContainer,
  navBarStart,
  navBarEnd,
  themeSwitcher,
} from "./header.style";
import { usePortfolioActions } from "../../store/store";
import { Day, Night } from "../theme-icons/theme-icons.component";
import MenuItem from "../menu-item/menu-item.component";

const Header = () => {
  const { switchTheme } = usePortfolioActions();
  return (
    <header className={headerContainer}>
      <div className={navBarContainer}>
        <div className={navBarStart}></div>
        <MenuItem path='/' caption='About' />
        <MenuItem path='/portfolio' caption='Portfolio' />
        <MenuItem path='/career' caption='Career' />
        <MenuItem path='/contact' caption='Contact' />
        <div className={navBarEnd}>
          <label className={themeSwitcher}>
            <input type='checkbox' onChange={() => switchTheme()} />
            <Day />
            <Night />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
