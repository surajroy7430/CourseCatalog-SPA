import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/course/courseSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    favorites: favoriteReducer,
  },
});
