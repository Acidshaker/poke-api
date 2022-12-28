import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCardLiked from "../components/PokemonCardLiked";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./styles/PokemonLiked.css";

const PokemonLiked = () => {
  const pokemonsLike = useSelector((state) => state.pokemonLike);
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pokedex");
  };

  return (
    <section className="pokemon-liked">
      <Header />
      <section className="pokemon-liked__container">
        {pokemonsLike.length === 0 ? (
          <div className="page__error">
            <section className="home">
              <div className="home__container">
                <img
                  className="home__container--img"
                  src="/images/Professor_Oak.webp"
                  alt="Oak proffesor image"
                />
                <div className="home__container--title">
                  <p className="home__title">
                    Sorry {nameTrainer}.{" "}
                    <span className="home__description--name">
                      go to{" "}
                      <span className="link__pokedex" onClick={handleClick}>
                        pokedex
                      </span>{" "}
                      for add pokemons here.
                    </span>{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <ul className="pokemon-liked__list">
            {pokemonsLike.map((pokemonLike) => (
              <li className="pokemon-liked__card">
                <PokemonCardLiked id={pokemonLike} key={pokemonLike} />
              </li>
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </section>
  );
};

export default PokemonLiked;
