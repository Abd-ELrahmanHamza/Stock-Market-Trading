import { createSlice } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";
import {
  addMoneyReducer,
  buyStockReducer,
  sellStockReducer,
} from "../reducer/userReducer";

const initialState: User = {
  name: "Abdelrahman",
  stocksCount: 240,
  money: 1000,
  stocks: [
    {
      name: "Apple",
      count: 20,
      price: 200,
    },
    {
      name: "Google",
      count: 220,
      price: 200,
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMoney: addMoneyReducer,
    buyStock: buyStockReducer,
    sellStock: sellStockReducer,
  },
});

// Action creators are generated for each case reducer function
export const { addMoney, buyStock, sellStock } = userSlice.actions;

export default userSlice.reducer;
