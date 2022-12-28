import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonCardLiked from "../components/PokemonCardLiked";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./styles/PokemonLiked.css";

const PokemonLiked = () => {
  const pokemonsLike = useSelector((state) => state.pokemonLike);

  return (
    <main className="pokemon-liked">
      <Header />
      <section className="pokemon-liked__container">
        <ul className="pokemon-liked__list">
          {pokemonsLike.map((pokemonLike) => (
            <li className="pokemon-liked__card">
              <PokemonCardLiked id={pokemonLike} key={pokemonLike} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
};

export default PokemonLiked;
