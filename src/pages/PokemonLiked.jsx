import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonCardLiked from "../components/PokemonCardLiked";

const PokemonLiked = () => {
  const pokemonsLike = useSelector((state) => state.pokemonLike);

  return (
    <main>
      <section>
        {pokemonsLike.map((pokemonLike) => (
          <PokemonCardLiked id={pokemonLike} key={pokemonLike} />
        ))}
      </section>
    </main>
  );
};

export default PokemonLiked;
