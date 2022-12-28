import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: localStorage.getItem("nameTrainer") ?? "",
  reducers: {
    //actions
    setNameTrainerGlobal: (state, action) => {
      localStorage.setItem("nameTrainer", action.payload);
      return action.payload;
    },
  },
});

export const { setNameTrainerGlobal } = nameTrainerSlice.actions;
export default nameTrainerSlice.reducer;
