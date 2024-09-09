import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/Counter";

const store = configureStore({
  reducer: {
    counter: counter,
  },
});

export default store;
