import { useState, useEffect } from "react";
import Btn from "../components/Btn";

function Home() {
  
  return (
    <>
      <main className="w-full flex flex-col md:flex-row justify-around">
        <div className="md:w-1/3 w-full flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold text-white">Discover poems that reflect who you are</h1>
          <p className="text-center text-xl mt-8 text-brown-100">
          Nombres que inspiran poesía. Ingresa el tuyo, encuentra un poema único. Celebra la belleza de la poesía personalizada. ¡Explora ahora!
            {/* {JSON.stringify(lines)} */}
             
          </p>
          <div className="w-1/3 mx-auto mt-5">
          <Btn text={"Empezar"}></Btn>
        </div>
        </div>
        <figure className="h-96 md:h-[80vh] w-full md:w-1/3">
          <img
            src="/img/hero1.png"
            alt="library"
            className="w-full h-full object-contain"
          />
        </figure>
      </main>

      <section></section>
    </>
  );
}

export default Home;
