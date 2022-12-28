import { createSlice } from "@reduxjs/toolkit";

const pokemonLikeSlice = createSlice({
  name: "pokemonLike",
  initialState: JSON.parse(localStorage.getItem("pokemonLike")) ?? [],
  reducers: {
    setPokemonLikeGlobal: (state, action) => {
      if ([...state].includes(Number(action.payload))) {
        localStorage.setItem(
          "pokemonLike",
          JSON.stringify(
            [...state]
              .filter((pokemon) => pokemon != Number(action.payload))
              .sort((a, b) => a - b)
          )
        );
        return [...state]
          .filter((pokemon) => pokemon != Number(action.payload))
          .sort((a, b) => a - b);
      } else {
        localStorage.setItem(
          "pokemonLike",
          JSON.stringify(
            [...state, Number(action.payload)].sort((a, b) => a - b)
          )
        );
        return [...state, Number(action.payload)].sort((a, b) => a - b);
      }
    },
    setPokemonLikeGlobalReset: (state, action) => {
      localStorage.setItem("pokemonLike", action.payload);
      return action.payload;
    },
  },
});

export const { setPokemonLikeGlobal, setPokemonLikeGlobalReset } =
  pokemonLikeSlice.actions;
export default pokemonLikeSlice.reducer;
