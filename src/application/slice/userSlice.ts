import { createSlice } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";
import { addMoneyReducer } from "../reducer/userReducer";

const initialState: User = {
  name: "Abdelrahman",
  stocksCount: 0,
  money: 1000,
  stocks: [
    {
      name: "Apple",
      count: 0,
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
  },
});

// Action creators are generated for each case reducer function
export const { addMoney } = userSlice.actions;

export default userSlice.reducer;
