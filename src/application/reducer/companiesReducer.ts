import { PayloadAction } from "@reduxjs/toolkit";
import { CompaniesRecords } from "../../domain/entities/company";

const setCompaniesStockRecordsReducer = (
  state: CompaniesRecords,
  action: PayloadAction<CompaniesRecords>
): CompaniesRecords => {
  return JSON.parse(JSON.stringify(action.payload));
};

export { setCompaniesStockRecordsReducer };
