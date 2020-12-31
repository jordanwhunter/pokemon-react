import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map(p => (
        // in React, a unique key on the top level element is needed for every single thing inside an array loop. in this instance, we're setting the key to be the name of the pokemon.
        <div key={p}>
          {p}
        </div>
      ))}
    </div>
  )
}

export default PokemonList

