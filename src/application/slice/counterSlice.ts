import { createSlice } from "@reduxjs/toolkit";
import Counter from "../../domain/entities/counter";

import {
  decrementReducer,
  incrementReducer,
  incrementByAmountReducer,
} from "../reducer/counterReducer";
const initialState: Counter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmount: incrementByAmountReducer,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
