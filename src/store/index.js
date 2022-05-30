import { configureStore } from "@reduxjs/toolkit";
// import searchInputReducer from "./searchInput/searchInputSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
