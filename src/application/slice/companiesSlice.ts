import { createSlice } from "@reduxjs/toolkit";
import Companies from "../../domain/entities/companies";

const initialState: Companies = {
  companies: [
    {
      name: "Apple",
      stocks: 200,
      price: 200,
    },
    {
      name: "Google",
      stocks: 200,
      price: 200,
    },
    {
      name: "Facebook",
      stocks: 200,
      price: 200,
    },
    {
      name: "Microsoft",
      stocks: 200,
      price: 200,
    },
    {
      name: "Microsoft2",
      stocks: 200,
      price: 200,
    },
    {
      name: "Microsoft3",
      stocks: 200,
      price: 200,
    },
    {
      name: "Microsoft4",
      stocks: 200,
      price: 200,
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = companiesSlice.actions;

export default companiesSlice.reducer;
