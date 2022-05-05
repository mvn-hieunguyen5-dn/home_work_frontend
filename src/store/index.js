import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice.js";

const store = configureStore({
  reducer: {
    fav: favSlice,
  },
});

export default store;
