import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/svg/logo.svg";

// const footerLinks = {
//   : [
//     "",
//     "Event planning software",
//     "Community engagement tools",
//   ],
//   Company: [""],
//   Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
// };

const Footer = () => {
  return (
    <footer className='bg-secondary/20'>
      <div className='container mx-auto px-4 pt-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center'>
          <div className='space-y-2 md:col-span-2 lg:col-span-1 '>
            <div className='flex gap-2 items-center justify-start'>
              <img src={logo} alt='logo' className='w-12' />
              <p className={` font-bold text-xl`}>Giving-Hands</p>
            </div>
            <p className='text-start '>
              Explore volunteer management websites designed to connect
              organizations with passionate individuals, streamlining efforts to
              make a meaningful impact.
            </p>
          </div>

          <div className="lg:text-center">
            <h3 className='font-semibold text-lg mb-2'>Links</h3>
            <div className='space-y-1 flex flex-col'>
              <Link to='/' className=' hover:text-primary transition-colors'>
                Home
              </Link>
              <Link
                to='/posts'
                className=' hover:text-primary transition-colors'
              >
                Posts
              </Link>
              <Link
                to='/about'
                className=' hover:text-primary transition-colors'
              >
                About
              </Link>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Services</h3>
            <ul className='space-y-1'>
              <li>Volunteer management solutions</li>
              <li>Event planning software</li>
              <li>Volunteer management solutions</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 py-6 mt-8 border-t-2 border-primary text-primary'>
          <p>© Giving-Hands 2024</p>
          <div className='flex gap-2'>
            <Link to='https://www.facebook.com/aliakbor28924'>
              <Facebook />
            </Link>
            <Link to='https://github.com/aliakbordev'>
              <Github />
            </Link>
            <Link to='https://www.linkedin.com/aliakbordev/'>
              <Linkedin />
            </Link>
            <Link to='https://x.com/aliakbordev'>
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
