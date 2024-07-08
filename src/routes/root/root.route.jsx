import { styleMainContainer } from "./root.styles";
import { usePortfolioStore } from "../../store/store";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer-component";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const theme = usePortfolioStore(({ activeTheme }) => activeTheme);
  return (
    <div className={styleMainContainer} data-theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
