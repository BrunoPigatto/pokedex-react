import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../redux/reduce";

const store = configureStore({
  reducer: pokemonReducer,
});

export default store;
