import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import { setGenderTrainerGlobal } from "../store/slices/genderTrainer.slice";
import "./styles/HomeTrainerMenu.css";
import { setLoadingGlobal } from "../store/slices/loader.slice";

const HomeTrainerMenu = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const genderTrainer = useSelector((state) => state.genderTrainer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavPokedex = () => {
    navigate("/pokedex");
  };

  const handleNavFavPokemons = () => {
    navigate("/liked-pokemons");
  };

  const handleLogout = () => {
    dispatch(setNameTrainerGlobal(""));
    dispatch(setGenderTrainerGlobal(""));
    dispatch(setLoadingGlobal(true));
  };

  return (
    <div className="home-trainer__container">
      <div className="home-trainer__description--container">
        <img
          className="home-trainer__img"
          src="/images/Professor_Oak.webp"
          alt=""
        />
        <div className="typing__container">
          <p className="home-trainer__description">
            Hello <span>{nameTrainer}</span>, nice to meet you what do you want
            to do?
          </p>
        </div>
      </div>
      <div className="home-trainer__menu--container">
        <img
          className="home-trainer__img"
          src={`/images/trainer_${genderTrainer}.png`}
          alt=""
        />
        <ul className="home-trainer__menu">
          <li onClick={handleNavPokedex}>
            <span>Look my Pokedex</span>
            <img
              className="pokedex--img"
              src="/images/pokedex-icon.png"
              alt=""
            />
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
      </div>
    </div>
  );
};

export default HomeTrainerMenu;
