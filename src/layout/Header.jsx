import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGenderTrainerGlobal } from "../store/slices/genderTrainer.slice";
import { setLoadingGlobal } from "../store/slices/loader.slice";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import { setPokemonLikeGlobalReset } from "../store/slices/pokemonLiked.slice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genderTrainer = useSelector((state) => state.genderTrainer);
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const pokemonLike = useSelector((state) => state.pokemonLike);

  const handleNavPokedex = () => {
    navigate("/pokedex");
  };

  const handleNavFavPokemons = () => {
    navigate("/liked-pokemons");
  };

  const handleLogout = () => {
    dispatch(setNameTrainerGlobal(""));
    dispatch(setGenderTrainerGlobal(""));
    dispatch(setPokemonLikeGlobalReset([]));
    dispatch(setLoadingGlobal(true));
  };

  const handleClickMenu = () => {
    const btnMenu = document.querySelector(".btn__menu--open");
    const btnClose = document.querySelector(".btn__menu--close");
    const menu = document.querySelector(".header__menu");

    btnMenu.classList.toggle("menu__btn--hidden");
    btnClose.classList.toggle("menu__btn--hidden");
    menu.classList.toggle("active__menu");
  };

  return (
    <header className="header__container">
      <section className="header__img--container">
        <img
          className="header__img"
          src={`images/pokemon-trainer-face-${genderTrainer}.png`}
          alt=""
        />
        <ul>
          <li>Trainer: {nameTrainer}</li>
          <li>Favorite pokemons: {pokemonLike.length}</li>
        </ul>
      </section>

      <div className="menu__btn--container">
        <i onClick={handleClickMenu} className="bx bx-menu btn__menu--open"></i>
        <i
          onClick={handleClickMenu}
          className="bx bx-x btn__menu--close menu__btn--hidden"
        ></i>
      </div>

      <ul className="header__menu">
        <li onClick={handleNavPokedex}>
          <span>Look my Pokedex</span>
          <img className="pokedex--img" src="/images/pokedex-icon.png" alt="" />
        </li>
        <li onClick={handleNavFavPokemons}>
          <span>Look my favorite Pokemons</span>
          <img className="fav--img" src="/images/fav-icon.png" alt="" />{" "}
        </li>
        <li>
          <a href="https://watch.pokemon.com/es-xl/#/" target="_blank">
            Watch TV Pokemon
          </a>{" "}
          <img
            className="tv__pokemon--img"
            src="https://play-lh.googleusercontent.com/Xr5CkM0gU_boKbHCKSstIu5tT1F4cwzhlE8qpJJ4O0iGEHfhEgdtnNL4lpFAUJE3t7o"
            alt=""
          />
        </li>
        <li onClick={handleLogout}>
          <span>Log-out</span>
          <i className="bx bx-log-out"></i>
        </li>
      </ul>
    </header>
  );
};

export default Header;
