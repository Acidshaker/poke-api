import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormHome from "../components/FormHome";
import GenderForm from "../components/GenderForm";
import "./styles/Home.css";

const Home = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <main className="home">
      <div className="home__container">
        <img
          className="home__container--img"
          src="/images/Professor_Oak.webp"
          alt="Oak proffesor image"
        />
        {nameTrainer ? (
          <div className="home__container--title">
            <p className="home__title-2">
              Excellent name {nameTrainer}.{" "}
              <span className="home__description--name">
                Now can you tell me your gender {nameTrainer}?
              </span>{" "}
            </p>
          </div>
        ) : (
          <div className="home__container--title">
            <p className="home__title">
              Hi trainer.{" "}
              <span className="home__description--name">
                Give me your name for start!
              </span>{" "}
            </p>
          </div>
        )}

        {nameTrainer ? <GenderForm /> : <FormHome />}
      </div>
    </main>
  );
};

export default Home;
