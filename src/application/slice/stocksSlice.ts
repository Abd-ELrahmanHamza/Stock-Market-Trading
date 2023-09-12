import { createSlice } from "@reduxjs/toolkit";
import Stock from "../../domain/entities/stock";

const initialState: Stock[] = [
  {
    name: "Apple",
    count: 200,
    price: 200,
  },
  {
    name: "Google",
    count: 200,
    price: 200,
  },
  {
    name: "Facebook",
    count: 200,
    price: 200,
  },
  {
    name: "Microsoft",
    count: 200,
    price: 200,
  },
  {
    name: "Microsoft2",
    count: 200,
    price: 200,
  },
  {
    name: "Microsoft3",
    count: 200,
    price: 200,
  },
  {
    name: "Microsoft4",
    count: 200,
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
