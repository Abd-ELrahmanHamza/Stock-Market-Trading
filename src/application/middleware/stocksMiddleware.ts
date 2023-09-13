import { Services } from "../../domain/entities/services";

const setStocksMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    if (
      action.type === "stocks/sellStock" ||
      action.type === "stocks/buyStock"
    ) {
      console.log("setStocksMiddleware", action.type);
      const currentState = store.getState();
      api.postStocks(currentState.companies);
    }
    next(action);
  };

export default [setStocksMiddleware];
