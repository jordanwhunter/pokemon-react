import React, { useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

const App = () => {
  // initial state is set to empty, so an empty array is needed. using array destructuring, we set pokemon as our state and setPokemon as how we'll update state.
  const [pokemon, setPokemon] = useState([])

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map(p => p.name))
  })

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App

