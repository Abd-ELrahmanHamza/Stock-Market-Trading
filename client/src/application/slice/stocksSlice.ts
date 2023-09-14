import { createSlice } from "@reduxjs/toolkit";
import Stock from "../../domain/entities/stock";
import { buyStockReducer, sellStockReducer } from "../reducer/stockReducer";

const initialState: Stock[] = [
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
];

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    buyStock: buyStockReducer,
    sellStock: sellStockReducer,
  },
});

// Action creators are generated for each case reducer function
export const { buyStock, sellStock } = stocksSlice.actions;

export default stocksSlice.reducer;
