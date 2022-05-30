import { combineReducers } from "@reduxjs/toolkit";
import searchBooleanReducer from "./searchBoolean/searchBooleanSlice";
import searchByRangeReducer from "./searchRange/searchRangeSlice";
import searchInputReducer from "./searchInput/searchInputSlice";

const rootReducer = combineReducers({
  input: searchInputReducer,
  range: searchByRangeReducer,
  boolean: searchBooleanReducer,
});

export default rootReducer;
