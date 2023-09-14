import { createSlice } from "@reduxjs/toolkit";
import { CompaniesRecords } from "../../domain/entities/company";
import { setCompaniesStockRecordsReducer } from "../reducer/companiesReducer";

const initialState: CompaniesRecords = {
  Apple: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
    {
      date: "2021-01-03",
      value: 20,
    },
  ],
  Google: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
  Facebook: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
  Microsoft: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
  Microsoft2: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
  Microsoft3: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
  Microsoft4: [
    {
      date: "2021-01-01",
      value: 10,
    },
    {
      date: "2021-01-02",
      value: 20,
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompaniesStockRecords: setCompaniesStockRecordsReducer,
  },
});

// Action creators are generated for each case reducer function
export const { setCompaniesStockRecords } = companiesSlice.actions;

export default companiesSlice.reducer;
