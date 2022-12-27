import React from "react";
import PokemonCard from "./PokemonCard";

const ListPokemons = ({ pokemons }) => {
  return (
    <ul className="pokemon__list--container">
      {pokemons?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.url} />
      ))}
    </ul>
  );
};

export default ListPokemons;
