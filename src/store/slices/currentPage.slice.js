import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: 1,
  reducers: {
    setCurrentPageGlobal: (state, action) => action.payload,
  },
});

export const { setCurrentPageGlobal } = currentPageSlice.actions;
export default currentPageSlice.reducer;
