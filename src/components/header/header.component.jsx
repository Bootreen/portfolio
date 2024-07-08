import {
  styleHeaderContainer,
  styleNavBarContainer,
  styleNavBarStart,
  styleNavBarEnd,
  styleThemeSwitcher,
  styleLanguageSelector,
  styleLanguageOption,
} from "./header.style";
import { content } from "../../store/content";
import { LANGUAGES } from "../../store/constants";
import { usePortfolioStore, usePortfolioActions } from "../../store/store";
import { Day, Night } from "../theme-icons/theme-icons.component";
import MenuItem from "../menu-item/menu-item.component";

const Header = () => {
  const { switchTheme, switchLanguage } = usePortfolioActions();
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const {
    menuItems: { about, portfolio, cv, contact },
  } = content;
  return (
    <header className={styleHeaderContainer}>
      <div className={styleNavBarContainer}>
        <div className={styleNavBarStart}>
          <label className={styleThemeSwitcher}>
            <input type='checkbox' onChange={() => switchTheme()} />
            <Day />
            <Night />
          </label>
        </div>
        <MenuItem path='/' caption={about[locale]} />
        <MenuItem path='/portfolio' caption={portfolio[locale]} />
        <MenuItem path='/cv' caption={cv[locale]} />
        <MenuItem path='/contact' caption={contact[locale]} />
        <div className={styleNavBarEnd}>
          <select
            className={styleLanguageSelector}
            value={locale}
            onChange={(event) => switchLanguage(event.target.value)}
          >
            {Object.entries(LANGUAGES).map(([id, language]) => (
              <option
                key={id}
                className={styleLanguageOption}
                disabled={language === locale}
                value={language}
              >
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
