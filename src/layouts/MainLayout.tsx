import Footer from "@/pages/common/Footer";
import Header from "@/pages/common/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className='bg-background h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
