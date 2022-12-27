import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";
import genderTrainer from "./slices/genderTrainer.slice";
import loading from "./slices/loader.slice";
import currentPage from "./slices/currentPage.slice";
import pokemonLike from "./slices/pokemonLiked.slice";

export default configureStore({
  reducer: {
    nameTrainer,
    genderTrainer,
    loading,
    currentPage,
    pokemonLike,
  },
});
