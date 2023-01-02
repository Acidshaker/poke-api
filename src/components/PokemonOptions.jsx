import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonOptions = ({ currentNamePokemon, setCurrentNamePokemon }) => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    if (currentNamePokemon) {
      axios
        .get(URL)
        .then((res) => {
          if (
            res.data.results.filter(
              (pokemon) =>
                pokemon.name.includes(currentNamePokemon.toLowerCase()) &&
                pokemon.name !== currentNamePokemon.toLowerCase()
            )
          ) {
            setPokemons(
              res.data.results.filter((pokemon) =>
                pokemon.name.includes(currentNamePokemon.toLowerCase())
              )
            );
          }
          // else if (
          //   res.data.results.filter(
          //     (pokemon) => pokemon.name === currentNamePokemon
          //   )
          // ) {
          //   setPokemons([]);
          // }
          else {
            setPokemons(res.data.results);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setPokemons([]);
    }
  }, [currentNamePokemon]);

  const handleClickPokemonOption = (currentName) => {
    setCurrentNamePokemon(currentName);
    setPokemons([]);
  };

  return (
    <ul className="pokemon__option--list">
      {pokemons?.map((pokemon) => (
        <li
          onClick={() => {
            handleClickPokemonOption(pokemon?.name);
          }}
          key={pokemon?.url}
          className="pokemon__option--item"
        >
          {pokemon?.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonOptions;
