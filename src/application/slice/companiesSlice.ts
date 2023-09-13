import { createSlice } from "@reduxjs/toolkit";
import { CompaniesRecords } from "../../domain/entities/company";

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
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
    },
  ],
  Facebook: [
    {
      date: "2021-01-01",
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
    },
  ],
  Microsoft: [
    {
      date: "2021-01-01",
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
    },
  ],
  Microsoft2: [
    {
      date: "2021-01-01",
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
    },
  ],
  Microsoft3: [
    {
      date: "2021-01-01",
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
    },
  ],
  Microsoft4: [
    {
      date: "2021-01-01",
      value: 100,
    },
    {
      date: "2021-01-02",
      value: 200,
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
