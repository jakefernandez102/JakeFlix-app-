import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
