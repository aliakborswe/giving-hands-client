import { Outlet } from "react-router";


const BaseLayout = () => {
    return (
      <div className='min-h-screen'>
        <Outlet />
      </div>
    );
};

export default BaseLayout;