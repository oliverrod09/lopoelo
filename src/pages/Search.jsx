import { useState } from "react";
import { Nav } from "../components/ui/Nav";
import BtnSecond from "../components/BtnSecond";

function Search() {
  const [poem, setPoem] = useState([]);
  const [lines, setLines] = useState([]);
  const [hiddenB, setHiddenB] = useState("hidden");

  function findLines(title) {
    fetch(`https://poetrydb.org/title/${title}/lines`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].lines);
        setLines(data[0].lines);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function findPoe() {
    fetch(`https://poetrydb.org/random`)
      .then((res) => res.json())
      .then((data) => {
        setPoem(data);
        console.log(data[0].title);
        findLines(data[0].title);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handdleSubmit(e) {
    e.preventDefault();
    findPoe();
  }
  return (
    <>
      <div className="mainC relative md:min-h-screen min-h-[600px]">
        <Nav></Nav>
        <main className="w-full p-1">
          <form
            className="w-full mt-12 md:w-80 mx-auto p-5 rounded-md backdrop-blur-md bg-white/30"
            onSubmit={handdleSubmit}
          >
            <div className="text-center">
              <label
                htmlFor="name"
                className="text-white font-semibold text-xl text-center"
              >
                Enter your name
              </label>
              <input
                type="text"
                required
                name="name"
                className="w-full border-2 my-5 text-center rounded-md py-2 focus:outline-none focus:border-green-600 focus:invalid:border-pink-500"
              />
            </div>
            <div className="flex gap-3">
              {lines.length>0 
              ?
              <div className={`w-full duration-500`} onClick={handdleSubmit}>
                <BtnSecond text={"regenerate"}></BtnSecond>
              </div>
              :
              <></>
            }
              
              <button
                type="submit"
                className="duration-500 align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-green-700/10 hover:shadow-2xl hover:shadow-green-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
              >
                Send
              </button>
              
              
            </div>
          </form>
          <section className="rounded-md p-5 bg-brown-300 w-11/12 md:w-4/5 mx-auto my-8 text-white">
            {poem.length > 0 ? (
              <>
                <p className="fontS text-2xl md:text-5xl font-semibold">
                  {poem[0].title}
                </p>
                <span className="fontS text-xs font-light block ml-5 mt-5">
                  -{poem[0].author}
                </span>
              </>
            ) : (
              <></>
            )}
            {lines.length > 0 ? (
              <div className="flex flex-col gap-4 items-center mt-10">
                {lines.map((line, index) => (
                  <span className="fontS hover:text-xl duration-200 text-sm md:text-lg font-light" key={index}>
                    {line}
                  </span>
                ))}
              </div>
            ) : (
              <>
              <span className="block text-center text-xl">Enter your name and press send</span>
              <img src="/img/search1.png" className="w-52 h-52 object-contain mx-auto" alt="search" />
              </>
              
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default Search;
