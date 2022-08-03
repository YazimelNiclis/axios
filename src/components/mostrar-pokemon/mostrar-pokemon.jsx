import { useEffect, useState } from "react";
import { obtenerPokemon } from "../../api/rules-pokemon";

function MostrarPokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      let result = await obtenerPokemon();
      setPokemon(result.data.results);
    } catch (error) {
      throw Error(error.message || "Error al obtener los pokemons");
    }
  };

  return <>{pokemon ? <div>{JSON.stringify(pokemon)}</div> : null}</>;
}

export default MostrarPokemon;

/* useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((result) => {
      setPokemon(result.results);
    });
}, []); */
