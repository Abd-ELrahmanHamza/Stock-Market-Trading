import { createSlice } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";
import {
  addMoneyReducer,
  addProfitReducer,
  buyStockReducer,
  sellStockReducer,
} from "../reducer/userReducer";

const initialState: User = {
  name: "Abdelrahman",
  stocksCount: 240,
  money: 1000,
  stocks: [],
  profit: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMoney: addMoneyReducer,
    buyStock: buyStockReducer,
    sellStock: sellStockReducer,
    addProfit: addProfitReducer,
  },
});

// Action creators are generated for each case reducer function
export const { addMoney, buyStock, sellStock, addProfit } = userSlice.actions;

export default userSlice.reducer;
