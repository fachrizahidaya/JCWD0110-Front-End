import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = numberSlice.actions;

export default numberSlice.reducer;
