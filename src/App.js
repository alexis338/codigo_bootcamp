import logo from './logo.svg';
import './App.css';
import { Characters } from './components/Characters';
import { useEffect, useState } from 'react';

function App() {
  const [   characters, setCharacters ] = useState([]);



  function getCharacters(pageNumber="1"){
    const res = fetch("https://rickandmortyapi.com/api/character/?pag e=19")
                .then(Response => Response.json())
                .then(({ results, info }) => {return {results}})
                .catch(() => {return[]})
              return res;
              
  }
  async function consoleCharacters(){
    const resp = await getCharacters();
    setCharacters(resp);
    console.log(resp)

  }

  useEffect(() => {
    consoleCharacters();
  }, []);
  return (
    <div className="App">
      <header className="Header">
          <img className="logo" src="/LOGO.jpg" alt="" />
          <h1 className="Terms"> Terms + Conditions</h1>
      </header>
      <div className="Hero">
        <h1> Rick and Morty</h1>
        <h1>See all the characters and more</h1>
      </div>
      <main>
        <h1> Characters List</h1>
        <hr />
        {(characters && characters.length > 0) && characters.map(character => (<Characters character = {character} />)) }
        
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
