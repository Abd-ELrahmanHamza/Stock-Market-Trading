import { Services } from "../../domain/entities/services";

const setTransactionsMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    if (action.type === "transactions/addTransaction") {
      console.log("setTransactionsMiddleware", action.type);
      const currentState = store.getState();
      api.postTransactions(currentState.companies, store.getState().user.name);
    }
    next(action);
  };

export default [setTransactionsMiddleware];
