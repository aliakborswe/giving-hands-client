import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
      <div className='bg-background h-screen'>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    );
};

export default MainLayout;