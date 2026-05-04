import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
