import { createSlice } from "@reduxjs/toolkit";
const initialState = { page: "Welcome" };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;

export const selectPage = (state) => state.app.page;

export default appSlice.reducer;
