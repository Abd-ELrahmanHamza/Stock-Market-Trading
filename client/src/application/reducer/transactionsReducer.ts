import { PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../domain/entities/transactions";

const addTransactionReducer = (
  state: Transaction[],
  action: PayloadAction<Transaction>
): Transaction[] => {
  const transaction = action.payload;
  const transactions = [...state, transaction];
  return transactions;
};

export { addTransactionReducer };
