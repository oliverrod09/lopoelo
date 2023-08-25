import { Button } from "@material-tailwind/react";
 
export default function Btn({text}) {
  return <button className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-green-700/10 hover:shadow-2xl hover:shadow-green-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full">{text}</button>;
}