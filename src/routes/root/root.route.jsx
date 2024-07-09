import { styleMainContainer } from "./root.styles";
import { usePortfolioStore, usePortfolioActions } from "../../store/store";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer-component";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const theme = usePortfolioStore(({ activeTheme }) => activeTheme);
  const { updateWindowDimentions } = usePortfolioActions();
  // Track window resize for portfolio dynamic grid layout rerender
  window.addEventListener("resize", updateWindowDimentions);
  return (
    <div className={styleMainContainer} data-theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
