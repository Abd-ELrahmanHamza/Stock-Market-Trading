import { Services } from "../../domain/entities/services";

const setCompaniesStockRecordsMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    next(action);
    if (action.type === "companies/setCompaniesStockRecords") {
      const currentState = store.getState();
      api.postCompaniesRecords(currentState.companies);
    }
  };

export default [setCompaniesStockRecordsMiddleware];
