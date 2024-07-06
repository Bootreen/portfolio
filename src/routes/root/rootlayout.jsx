import { usePortfolioStore } from "../../store/store";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

const RootLayout = () => {
  const theme = usePortfolioStore(({ theme }) => theme);
  return (
    <div data-theme={theme} className='min-w-screen min-h-screen bg-base-100'>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
