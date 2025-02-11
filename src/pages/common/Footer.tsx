import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/svg/logo.svg";

const footerLinks = {
  Services: [
    "Volunteer management solutions",
    "Event planning software",
    "Community engagement tools",
  ],
  Company: ["About", "Brands", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className='bg-secondary/20'>
      <div className='container mx-auto px-4 pt-12'>
        <div className='flex flex-col items-center mb-8'>
          <div className='flex gap-2 items-center justify-start'>
            <img src={logo} alt='logo' className='w-12' />
            <p className={` font-bold text-xl hidden md:block`}>Giving-Hands</p>
          </div>
          <p className=' mt-2 text-center '>
            Explore volunteer management websites designed to connect
            organizations with passionate individuals, streamlining efforts to
            make a meaningful impact.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className='font-semibold text-lg mb-4'>{title}</h3>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to='/'
                      className=' hover:text-primary transition-colors'
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
