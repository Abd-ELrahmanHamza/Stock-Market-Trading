import { Services } from "../../domain/entities/services";

const setStocksMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    next(action);
    if (
      action.type === "stocks/sellStock" ||
      action.type === "stocks/buyStock"
    ) {
      const currentState = store.getState();
      api.postStocks(currentState.stocks);
    }
  };

const updateStockMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    next(action);
    if (action.type === "stocks/updateStock") {
      api.updateStocks(action.payload);
    }
  };

export default [setStocksMiddleware, updateStockMiddleware];
