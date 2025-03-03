import { useEffect, useState } from 'react'
import './App.css'
import PokemonList  from './PokemonList';

function App() {
  const [greeting, setGreeting] = useState('Hello Pokémon Trainer!')
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    const fetchPokemon = async () => {
      let allPokemon = [];
      let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
      setLoading(false)

      while (nextUrl && allPokemon.length < 151) {
        const res = await fetch(nextUrl);
        const data = await res.json();
        allPokemon = [...allPokemon, ...data.results.map(pokemon => pokemon.name)];
        nextUrl = data.next; // Get the URL for the next page of results
      }

      setPokemon(allPokemon.slice(0, 151));
    };

    fetchPokemon();
  }, []);

  if(loading) return "Loading..."

  return (
    <>

      <h1>{greeting}</h1>

      <PokemonList pokemon={pokemon} />

    </>
  )
}

export default App;