import { createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../../domain/entities/transactions";
import { addTransactionReducer } from "../reducer/transactionsReducer";

const initialState: Transaction[] = [];

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: addTransactionReducer,
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
