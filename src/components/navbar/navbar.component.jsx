import { usePortfolioActions } from "../../store/store";
import { Day, Night } from "../theme-icons/theme-icons.component";
import MenuItem from "../menu-item/menu-item.component";

const NavBar = () => {
  const { switchTheme } = usePortfolioActions();
  return (
    <div className='mt-4 navbar'>
      <div className='navbar-start'></div>
      <MenuItem path='/' caption='Home' />
      <MenuItem path='/about' caption='About' />
      <MenuItem path='/projects' caption='Projects' />
      <MenuItem path='/contact' caption='Contact' />
      <div className='navbar-end'>
        <label className='swap swap-flip pl-4 md:pr-4 '>
          <input type='checkbox' onChange={() => switchTheme()} />
          <Day />
          <Night />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
