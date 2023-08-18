import {useState} from 'react'

function Search() {
  const [poem, setPoem] = useState([]);
  const [lines, setLines] = useState([]);

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
    e.preventDefault()
    findPoe()
    
  }
  return (
    <>
    <main className='w-full p-1'>
        <form className='w-full mt-12 md:w-80 mx-auto p-5 rounded-md backdrop-blur-md bg-white/30' onSubmit={handdleSubmit}>
            <div className='text-center'>
              <label htmlFor="name" className='text-white font-semibold text-xl text-center'>Escribe tu nombre</label>
                <input type="text" required name='name' className='w-full border-2 my-5 text-center'/>
            </div>
            <button type="submit" className='block px-4 py-2 rounded-md bg-brown-600 text-white mx-auto'>Enviar</button>
        </form>
        <section className='rounded-md p-5 bg-brown-300 w-11/12 md:w-4/5 mx-auto my-8 text-white'>
          {poem.length >0 ? <>
          <p className='text-2xl md:text-5xl font-semibold'>{poem[0].title}</p> 
          <span className='text-xs font-light block ml-5 mt-5'>-{poem[0].author}</span>
          </>
          :
          <></>  
        }
          {lines.length > 0 ? (
              <div className="flex flex-col gap-4 items-center mt-10">
                {lines.map((line, index)=>(
                <span className='text-sm md:text-lg font-light' key={index}>{line}</span>
                ))}
              </div>
            ) : (
              <span>Ingresa tu nombre y presiona buscar</span>
            )} 
        </section>
    </main>
    </>
  )
}

export default Search