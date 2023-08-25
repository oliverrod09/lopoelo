import React from 'react'
import { Nav } from "../components/ui/Nav";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from '../components/ui/Footer';

function Credit() {
  return (
    <>
     <div className="mainC relative md:min-h-screen min-h-[600px]">
        <Nav></Nav>
      <main className="w-full pb-32 lg:pb-0">
        <div className="landingMain mx-auto max-w-screen-lg h-screen flex items-center justify-center  py-12 ">
          <div className="contentMain relative z-10 flex flex-col items-center lg:gap-6 lg:flex-row-reverse justify-around xl:mt-10vh">
            <div className="paragraphMain flex flex-col justify-center">
              <p className="text-2xl md:text-6xl mb-2 text-center text-white">
                Sobre mi
              </p>
              <p
                className="text-white mb-2 text-center text-sm md:text-base lg:text-lg px-8"
              >
                Soy un joven de Panamá nacido en el 2001, me encanta la programación en todas las ramas pero me especializo más en la 
                programación web, estoy mejor capacitado para trabajar como Frontend pero tambien tengo habilidades y conocimientos de Backend y estoy dispuesto a aprender más tecnologías de ser necesario.
              </p>
              <div className="flex justify-center lg:justify-center mt-3 lg:mt-6">
                <div>
                  <a href="https://oliverrod.website/" className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-green-700/10 hover:shadow-2xl hover:shadow-green-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full">Contacto</a>
                </div>
              </div>
            </div>
            <div className="imagesMain w-full lg:w-auto mt-4 lg:mt-0">
              <div className="circleLanding mx-auto w-48 h-48 sm:w-80 sm:h-80 lg:h-96 lg:w-96 rounded-full">
                <img
                  src="/img/imgAbout.jpg"
                  alt="Oliver foto"
                  className="w-full h-full rounded-full imgMain object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default Credit