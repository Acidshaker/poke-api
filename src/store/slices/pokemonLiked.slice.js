import { createSlice } from "@reduxjs/toolkit";

const pokemonLikeSlice = createSlice({
  name: "pokemonLike",
  initialState: [],
  reducers: {
    setPokemonLikeGlobal: (state, action) => {
      if ([...state].includes(Number(action.payload))) {
        return [...state]
          .filter((pokemon) => pokemon != Number(action.payload))
          .sort((a, b) => a - b);
      } else {
        return [...state, Number(action.payload)].sort((a, b) => a - b);
      }
    },
  },
});

export const { setPokemonLikeGlobal } = pokemonLikeSlice.actions;
export default pokemonLikeSlice.reducer;
