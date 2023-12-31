import { createSlice } from "@reduxjs/toolkit";
import { SWAP, WELCOME } from "../store/types";
import { save, get } from "../persistance";

const swapItemIdsFromDisc = get("swapItemIdsFromDisc");

const initialState = {
  page: WELCOME,
  catalogue: [],
  swapItemIds: swapItemIdsFromDisc ? swapItemIdsFromDisc : [],
  search: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    swapEnquiry: (state, action) => {
      console.log(state.swapItemIds);
      if (!state.swapItemIds.includes(action.payload)) {
        state.swapItemIds.push(action.payload);
        save("swapItemIdsFromDisc", state.swapItemIds);
      }
      state.page = SWAP;
    },
  },
});

export const { setPage, setSearch, swapEnquiry } = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectSearch = (state) => state.app.page;
export const selectCatalogue = (state) => state.app.catalogue;

export default appSlice.reducer;
