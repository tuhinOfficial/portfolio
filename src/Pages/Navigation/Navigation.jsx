import React from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link to="/" spy={true} smooth={true} className="cursor-pointer">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link to="about" spy={true} smooth={true} className="cursor-pointer">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          className="cursor-pointer"
        >
          Skills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link to="portfolio" spy={true} smooth={true} className="cursor-pointer">Projects</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link>Testimonials</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-semibold text-[#222222] link"
      >
        <Link>Contact</Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 shadow-sm">
      <div className="flex items-center justify-between text-blue-gray-900 max-w-5xl mx-auto">
        <Typography className="mr-4 cursor-pointer py-1.5 font-semibold text-3xl ">
          <Link to="/" className="name">Dev Tuhin</Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Navigation;
