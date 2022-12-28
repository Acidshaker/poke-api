import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HomeProtected from "./components/HomeProtected";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import RouteProtected from "./components/RouteProtected";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HomeTrainerMenu from "./pages/HomeTrainerMenu";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingGlobal } from "./store/slices/loader.slice";
import Header from "./layout/Header";
import PokemonLiked from "./pages/PokemonLiked";
import FavPokemon from "./pages/FavPokemon";

function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const nameTrainer = useSelector((state) => state.nameTrainer);

  useEffect(() => {
    localStorage.setItem("nameTrainer", nameTrainer);
  }, [nameTrainer]);

  if (!loading) {
    document.querySelector("body").classList.add("body__width");
  } else {
    document.querySelector("body").classList.remove("body__width");
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setLoadingGlobal(false));
      }, 5000);
    }
  }, [loading]);

  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path="/" element={loading ? <Loader /> : <Home />} />
        </Route>

        <Route element={<RouteProtected />}>
          <Route
            path="/trainer-menu"
            element={loading ? <Loader /> : <HomeTrainerMenu />}
          />
          <Route
            path="/pokedex"
            element={
              <>
                <Header />
                <Pokedex />
              </>
            }
          />
          <Route
            path="/pokedex/:id"
            element={
              <>
                <Header />
                <Pokemon />
              </>
            }
          />
          <Route
            path="/liked-pokemons"
            element={
              <>
                <Header />
                <PokemonLiked />
                <Footer />
              </>
            }
          />
          <Route
            path="/liked-pokemons/:id"
            element={
              <>
                <Header />
                <FavPokemon />
                <Footer />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
