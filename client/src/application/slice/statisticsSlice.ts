import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Statistics from "../../domain/entities/statistics";
import { getStatistics } from "../../infrastructure/services/api/getStatistics";

const initialState: {
  statistics: Statistics;
  status: string;
  error: string | null;
} = {
  statistics: {
    investors: [],
    transactions: [],
    money: [],
  },
  status: "idle",
  error: null,
};
export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async () => {
    const response = await getStatistics();
    return response.data;
  }
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStatistics.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.statistics = action.payload;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default statisticsSlice.reducer;
