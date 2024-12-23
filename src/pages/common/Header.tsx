import { LogIn, LogOut, Menu, Moon, Sun, X } from "lucide-react";
import logo from "@/assets/svg/logo.svg";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import ActiveLink from "./ActiveLink";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useTheme } from "@/context/ThemeProvider";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  // handle logout button
  const handleLogout = async () => {
    try {
      await logout();
      setShowLogoutBtn(false);
      navigate("/");
      toast.success("Logout Success!");
    } catch (err: any) {
      toast.error(err.message || "Logout Failed");
    }
  };

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
              showMenu ? "block" : "hidden"
            } lg:block absolute z-10 lg:static top-20 left-0 p-4 rounded-xl pr-16 lg:pr-0 bg-white lg:bg-transparent`}
          >
            <div className='flex flex-col lg:flex-row  gap-4 md:items-center text-base font-medium text-foreground w-full'>
              <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/posts'>Posts</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>
              <div className='relative cursor-pointer'>
                <p onClick={() => setShowProfile(!showProfile)}>Profile</p>
                {showProfile && (
                  <div className='absolute top-8 border-2 w-56 p-2 bg-white left-0 rounded-xl shadow-lg '>
                    <ActiveLink to='/addVolunteerNeedPost'>
                      Add Volunteer Need Post
                    </ActiveLink>
                    <ActiveLink to='/myPosts'>My Posts</ActiveLink>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex items-center  gap-10 text-base font-semibold [&_a]:flex [&_a]:gap-1 '>
            <div>
              <button
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
                className='flex justify-center items-center'
              >
                {theme === "light" ? <Sun /> : <Moon />}
              </button>
            </div>
            {user !== null ? (
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
                <div className='absolute hidden group-hover:block top-10 right-0 rounded-xl shadow-lg'>
                  <p className="text-end">{user?.displayName || "Name not found"}</p>
                  <Button
                    onClick={handleLogout}
                    variant={"default"}
                    className='flex items-center gap-1 rounded-[5px] text-white'
                  >
                    <LogOut />
                    Logout
                  </Button>
                </div>
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
