import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

const searchInputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = searchInputSlice.actions;
export const selectSearchInput = (state) => state.input.searchInput;

export default searchInputSlice.reducer;
