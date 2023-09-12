import { PayloadAction } from "@reduxjs/toolkit";
import CounterState from "../../domain/entities/counter";

const incrementReducer = (state: CounterState) => {
  state.value += 1;
};

const decrementReducer = (state: CounterState) => {
  state.value -= 1;
};

const incrementByAmountReducer = (
  state: CounterState,
 action: PayloadAction<number>
) => {
  state.value += action.payload;
};

export { incrementReducer, decrementReducer, incrementByAmountReducer };
