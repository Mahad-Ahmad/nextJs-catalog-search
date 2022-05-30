import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBoolean: false,
};

const searchBooleanSlice = createSlice({
  name: "searchBoolean",
  initialState,
  reducers: {
    setSearchBoolean(state, action) {
      state.searchBoolean = action.payload;
    },
  },
});

export const { setSearchBoolean } = searchBooleanSlice.actions;
export const selectSearchBoolean = (state) => state.boolean.searchBoolean;

export default searchBooleanSlice.reducer;
