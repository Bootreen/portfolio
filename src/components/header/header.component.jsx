import style from "./header.style";
import { content } from "../../store/content";
import { PATHS } from "../../store/paths";
import { THEMES, LANGUAGES } from "../../store/constants";
import { usePortfolioStore, usePortfolioActions } from "../../store/store";
import { Day, Night } from "../theme-icons/theme-icons.component";
import MenuItem from "../menu-item/menu-item.component";

const Header = () => {
  const userPreferredTheme = usePortfolioStore(
    ({ userPreferredTheme }) => userPreferredTheme
  );
  const { switchTheme, switchLanguage } = usePortfolioActions();
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const { HOME, PORTFOLIO, CV, CONTACT } = PATHS;
  const { LIGHT, DARK } = THEMES;
  const {
    menuItems: { about, portfolio, cv, contact },
  } = content;
  return (
    <header className={style.headerContainer}>
      <div className={style.navBarContainer}>
        <div className={style.navBarStart}>
          <label className={style.themeSwitcher}>
            <input type='checkbox' onChange={() => switchTheme()} />
            <Day active={userPreferredTheme === LIGHT} />
            <Night active={userPreferredTheme === DARK} />
          </label>
        </div>
        <MenuItem path={HOME} caption={about[locale]} />
        <MenuItem path={PORTFOLIO} caption={portfolio[locale]} />
        <MenuItem path={CV} caption={cv[locale]} />
        <MenuItem path={CONTACT} caption={contact[locale]} />
        <div className={style.navBarEnd}>
          <select
            className={style.languageSelector}
            value={locale}
            onChange={(event) => switchLanguage(event.target.value)}
          >
            {Object.entries(LANGUAGES).map(([id, language]) => (
              <option
                key={id}
                className={style.languageOption}
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
