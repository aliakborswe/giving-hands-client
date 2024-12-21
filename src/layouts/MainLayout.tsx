import Header from "@/components/Header";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
      <div className='bg-background h-screen'>
        <Header/>
        <Outlet />
      </div>
    );
};

export default MainLayout;