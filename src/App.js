import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './Views/About'
import Home from './Views/Home'
import { useEffect, useState, useMemo } from 'react'

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    console.log('Gotta fetch em all!')
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, []);

  useMemo(() => {
    if (!text) {
      setFilteredPokemon([]);
      return;
    } else {
      setFilteredPokemon(() => pokemon.results?.filter((pokemon) => pokemon.name.includes(text)))
    }
  }, [pokemon.results, text])

  return (
    <Router>
      <div className="p-14">
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <header className='text-4xl text-yellow-700'>
              Pokemon Picker
          </header>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path='/about/:slug'>
          <About></About>
        </Route>
        <Route path='/'>
          <div className="w-full flex justify-center">
            <input type="text"
              onChange={($event) => setText($event.target.value)}
              placeholder="Enter Pokemon here"
              className="mt-10 p-2 border-blue-500 border-2"></input>
          </div>
          {
            pokemon &&
            <Home pokemon={filteredPokemon} />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
