import { createSlice } from "@reduxjs/toolkit";

const genderTrainerSlice = createSlice({
  name: "genderTrainer",
  initialState: "",
  reducers: {
    setGenderTrainerGlobal: (state, action) => action.payload,
  },
});

export const { setGenderTrainerGlobal } = genderTrainerSlice.actions;
export default genderTrainerSlice.reducer;
