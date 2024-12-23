import Footer from "@/pages/common/Footer";
import Header from "@/pages/common/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className='bg-background'>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
