import { Services } from "../../domain/entities/services";

const setTransactionsMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    next(action);
    if (action.type === "transactions/addTransaction") {
      const currentState = store.getState();
      api.postTransactions(
        currentState.transactions,
        store.getState().user.name
      );
    }
  };

export default [setTransactionsMiddleware];
