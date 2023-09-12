import { createSlice } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";

const initialState: User = {
  name: "Abdelrahman",
  stocksCount: 0,
  money: 1000,
  stocks: {
    Apple: 0,
    Google: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
