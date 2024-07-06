import { mainContainer } from "./root.styles";
import { usePortfolioStore } from "../../store/store";
import Header from "../../components/header/header.component";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const theme = usePortfolioStore(({ theme }) => theme);
  return (
    <div className={mainContainer} data-theme={theme}>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
