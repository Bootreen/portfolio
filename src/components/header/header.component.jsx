import { headerContainer } from "./header.style";
import Title from "../title/title.component";
import NavBar from "../navbar/navbar.component";

const Header = () => (
  <header className={headerContainer}>
    <Title />
    <NavBar />
  </header>
);

export default Header;
