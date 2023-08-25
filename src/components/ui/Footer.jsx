import { Typography } from "@material-tailwind/react";
import "../../css/Footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full footerM p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="flex gap-2">
          <img src="/img/hero1.png" alt="logo" className="w-10" />
          <Link
            to={"/"}
            className=" text-white tracking-widest mr-4 cursor-pointer py-1.5 font-semibold text-xl"
          >
            Lopoelo
          </Link>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to={"https://www.instagram.com/digitalithings_/"}
              className="font-normal transition-colors hover:text-brown-100 focus:text-brown-100"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to={"/credit"}
              className="font-normal transition-colors hover:text-brown-100 focus:text-brown-100"
            >
              Credits
            </Link>
          </li>
          <li>
            <Link
              to={"https://oliverrod.website/"}
              className="font-normal transition-colors hover:text-brown-100 focus:text-brown-100"
            >
              Creator
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <a
        href="https://oliverrod.website/"
        className="block hover:text-white text-center w-max mx-auto font-normal"
      >
        &copy; Frontend Developer Oliver Rodriguez
      </a>
    </footer>
  );
}
