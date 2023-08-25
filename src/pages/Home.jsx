import { useState, useEffect } from "react";
import Btn from "../components/Btn";
import {Nav} from "../components/ui/Nav";
import { Link } from "react-router-dom";
import { Footer } from "../components/ui/Footer";

function Home() {
  
  return (
    <>
    <div className="mainC h-screen relative min-h-[800px] md:min-h-[600px]">
        <Nav></Nav>
      <main className="w-full h-full absolute left-0 top-0 items-center flex flex-col justify-center md:flex-row md:justify-around">
        <div className="md:w-1/3 w-full flex flex-col justify-center px-5 md:p-0">
          <h1 className="text-center text-2xl md:text-5xl font-bold text-white px-5 md:p-0">Discover poems that reflect who you are</h1>
          <p className="text-center text-base md:text-xl mt-8 text-brown-100">
          Names that inspire poetry. Enter your own, find a unique poem. Celebrate the beauty of personalized poetry. Explore now!
            {/* {JSON.stringify(lines)} */}
             
          </p>
          <div className="w-1/3 mx-auto mt-5">
            <Link to={"/search"}>
              <Btn text={"Start"}></Btn>
            </Link>
          
        </div>
        </div>
        <figure className="h-64 md:h-[80vh] max-h-[1000px] min-h-[400px] mx-auto md:mx-0 w-2/4 md:w-1/3">
          <img
            src="/img/hero1.png"
            alt="library"
            className="w-full h-full object-contain"
          />
        </figure>
      </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
