import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loaging",
  initialState: true,
  reducers: {
    setLoadingGlobal: (state, action) => action.payload,
  },
});

export const { setLoadingGlobal } = loadingSlice.actions;
export default loadingSlice.reducer;
