import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Btn from "../Btn";

export function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

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
        <Link
          to={"/"}
          className="flex items-center hover:text-xl duration-300 hover:text-green-700"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to={"/search"}
          className="flex items-center hover:text-xl duration-300 hover:text-green-700"
        >
          Search
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to={"/credit"}
          className="flex items-center hover:text-xl duration-300 hover:text-green-700"
        >
          Credit
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-2 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 z-50">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link
            to={"/"}
            className="mr-4 tracking-widest cursor-pointer py-1.5 font-semibold text-xl"
          >
            Lopoelo
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <div
            className="hidden lg:inline-block"
            onClick={handleOpen}
            variant="gradient"
          >
            <Btn text={"Donate"}></Btn>
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
            <div className="w-full" onClick={handleOpen}>
              <Btn text={"Donate"}></Btn>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>All donations are welcome</DialogHeader>
        <DialogBody divider className="text-center">
        You can scan the QR code that will take you to paypal.
        <figure className="w-1/4 mx-auto my-5">
          <img src="/img/QR.png" alt="codigo QR" className="w-full h-full object-contain"/>
        </figure>
        <div className="flex w-full justify-center gap-4 items-center">
          <span className="block text-center">Or you can click on this button</span>
          <a href="https://www.paypal.com/donate/?hosted_button_id=MEJ25CAT5T8VU" className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-700 text-white shadow-md shadow-blue-700/10 hover:shadow-2xl hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-max">Paypal</a>
        </div>
        
        </DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
