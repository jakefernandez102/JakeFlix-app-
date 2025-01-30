import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header";
import { Footer } from "../components/molecules/Footer";

export const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
