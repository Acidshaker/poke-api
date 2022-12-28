import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { setCurrentPageGlobal } from "../store/slices/currentPage.slice";
import { setPokemonLikeGlobal } from "../store/slices/pokemonLiked.slice";
import "./styles/Pokemon.css";

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState();
  const { id } = useParams();
  const [newId, setnewId] = useState(id);
  const pokemonLike = useSelector((state) => state.pokemonLike);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPercentBarProgress = (valueStat) => {
    const maxValue = 255;
    return `${(valueStat * 100) / maxValue}%`;
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => {
        setDataPokemon(res.data);
        setnewId(id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (newId != id && newId) {
      const URL = `https://pokeapi.co/api/v2/pokemon/${newId}/`;
      axios
        .get(URL)
        .then((res) => {
          setDataPokemon(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      axios
        .get(URL)
        .then((res) => {
          setDataPokemon(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [newId]);

  const handleClickPrev = () => {
    if (newId > 1) {
      setnewId(Number(newId) - 1);
    } else {
      setnewId(10249);
    }
  };

  const handleClickNext = () => {
    if (newId === 10249) {
      setnewId(1);
    } else {
      setnewId(Number(newId) + 1);
    }
  };

  const handleClickBack = () => {
    const newPage = Math.ceil(newId / 12);
    dispatch(setCurrentPageGlobal(newPage));
    navigate("/pokedex");
  };

  // useEffect(() => {
  //   if (pokemonLike.includes(newId)) {
  //     document?.querySelector(".like__btn")?.classList?.add("active__like");
  //   } else {
  //     document?.querySelector(".like_btn")?.classList?.remove("active__like");
  //   }
  // }, [pokemonLike]);

  const handleClickLike = () => {
    dispatch(setPokemonLikeGlobal(newId));
  };

  return (
    <div className="pokemon">
      <Header />
      <main className="pokemon__container">
        <i onClick={handleClickBack} className="bx bx-x back__btn"></i>
        <section className="pokemon__nav">
          <section
            onClick={handleClickPrev}
            className="pokemon__nav--container"
          >
            <i className="bx bxs-left-arrow-alt"></i>
            <p>Prev</p>
          </section>
          <section
            onClick={handleClickNext}
            className="pokemon__nav--container"
          >
            <i className="bx bxs-right-arrow-alt"></i>
            <p>Next</p>
          </section>
        </section>
        <section className="pokemon__container--content">
          <section
            className={`pokemon__header bg-lg-${dataPokemon?.types[0].type.name}`}
          >
            <section className="like__container">
              {" "}
              <i
                onClick={handleClickLike}
                className={`bx bxs-heart like__btn ${
                  pokemonLike.includes(dataPokemon?.id) ? "active__like" : ""
                }`}
              ></i>
            </section>
          </section>
          <img
            className="pokemon__img"
            src={dataPokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <h3 className="pokemon__id">{dataPokemon?.id}</h3>
          <h2 className="pokemon__name">{dataPokemon?.name}</h2>
          <section className="pokemon__features">
            <div className="pokemon__feature">
              <p className="pokemon__feature--name">Weight</p>
              <p className="pokemon__feature--value">{dataPokemon?.weight}</p>
            </div>
            <div className="pokemon__feature">
              <p className="pokemon__feature--name">Height</p>
              <p className="pokemon__feature--value">{dataPokemon?.height}</p>
            </div>
          </section>
          <section className="pokemon__info">
            <div className="pokemon__info--container">
              <h4 className="pokemon__info--title">Types</h4>
              <div className="pokemon__info--data">
                {dataPokemon?.types.map((type) => (
                  <p className="pokemon__info--value" key={type.type.name}>
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="pokemon__info--container">
              <h4 className="pokemon__info-title">Abilities</h4>
              <div className="pokemon__info--data">
                {dataPokemon?.abilities.map((ability) => (
                  <p
                    className="pokemon__info--value"
                    key={ability.ability.name}
                  >
                    {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section className="pokemon__stats">
          <h3 className="pokemon__stats--title">Stats</h3>
          <div className="pokemon__stats--container">
            {dataPokemon?.stats.map((stat) => (
              <div className="pokemon__stat">
                <div className="pokemon__stat--header">
                  <p className="pokemon__stat--name" key={stat.stat.name}>
                    {stat.stat.name}
                  </p>
                  <p className="pokemon__stat--value" key={stat.base_stat}>
                    {stat.base_stat}/255
                  </p>
                </div>
                <div className="pokemon__stat--bar">
                  <div
                    style={{ width: getPercentBarProgress(stat.base_stat) }}
                    className="pokemon__stat--barProgress"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pokemon;
