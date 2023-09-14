import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CompaniesState,
} from "../../domain/entities/company";
import { setCompaniesStockRecordsReducer } from "../reducer/companiesReducer";
import { getCompaniesRecords } from "../../infrastructure/services/api/companies";

const initialState: CompaniesState = {
  companies: {
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
  },
  status: "idle",
  error: null,
};

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await getCompaniesRecords();
    return response.data;
  }
);

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompaniesStockRecords: setCompaniesStockRecordsReducer,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCompanies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companies = action.payload.companies;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setCompaniesStockRecords } = companiesSlice.actions;

export default companiesSlice.reducer;
