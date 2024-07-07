import {
  headerContainer,
  navBarContainer,
  navBarStart,
  navBarEnd,
  themeSwitcher,
  languageSelector,
  languageOption,
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
    <header className={headerContainer}>
      <div className={navBarContainer}>
        <div className={navBarStart}>
          <label className={themeSwitcher}>
            <input type='checkbox' onChange={() => switchTheme()} />
            <Day />
            <Night />
          </label>
        </div>
        <MenuItem path='/' caption={about[locale]} />
        <MenuItem path='/portfolio' caption={portfolio[locale]} />
        <MenuItem path='/cv' caption={cv[locale]} />
        <MenuItem path='/contact' caption={contact[locale]} />
        <div className={navBarEnd}>
          <select
            className={languageSelector}
            value={locale}
            onChange={(event) => switchLanguage(event.target.value)}
          >
            {Object.entries(LANGUAGES).map(([id, language]) => (
              <option
                key={id}
                className={languageOption}
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
