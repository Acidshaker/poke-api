import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListPokemons from "../components/ListPokemons";
import PokemonOptions from "../components/PokemonOptions";
import { blockPages } from "../helpers/paginationLogic";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { setCurrentPageGlobal } from "../store/slices/currentPage.slice";
import "./styles/Pokedex.css";

const Pokedex = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const [pokemonsFilter, setPokemonsFilter] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [currentNamePokemon, setCurrentNamePokemon] = useState("");

  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/${
      pokemonType ? `type/${pokemonType}/` : "pokemon/?limit=1000000"
    }`;
    axios
      .get(URL)
      .then((res) => {
        if (pokemonType) {
          const newPokemons = res.data.pokemon.map((pokemon) => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
          }));
          setPokemons(newPokemons);
        } else {
          setPokemons(res.data.results);
        }
      })
      .catch((err) => console.log(err));
  }, [pokemonType]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.namePokemon.value;
    dispatch(setCurrentPageGlobal(1));
    setNamePokemon(name);
    setPokemonType("");
  };

  const handleChangeSelect = (e) => {
    setPokemonType(e.target.value);
    dispatch(setCurrentPageGlobal(1));
  };

  useEffect(() => {
    const newPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(namePokemon)
    );
    setPokemonsFilter(newPokemons);
  }, [namePokemon, pokemons]);

  const { lastPage, currentBlockPages, arrayPages } = blockPages(
    12,
    pokemonsFilter,
    currentPage
  );

  const handleClickPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPageGlobal(currentPage - 1));
    } else {
      dispatch(setCurrentPageGlobal(lastPage[lastPage.length - 1]));
    }
    window.scroll(0, 0);
  };

  const handleClickNextPage = () => {
    if (currentPage === lastPage[lastPage.length - 1]) {
      dispatch(setCurrentPageGlobal(1));
    } else {
      dispatch(setCurrentPageGlobal(currentPage + 1));
    }
    window.scroll(0, 0);
  };

  const handleClickPrevBlock = () => {
    if (currentBlockPages[0] === 1) {
      dispatch(setCurrentPageGlobal(lastPage[lastPage.length - 1]));
    } else {
      dispatch(setCurrentPageGlobal(currentBlockPages[0] - 1));
    }
    window.scroll(0, 0);
  };

  const handleClickNextBlock = () => {
    if (currentBlockPages === lastPage) {
      dispatch(setCurrentPageGlobal(1));
    } else {
      dispatch(
        setCurrentPageGlobal(
          currentBlockPages[currentBlockPages.length - 1] + 1
        )
      );
    }
    window.scroll(0, 0);
  };

  const handleClickNumPage = (num) => {
    dispatch(setCurrentPageGlobal(num));
    window.scroll(0, 0);
  };

  const handleChangePokemon = (e) => {
    setCurrentNamePokemon(e.target.value);
    console.log(currentNamePokemon);
  };

  return (
    <div>
      <Header />
      <main id="pokedex" className="pokedex__container">
        <header className="pokedex__header--container">
          <h1 className="pokedex__title">Pokedex</h1>
          <p className="pokedex__description">
            Welcome <span>{nameTrainer}</span>, here you can find your favorite
            pokemon
          </p>
          <form onSubmit={handleSubmit} className="pokedex__form">
            <div className="pokedex__search">
              <div className="input__container--options">
                <input
                  onChange={handleChangePokemon}
                  value={currentNamePokemon}
                  type="text"
                  id="namePokemon"
                  className="pokedex__input"
                />
                <PokemonOptions
                  currentNamePokemon={currentNamePokemon}
                  setCurrentNamePokemon={setCurrentNamePokemon}
                />
              </div>
              <button className="pokedex__btn--search">Search</button>
            </div>
            <select onChange={handleChangeSelect} className="pokedex__select">
              <option value="">All pokemons</option>
              {types.map((type) => (
                <option value={type.name} key={type.url}>
                  {type.name}
                </option>
              ))}
            </select>
          </form>
        </header>
        <ListPokemons pokemons={arrayPages[currentPage - 1]} />
        <ul className="pokedex__pagination--list">
          <li onClick={handleClickPrevBlock}>
            <i className="bx bxs-chevrons-left"></i>
          </li>
          <li onClick={handleClickPrevPage}>
            <i className="bx bxs-chevron-left"></i>
          </li>
          {currentBlockPages?.map((currentBlockPage) => (
            <li
              className={`pokedex__pages ${
                currentPage === currentBlockPage ? "active__page" : ""
              }`}
              onClick={() => handleClickNumPage(currentBlockPage)}
              key={currentBlockPage}
            >
              {currentBlockPage}
            </li>
          ))}
          <li onClick={handleClickNextPage}>
            <i className="bx bxs-chevron-right"></i>
          </li>
          <li onClick={handleClickNextBlock}>
            <i className="bx bxs-chevrons-right"></i>
          </li>
        </ul>

        <Footer />
      </main>
    </div>
  );
};

export default Pokedex;
