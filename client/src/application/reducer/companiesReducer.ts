import { PayloadAction } from "@reduxjs/toolkit";
import {
  CompaniesRecords,
  CompaniesState,
} from "../../domain/entities/company";

const setCompaniesStockRecordsReducer = (
  state: CompaniesState,
  action: PayloadAction<CompaniesRecords>
): CompaniesState => {
  return {
    companies: JSON.parse(JSON.stringify(action.payload)),
    status: "idle",
    error: null,
  };
};

export { setCompaniesStockRecordsReducer };
