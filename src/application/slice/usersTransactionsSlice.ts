import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "../../infrastructure/services/api/transactions";
import { UsersTransactions } from "../../domain/entities/transactions";

const initialState: {
  usersTransactions: UsersTransactions;
  status: string;
  error: string | null;
} = {
  usersTransactions: {},
  status: "idle",
  error: null,
};
export const fetchTransactions = createAsyncThunk(
  "usersTransactions/fetchTransactions",
  async () => {
    const response = await getTransactions();
    return response.data;
  }
);

const usersTransactionsSlice = createSlice({
  name: "usersTransactions",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersTransactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default usersTransactionsSlice.reducer;
