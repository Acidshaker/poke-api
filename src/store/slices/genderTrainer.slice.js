import { createSlice } from "@reduxjs/toolkit";

const genderTrainerSlice = createSlice({
  name: "genderTrainer",
  initialState: localStorage.getItem("genderTrainer") ?? "",
  reducers: {
    setGenderTrainerGlobal: (state, action) => {
      localStorage.setItem("genderTrainer", action.payload);
      return action.payload;
    },
  },
});

export const { setGenderTrainerGlobal } = genderTrainerSlice.actions;
export default genderTrainerSlice.reducer;
