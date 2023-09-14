import { createSlice } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";
import {
  addMoneyReducer,
  addProfitReducer,
  buyStockReducer,
  sellStockReducer,
  setUserReducer,
} from "../reducer/userReducer";

const initialState: User = {
  name: "Abdelrahman",
  stocksCount: 240,
  money: 1000,
  stocks: [],
  profit: {},
  role: "investor",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMoney: addMoneyReducer,
    buyStock: buyStockReducer,
    sellStock: sellStockReducer,
    addProfit: addProfitReducer,
    setUser: setUserReducer,
  },
});

// Action creators are generated for each case reducer function
export const { addMoney, buyStock, sellStock, addProfit, setUser } =
  userSlice.actions;

export default userSlice.reducer;
