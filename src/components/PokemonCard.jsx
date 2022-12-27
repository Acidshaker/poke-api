import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pokemon from "../pages/Pokemon";

const PokemonCard = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState();

  const navigate = useNavigate();

  const types = dataPokemon?.types.map((type) => type.type.name).join("/");

  const handleClickPokemon = () => {
    navigate(`/pokedex/${dataPokemon?.id}`);
  };

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setDataPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article onClick={handleClickPokemon} className={`pokemon-card__container`}>
      <section
        className={`pokemon-card__content border-${dataPokemon?.types[0].type.name}`}
      >
        <section
          className={`poemon-card__header bg-lg-${dataPokemon?.types[0].type.name}`}
        >
          <img
            className="pokemon-card__img"
            src={dataPokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </section>
        <section className="pokemon-card__body--container">
          <div className="pokemon-card__body">
            <h3 className="pokemon-card__name">{pokemon?.name}</h3>
            <p className="pokemon-card__types"> {types}</p>
          </div>
          <div className="grid__container">
            <section className="pokemon-card__stats--container">
              {dataPokemon?.stats.map((stat) => (
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

export default PokemonCard;
