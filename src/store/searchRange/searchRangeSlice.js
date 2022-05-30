import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchRange: "",
};

const searchRangeSlice = createSlice({
  name: "searchRange",
  initialState,
  reducers: {
    setSearchRange(state, action) {
      state.searchRange = action.payload;
    },
  },
});

export const { setSearchRange } = searchRangeSlice.actions;
export const selectSearchRange = (state) => state.range.searchRange;

export default searchRangeSlice.reducer;
