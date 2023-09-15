import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Statistics from "../../domain/entities/statistics";
import { getStatistics } from "../../infrastructure/services/api/getStatistics";

const initialState: {
  statistics: Statistics;
  status: string;
  error: string | null;
} = {
  statistics: {
    investors: [
      {
        name: "09-15-2023",
        value: 9,
      },
      {
        name: "09-15-2023",
        value: 2,
      },
      {
        name: "09-15-2023",
        value: 3,
      },
      {
        name: "09-15-2023",
        value: 4,
      },
      {
        name: "09-15-2023",
        value: 5,
      },
      {
        name: "09-15-2023",
        value: 6,
      },
    ],
    transactions: [
      {
        name: "20-10-2023",
        value: 10,
      },
      {
        name: "20-10-2024",
        value: 220,
      },
      {
        name: "09-15-2023",
        value: 3,
      },
      {
        name: "09-15-2023",
        value: 4,
      },
      {
        name: "09-15-2023",
        value: 5,
      },
      {
        name: "09-15-2023",
        value: 6,
      },
    ],
    money: [
      {
        name: "20-10-2023",
        value: 10,
      },
      {
        name: "20-10-2024",
        value: -20,
      },
    ],
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
