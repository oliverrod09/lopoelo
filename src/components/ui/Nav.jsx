import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Btn from "../Btn";

export function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/"} className="flex items-center hover:text-xl duration-300 hover:text-green-700">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/search"} className="flex items-center hover:text-xl duration-300 hover:text-green-700">
          Search
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/credit"} className="flex items-center hover:text-xl duration-300 hover:text-green-700">
          Credit
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-2 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 z-50">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"} className="mr-4 cursor-pointer py-1.5 font-semibold text-xl">
          Lopoelo
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:inline-block">
          <Btn text={"Suscribirse"}></Btn>
        </div>
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
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="w-full">
            <Btn text={"Suscribirse"}></Btn>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}