import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StockState } from "../../domain/entities/stock";
import { buyStockReducer, sellStockReducer } from "../reducer/stockReducer";
import { getStocks } from "../../infrastructure/services/api/stocks";

const initialState: StockState = {
  stocks: [
    {
      name: "Apple",
      count: 2,
      price: 2,
    },
    {
      name: "Google",
      count: 2,
      price: 2,
    },
    {
      name: "Facebook",
      count: 2,
      price: 2,
    },
    {
      name: "Microsoft",
      count: 2,
      price: 2,
    },
    {
      name: "Microsoft2",
      count: 2,
      price: 2,
    },
    {
      name: "Microsoft3",
      count: 2,
      price: 2,
    },
    {
      name: "Microsoft4",
      count: 5,
      price: 200,
    },
  ],
  status: "idle",
  error: null,
};

export const fetchStocks = createAsyncThunk("stocks/fetchStocks", async () => {
  const response = await getStocks();
  return response.data;
});

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    buyStock: buyStockReducer,
    sellStock: sellStockReducer,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStocks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stocks = action.payload.stocks;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

// Action creators are generated for each case reducer function
export const { buyStock, sellStock } = stocksSlice.actions;

export default stocksSlice.reducer;
