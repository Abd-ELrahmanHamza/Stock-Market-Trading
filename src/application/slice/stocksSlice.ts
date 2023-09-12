import { createSlice } from "@reduxjs/toolkit";
import Stock from "../../domain/entities/stock";

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
  name: "companies",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = stocksSlice.actions;

export default stocksSlice.reducer;
