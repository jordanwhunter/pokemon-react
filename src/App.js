import React, { useState } from "react";
import PokemonList from "./PokemonList";

const App = () => {
  // initial state is set to have Charmander. using array destructuring, we set pokemon as our state and setPokemon as how we'll update state.
  const [pokemon, setPokemon] = useState(["charmander"])
  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App

