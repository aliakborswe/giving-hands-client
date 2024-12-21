
import { LogIn, LogOut, Menu, User, X } from "lucide-react";
import logo from "@/assets/svg/logo.svg";
import { useState } from "react";
import { Button } from "./ui/button";
import { Tooltip } from "react-tooltip";
import ActiveLink from "./common/ActiveLink";

interface User {
  photoURL: string;
  displayName: string;
}





const Header = () => {
  const [user, setUser] = useState<User>(null);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);


  return (
    <header className=''>
      <div className='container mx-auto px-2.5 py-5'>
        <nav className='flex flex-row gap-6 justify-between items-center'>
          <div className='flex items-center'>
            {/* mobile menu icon */}
            <div onClick={toggleMenu} className='lg:hidden'>
              {showMenu == true ? <X size={36} /> : <Menu size={36} />}
            </div>
            <div className='flex gap-2 items-center justify-start'>
              <img src={logo} alt='logo' className='w-12' />
              <p className={` font-bold text-xl hidden md:block`}>
                Giving-Hands
              </p>
            </div>
          </div>
          <div
            className={`${
              showMenu ? "block bg-white" : "hidden"
            } lg:block absolute z-10 lg:static top-20 left-0 p-4 rounded-xl pr-16 lg:pr-0`}
          >
            <div className='flex flex-col lg:flex-row  gap-4 md:items-center text-base font-medium text-foreground w-full'>
              <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/posts'>Posts</ActiveLink>
              <ActiveLink to='/profile'>Profile</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>
            </div>
          </div>

          <div className='flex items-center gap-2 text-base font-semibold [&_a]:flex [&_a]:gap-1 '>
            {user !== null ? (
              <>
                <div className='z-10'>
                  <img
                    src={
                      user?.photoURL ||
                      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    }
                    className='w-10 aspect-square rounded-full'
                    alt='photo'
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place='top'
                  />
                  <Tooltip id='my-tooltip' />
                </div>
                <Button
                  variant={"default"}
                  className='flex items-center gap-1 rounded-[5px] text-white'
                >
                  <LogOut />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <ActiveLink to='/login'>
                  <Button
                    variant={"default"}
                    className='flex items-center gap-1 rounded-[5px] text-white'
                  >
                    <LogIn />
                    Login
                  </Button>
                </ActiveLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
