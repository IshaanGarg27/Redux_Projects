import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },

    decreament: (state) => {
      state.value -= 1;
    },

    increamentByValue: (state, action) => {
      state.value += action.payload;
    },

    decreamentByValue: (state, action) => {
      state.value -= action.payload;
    },

    multiply: (state, action) => {
      state.value *= action.payload;
    },
  },
});

export const {
  increament,
  decreament,
  increamentByValue,
  decreamentByValue,
  multiply,
} = counter.actions;
export default counter.reducer;
