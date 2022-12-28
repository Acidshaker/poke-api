import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const PokemonCardLiked = ({ id }) => {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const types = pokemon?.types.map((type) => type.type.name).join("/");

  const handleClickPokemon = () => {
    navigate(`/liked-pokemons/${pokemon?.id}`);
    window.scroll(0, 0);
  };

  return (
    <article onClick={handleClickPokemon} className={`pokemon-card__container`}>
      <section
        className={`pokemon-card__content border-${pokemon?.types[0].type.name}`}
      >
        <section
          className={`poemon-card__header bg-lg-${pokemon?.types[0].type.name}`}
        >
          <img
            className="pokemon-card__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </section>
        <section className="pokemon-card__body--container">
          <div className="pokemon-card__body">
            <h3 className="pokemon-card__name">{pokemon?.name}</h3>
            <p className="pokemon-card__types"> {types}</p>
            {/* <p className="pokemon-card__types--title"></p> */}
          </div>
          <div className="grid__container">
            <section className="pokemon-card__stats--container">
              {pokemon?.stats.map((stat) => (
                <div key={stat.stat.name} className="pokemon-card__stats">
                  <p className="pokemon-card__stats--name">{stat.stat.name}</p>
                  <p className="pokemon-card__stats--value">{stat.base_stat}</p>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </article>
  );
};

export default PokemonCardLiked;
