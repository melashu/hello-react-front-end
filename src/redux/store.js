import { configureStore } from "@reduxjs/toolkit";
import greetReducer from "./reducer";

const store = configureStore({
  reducer: {
    greet: greetReducer
  },
});

export default store;
