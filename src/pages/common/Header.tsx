import { LogIn, LogOut, Menu, Moon, Sun, X } from "lucide-react";
import logo from "@/assets/svg/logo.svg";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import ActiveLink from "./ActiveLink";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useTheme } from "@/context/ThemeProvider";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  // handle theme
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // handle logout button
  const handleLogout = async () => {
    try {
      await logOut();
      setShowLogoutBtn(false);
      navigate("/");
      toast.success("Logout Success!");
    } catch (err: any) {
      toast.error(err.message || "Logout Failed");
    }
  };

  return (
    <header className='sticky top-0 z-50 bg-[#E9C3E9] dark:bg-[#110513]'>
      <div className='container mx-auto px-2.5 py-1'>
        <nav className='flex flex-row gap-6 justify-between items-center '>
          <div className='flex items-center'>
            {/* mobile menu icon */}
            <div onClick={toggleMenu} className='lg:hidden'>
              {showMenu == true ? <X size={36} /> : <Menu size={36} />}
            </div>
            <Link to='/' className='flex gap-2 items-center justify-start'>
              <img src={logo} alt='logo' className='w-12' />
              <p className={` font-bold text-xl hidden md:block`}>
                Giving-Hands
              </p>
            </Link>
          </div>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } lg:block absolute lg:static top-14 left-0 p-4 rounded-xl pr-16 lg:pr-0 bg-[#A77AF5] lg:bg-transparent`}
          >
            <div className='flex flex-col lg:flex-row  gap-4 lg:items-center text-base font-medium text-foreground w-full'>
              <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/posts'>Posts</ActiveLink>
              {user && (
                <div className='flex flex-col lg:flex-row gap-2'>
                  <ActiveLink to='/addVolunteerNeedPost'>Add Post</ActiveLink>
                  <ActiveLink to='/myPosts'>Manage Posts</ActiveLink>
                </div>
              )}
              <ActiveLink to='/about'>About</ActiveLink>
            </div>
          </div>

          <div className='flex items-center  gap-2 text-base font-semibold [&_a]:flex [&_a]:gap-1 '>
            <div>
              <button
                onClick={handleTheme}
                className='flex justify-center items-center'
              >
                {theme === "light" ? <Sun /> : <Moon />}
              </button>
            </div>
            {user !== null ? (
              <div className='flex justify-center items-center gap-2'>
                <div className='relative group'>
                  <div className='z-10 '>
                    <img
                      onClick={() => setShowLogoutBtn(!showLogoutBtn)}
                      src={
                        user?.photoURL ||
                        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                      }
                      className='w-10 aspect-square rounded-full '
                      alt='photo'
                    />
                  </div>
                  <div className='absolute z-10 hidden group-hover:block top-10 right-0 rounded-xl shadow-lg'>
                    <p className='text-end text-sm'>
                      {user?.displayName || "Name not found"}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  variant={"default"}
                  className='flex items-center gap-1 rounded-[5px] text-white'
                >
                  <LogOut />
                  <span className='hidden lg:block'>Logout</span>
                </Button>
              </div>
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
