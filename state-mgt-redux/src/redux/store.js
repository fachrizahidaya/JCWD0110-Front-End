import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import numberSlice from "../features/numberSlice";

export const store = configureStore({
  reducer: {
    counterSlice,
    number: numberSlice,
  },
});
