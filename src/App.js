import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

const App = () => {
  // initial state is set to empty, so an empty array is needed. using array destructuring, we set pokemon as our state and setPokemon as how we'll update state.
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      // to avoid a race condition (in the event the user calls multiple times before request completes), we need to use a cancelToken so requests are not overridden. cancelToken is built into axios.
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // change loading setting to false since initial loading setting is true - telling the app that the page needs to be loaded
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()

  // every time currentPageUrl changes, this will trigger the useEffect hook and refresh the application
  }, [currentPageUrl])

  if (loading) return "Loading Your Pokémon..."

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App

